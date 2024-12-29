import React, { useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from 'framer-motion';

import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';
import logo3 from '../assets/images/logo3.png';
import ArrowDown from '../assets/svg/ArrowDown';

/**
 * ======================
 *   ANIMATION CONSTANTS
 * ======================
 */
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

/**
 * ======================
 *   STYLED COMPONENTS
 * ======================
 */

// Card container
const StyledCard = styled(motion.div)(({ theme }) => ({
  position: 'relative',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  // Figma gradient, border, shadow, borderRadius
  background: 'linear-gradient(180deg, #FFFFFF 0%, #E1DCEE 100%)',
  border: '1px solid #DDDDDD',
  boxShadow: '0px 4px 12px rgba(16, 24, 40, 0.12)',
  borderRadius: '2rem',
  zIndex: 3,
  transformStyle: 'preserve-3d',

  // Fill the container
  width: '100%',
  padding: theme.spacing(3),
  gap: theme.spacing(2),

  [theme.breakpoints.up('sm')]: {
    maxWidth: 400,
    maxHeight: 400,
    minHeight: 350,
    padding: theme.spacing(4),
    gap: theme.spacing(3),
  },
}));

/**
 * Switch to column layout under 300px
 */
const TopSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row', // default
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  width: '100%',

  // Override under 300px
  '@media (max-width: 300px)': {
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
}));

// Logos container
const LogoGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  isolation: 'isolate',
  position: 'relative',
}));

// Reusable circle container for each logo
const LogoCircle = styled(Box)(({ theme }) => ({
  position: 'relative',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#FEFEFE',
  border: '1px solid #DDDDDD',
  borderRadius: '50%',
  isolation: 'isolate',
  padding: theme.spacing(3), // ~24px from Figma
  width: 96,
  height: 'auto',

  // For screens under 300px, shrink the circle
  '@media (max-width: 300px)': {
    width: 64,
    padding: theme.spacing(1.5),
  },
}));

// Blurred gradient behind the icon or logo
const BlurredIcon = styled(Box)(
  ({ gradientStart = '#FEC28E', gradientEnd = '#FF007A' }) => ({
    position: 'absolute',
    width: 48,
    height: 48,
    top: 20,
    left: 32,
    opacity: 0.3,
    filter: 'blur(8px)',
    borderRadius: '50%',
    background: `linear-gradient(180deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
    zIndex: 0,
  })
);

// Step badge
const Badge = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  background: '#FFF5E6',
  border: '1px solid #FF9800',
  borderRadius: 360,
  padding: theme.spacing(1, 2),
  gap: theme.spacing(0.5),
  fontFamily: 'Satoshi, sans-serif',
  fontWeight: 500,
  fontSize: 'clamp(0.8rem, 1vw, 1rem)',
  lineHeight: 1.2,
  color: '#FF9800',
}));

// Main content (title + row)
const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(2),
  width: '100%',
}));

// Title
const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "'Satoshi', sans-serif",
  fontWeight: 500,
  fontStyle: 'normal',
  fontSize: 'clamp(1.75rem, 4vw, 2.4rem)',
  lineHeight: 1.2,
  color: '#2D3239',
}));

// Row for description & button
const DescriptionButtonRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: theme.spacing(2),
  width: '100%',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
}));

// Description text
const Description = styled(Typography)(({ theme }) => ({
  fontFamily: "'Satoshi', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
  lineHeight: 1.3,
  color: '#75797E',
  flex: '1 1 auto',
  minWidth: '160px',
}));

// Explore button
const ExploreButton = styled(Button)(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid #161724',
  borderRadius: 100,
  textTransform: 'none',
  fontFamily: "'Satoshi', sans-serif",
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: 'clamp(0.85rem, 1vw, 1rem)',
  lineHeight: '120%',
  color: '#161724',
  padding: theme.spacing(2, 3),
}));

/**
 * ======================
 *   COMPONENT
 * ======================
 */
const LeverageInDeFiCard = () => {
  const ref = useRef(null);

  // Framer motion states for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const { width, height } = rect;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

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
        {/* Logos */}
        <LogoGroup>
          {/* Logo #1 */}
          <Box sx={{ marginRight: '-32px' }}>
            <LogoCircle>
              <BlurredIcon gradientStart="#FEC28E" gradientEnd="#FF007A" />
              <Box
                component="img"
                src={logo1}
                alt="Logo 1"
                sx={{
                  width: 48,
                  height: 48,
                  position: 'relative',
                  zIndex: 1,
                  // Decrease further if under 300px
                  '@media (max-width: 300px)': {
                    width: 32,
                    height: 32,
                  },
                }}
              />
            </LogoCircle>
          </Box>

          {/* Logo #2 */}
          <Box sx={{ marginRight: '-32px' }}>
            <LogoCircle>
              <BlurredIcon gradientStart="#171B70" gradientEnd="#171B70" />
              <Box
                component="img"
                src={logo2}
                alt="Logo 2"
                sx={{
                  width: 48,
                  height: 48,
                  position: 'relative',
                  zIndex: 1,
                  '@media (max-width: 300px)': {
                    width: 32,
                    height: 32,
                  },
                }}
              />
            </LogoCircle>
          </Box>

          {/* Logo #3 */}
          <Box>
            <LogoCircle>
              <BlurredIcon gradientStart="#2470FF" gradientEnd="#2470FF" />
              <Box
                component="img"
                src={logo3}
                alt="Logo 3"
                sx={{
                  width: 48,
                  height: 48,
                  position: 'relative',
                  zIndex: 1,
                  '@media (max-width: 300px)': {
                    width: 32,
                    height: 32,
                  },
                }}
              />
            </LogoCircle>
          </Box>
        </LogoGroup>

        {/* Step Badge */}
        <Badge>Step 3</Badge>
      </TopSection>

      {/* Content Section */}
      <Content>
        <Title>Leverage in DeFi</Title>
        <DescriptionButtonRow>
          <Description>
            Use your LTS xBTC across multiple DeFi for additional earnings.
          </Description>
          <ExploreButton endIcon={<ArrowDown />}>Explore</ExploreButton>
        </DescriptionButtonRow>
      </Content>
    </StyledCard>
  );
};

export default LeverageInDeFiCard;
