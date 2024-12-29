import React, { useRef } from 'react';
import { Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from 'framer-motion';

/**
 * Configurable rotation
 */
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

/**
 * ======================
 *  STYLED COMPONENTS
 * ======================
 */

// The outer card container
const StyledCard = styled(motion.div)(({ theme }) => ({
  // Basic Figma styles, but made responsive:
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  // Figma: background, border, shadow, borderRadius
  background: 'linear-gradient(180deg, #FFFFFF 0%, #E1DCEE 100%)',
  border: '1px solid #DDDDDD',
  boxShadow: '0px 4px 12px rgba(16, 24, 40, 0.12)',
  borderRadius: '2rem',
  position: 'relative',
  zIndex: 1,

  // Replace fixed width/height with responsive sizing
  width: '100%',
  // We can optionally limit the max size:
  [theme.breakpoints.up('sm')]: {
    maxWidth: 400, // adjust to taste
    maxHeight: 400,
    minHeight: 350,
  },
  // maxWidth: 400, // adjust to taste
  // Responsive spacing instead of fixed 32px
  padding: theme.spacing(3),
  gap: theme.spacing(2),

  // On larger screens, increase spacing
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4),
    gap: theme.spacing(3),
  },

  transformStyle: 'preserve-3d',
}));

// Row container for the top portion (illustration + badge)
const TopSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
  // Instead of gap: 93px, use responsive spacing
  gap: theme.spacing(2),
}));

// The illustration circle container
const Illustration = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',

  // Figma says 24px padding => use theme spacing
  padding: theme.spacing(3),
  gap: theme.spacing(1),

  background: '#FEFEFE',
  border: '1px solid #DDDDDD',
  borderRadius: '50%',
  position: 'relative',
  isolation: 'isolate',

  // Approx 96px from Figma, but let’s keep it somewhat responsive
  width: 96,
  height: 96,

  [theme.breakpoints.up('md')]: {
    width: 110,
    height: 110,
  },
}));

// Blurred gradient behind the icon
const BlurredIcon = styled(Box)(
  ({ gradientStart = '#FEC28E', gradientEnd = '#FFD37A' }) => ({
    position: 'absolute',
    // Figma had ~48px by 48px
    width: 48,
    height: 48,
    opacity: 0.3,
    filter: 'blur(15px)',
    background: `linear-gradient(180deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
    borderRadius: '50%',
    zIndex: 0,
  })
);

// The badge that displays the step or any small label
const Badge = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(1, 2),
  gap: theme.spacing(0.5),
  whiteSpace: 'nowrap',

  background: '#FFF5E6',
  border: '1px solid #FF9800',
  borderRadius: '360px',

  fontFamily: 'Satoshi, sans-serif',
  fontStyle: 'normal',
  fontWeight: 500,

  // Use clamp for responsive font size
  fontSize: 'clamp(0.8rem, 1vw, 1rem)',
  lineHeight: 1.2,
  color: '#FF9800',
}));

// Content container for the title/description
const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  // Let it grow to 100% width of parent
  width: '100%',
}));

// Title from figma: 39px => scale it with clamp
const Title = styled(Typography)(({ theme }) => ({
  fontFamily: 'Satoshi, sans-serif',
  fontStyle: 'normal',
  fontWeight: 500,
  // Use clamp or a typography variant
  fontSize: 'clamp(1.75rem, 4vw, 2.4rem)', // ~ 28px -> 39px
  lineHeight: 1.2,
  color: '#2D3239',
}));

// Description from figma: 16px => scale it with clamp
const Description = styled(Typography)(({ theme }) => ({
  fontFamily: 'Satoshi, sans-serif',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: 'clamp(0.875rem, 2vw, 1rem)', // ~ 14px -> 16px
  lineHeight: 1.3,
  color: '#75797E',
}));

/**
 * ======================
 *      COMPONENT
 * ======================
 */
const StakeBitcoinCard = ({
  Icon, // The icon component (e.g., your BitcoinIcon)
  step, // String or number for the badge
  title, // Title text
  description, // Description text
  gradientStart, // Start of the blurred gradient
  gradientEnd, // End of the blurred gradient
}) => {
  const ref = useRef(null);

  // Framer-motion states
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  // Combine x/y into a single transform string
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const { width, height } = rect;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    // Tilt calculations
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <StyledCard
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
    >
      {/* Top Section */}
      <TopSection>
        {/* Left side: Illustration (icon + blurred gradient) */}
        <Illustration>
          <BlurredIcon
            gradientStart={gradientStart}
            gradientEnd={gradientEnd}
          />
          {Icon && <Icon />}
        </Illustration>

        {/* Right side: Badge */}
        <Badge>{step}</Badge>
      </TopSection>

      {/* Content Area */}
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </StyledCard>
  );
};

export default StakeBitcoinCard;
