import React, { useRef } from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from 'framer-motion';
import BitcoinIcon from '../assets/svg/BitcoinIcon';

// Styled components
const StyledCard = styled(motion.div)(({ theme }) => ({
  maxHeight: '310px',
  maxWidth: '386.67px',

  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  background: 'linear-gradient(180deg, #FFFFFF 0%, #E1DCEE 100%)',
  border: '1px solid #DDDDDD',
  boxShadow: '0px 4px 12px rgba(16, 24, 40, 0.12)',
  position: 'relative',
  zIndex: 1,
  padding: '2rem',
  gap: '1.5rem',
  width: '100%',
  height: 'auto',
  borderRadius: '2rem',
  transformStyle: 'preserve-3d',
  [theme.breakpoints.up('sm')]: {
    padding: '2.5rem',
  },
}));

const TopSection = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '93px',
  width: '322.67px',
  height: '96px',
});

const Illustration = styled(Box)({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '24px',
  gap: '10px',
  width: '96px',
  height: '96px',
  background: '#FEFEFE',
  border: '1px solid #DDDDDD',
  borderRadius: '50%',
  position: 'relative',
  isolation: 'isolate',
});

const BlurredIcon = styled(Box)(
  ({ gradientStart = '#FEC28E', gradientEnd = '#FFD37A' }) => ({
    position: 'absolute',
    width: '48.91px',
    height: '48px',
    left: 'calc(50% - 48.91px / 2 + 7.19px)',
    top: '20.86px',
    opacity: 0.3,
    filter: 'blur(15px)',
    background: `linear-gradient(180deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
    borderRadius: '50%',
    zIndex: 0,
  })
);
const Badge = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px 16px',
  gap: '4px',
  width: '75px',
  height: '35px',
  background: '#FFF5E6',
  border: '1px solid #FF9800',
  borderRadius: '360px',
  fontFamily: "'Satoshi', sans-serif",
  whiteSpace: 'nowrap',

  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '120%',
  color: '#FF9800',
});

const Content = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '16px',
  width: '322.67px',
  height: '105px',
});

const Title = styled(Typography)({
  fontFamily: "'Satoshi', sans-serif",
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '39px',
  lineHeight: '120%',
  color: '#2D3239',
});

const Description = styled(Typography)({
  fontFamily: "'Satoshi', sans-serif",
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '130%',
  color: '#75797E',
});

// Animation Constants
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const StakeBitcoinCard = ({
  Icon,
  step,
  title,
  description,
  gradientStart,
  gradientEnd,
}) => {
  console.log('🚀 ~ file: HoverTiltCard.jsx:136 ~ ref:', {
    gradientStart,
    gradientEnd,
  });
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

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
      style={{
        transform,
        zIndex: 10,
      }}
    >
      {/* Top Section */}
      <TopSection>
        {/* Illustration */}
        <Illustration>
          <BlurredIcon
            gradientStart={gradientStart}
            gradientEnd={gradientEnd}
          />
          <Icon />
          {/* <Avatar
            sx={{
              width: '48px',
              height: '48px',
              background: 'linear-gradient(180deg, #FEC28E 0%, #FFD37A 100%)',
            }}
          >
            ₿
          </Avatar> */}
        </Illustration>
        {/* Badge */}
        <Badge>{step}</Badge>
      </TopSection>

      {/* Content */}
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </StyledCard>
  );
};

export default StakeBitcoinCard;
