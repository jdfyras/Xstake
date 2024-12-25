import React, { useRef } from 'react';
import { Box, Button, Typography, Avatar, CardContent } from '@mui/material';
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

// Styled Components
const BlurredIcon = styled(Box)(
  ({ gradientStart = '#FEC28E', gradientEnd = '#FF007A' }) => ({
    position: 'absolute',
    width: '48.91px',
    height: '48px',
    left: 'calc(50% - 48.91px / 2 + 7.19px)',
    top: '20.86px',
    opacity: 0.3,
    filter: 'blur(10px)',
    background: `linear-gradient(180deg, ${gradientStart} 0%, ${gradientEnd} 100%)`,
    borderRadius: '50%',
    zIndex: 0,
  })
);
const DescriptionButtonRow = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0px',
  gap: '10px',
  width: '322.67px',
  height: '63px',
  flex: 'none',
  order: 1,
  alignSelf: 'stretch',
  flexGrow: 0,
});
const StyledCard = styled(motion.div)(({ theme }) => ({
  maxHeight: '310px',
  maxWidth: '386.67px',
  background: 'linear-gradient(180deg, #FFFFFF 0%, #E1DCEE 100%)',
  border: '1px solid #DDDDDD',
  boxShadow: '0px 4px 12px rgba(16, 24, 40, 0.12)',
  position: 'relative',
  zIndex: 3,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
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
  //   alignItems: 'center',
  width: '100%',
  height: '96px',
  alignItems: 'flex-start',
  padding: '0px',
  //   gap: '93px',
  //   width: '322.67px',
  //   height: '96px',
});

const AvatarGroup = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '-12px',
  width: '224px',
  height: '96px',
});

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
  fontSize: '16pxu',
  lineHeight: '120%',
  color: '#FF9800',
});

const Content = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '16px',
  width: '322.67px',
  height: '126px',
});

const Title = styled(Typography)({
  fontFamily: "'Satoshi', sans-serif",
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
  flex: 'none',
  order: 0,
  flexGrow: 1,
  width: '182.67px',
  height: '63px',
});

const ExploreButton = styled(Button)({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '16px 24px',
  gap: '8px',
  width: '130px',
  height: '52px',
  border: '1px solid #161724',
  borderRadius: '100px',
  fontFamily: "'Satoshi', sans-serif",
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '120%',
  color: '#161724',
  textTransform: 'none',
  flex: 'none',
  order: 1,
  flexGrow: 0,
});

// Constants for animation
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const LeverageInDeFiCard = () => {
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
        {/* Logos */}
        <AvatarGroup>
          <Box
            sx={{
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
              zIndex: 2,
            }}
          >
            <BlurredIcon />
            <Box
              component="img"
              sx={{
                width: '48px',
                height: '48px',
                // borderRadius: '50%',
                // border: '1px solid #DDDDDD',
                // background: '#FEFEFE',
                position: 'relative',
                zIndex: 2,
              }}
              src={logo1}
              alt="Logo 1"
            />
          </Box>
          <Box
            sx={{
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
              zIndex: 1,
              marginLeft: '-32px',
            }}
          >
            <BlurredIcon gradientStart={'#171B70'} gradientEnd={'#171B70'} />
            <Box
              component="img"
              sx={{
                width: '48px',
                height: '48px',
                // borderRadius: '50%',
                // border: '1px solid #DDDDDD',
                // background: '#FEFEFE',
                position: 'relative',
                zIndex: 2,
              }}
              src={logo2}
              alt="Logo 2"
            />
          </Box>
          <Box
            sx={{
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
              zIndex: 0,
              marginLeft: '-32px',
            }}
          >
            <BlurredIcon gradientStart={'#2470FF'} gradientEnd={'#2470FF'} />
            <Box
              component="img"
              sx={{
                width: '48px',
                height: '48px',
                // borderRadius: '50%',
                // border: '1px solid #DDDDDD',
                // background: '#FEFEFE',
                position: 'relative',
                zIndex: 2,
              }}
              src={logo3}
              alt="Logo 3"
            />
          </Box>
        </AvatarGroup>
        {/* Badge */}
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

      {/* Button */}
    </StyledCard>
  );
};

export default LeverageInDeFiCard;
