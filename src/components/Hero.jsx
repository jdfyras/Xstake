import React, { useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Card,
} from '@mui/material';
import { motion } from 'framer-motion';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import BitcoinStakeCard from './BitcoinStakeCard';
import UseInDefi from './UseInDefi';
import HoverPin from './HoverPin';
import StakedBitcoinIllustration from './StakedBitcoinIllustration';

/** 1) Migrate the "steps" array from ProgressComponent */
const steps = [
  {
    title: 'Deposit Bitcoin',
    description:
      'Deposit your Bitcoin securely into xstake to start earning rewards.',
    image: 'path/to/step1-image.png', // Replace with actual image path
  },
  {
    title: 'Get xBTC',
    description:
      'Instantly get liquid tokens representing your staked Bitcoin.',
    image: 'path/to/step2-image.png', // Replace with actual image path
  },
  {
    title: 'Use in DeFi',
    description:
      'Maximize your yield by using your tokens in the DeFi ecosystem.',
    image: 'path/to/step3-image.png', // Replace with actual image path
  },
];

export default function HeroSection() {
  const theme = useTheme();
  // const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isMdUp = useMediaQuery(theme.breakpoints.down('lg')); //1200
  console.log('🚀 ~ file: Hero.jsx:44 ~ HeroSection ~ isMdUp:', isMdUp);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(
    '🚀 ~ file: Hero.jsx:45 ~ HeroSection ~ isSmallScreen:',
    isSmallScreen
  );

  /** 2) Add local state for activeStep (from ProgressComponent) */
  const [activeStep, setActiveStep] = useState(0);
  const [prevStep, setPrevStep] = useState(0);

  const handleStepChange = (newStep) => {
    setPrevStep(activeStep);
    setActiveStep(newStep);
  };
  return (
    <Box
      // Main outer container
      sx={{
        position: 'relative',
        width: '100%',
        // minHeight: '100vh',
        backgroundColor: 'transparent', // Set the background to transparent
        zIndex: 5,
        // overflow: 'hidden',
      }}
    >
      {/**
       * 1) The large Ellipse 4 (blurred radial gradient)
       *    (Commented out in your example, but you can re-enable if needed)
       */}
      {/* <Box
        sx={{
          position: 'absolute',
          width: 1777,
          height: 809,
          left: '50%',
          top: 137,
          transform: 'translateX(-50%)',
          background:
            'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255,255,255,0) 100%)',
          filter: 'blur(10.2px)',
          zIndex: 8,
        }}
      /> */}

      {/**
       * 2) Content container, up to ~1225px wide.
       *    Using a flex row on large screens, column on smaller.
       */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          // maxWidth: 1225,
          width: '100%',
          // margin: '0 auto',
          // mt: { xs: 4, md: 8 },
          // px: { xs: 2, md: 0 },
          gap: 4,
          isolation: 'isolate',
        }}
      >
        {/**
         * 3) LEFT CONTENT: Title, subheading, CTA
         */}
        <Stack
          spacing={3} // vertical gap
          sx={{
            width: { xs: '100%', md: '654.64px' },
            minHeight: 336,
            zIndex: 1,
          }}
        >
          {/* Header: big text + row with +5k badge and "Unlock DeFi" */}
          <Stack spacing={3} alignItems="flex-start">
            {/* Big heading: "Stake Your Bitcoin," */}
            <Typography
              sx={{
                fontFamily: 'Satoshi, sans-serif',
                fontStyle: 'normal',
                fontWeight: 500,
                // Scale from ~32px to 76px
                fontSize: { xs: '2rem', sm: '3rem', md: '4.75rem' },
                lineHeight: 1.2,
                color: '#2D3239',
              }}
            >
              Stake Your Bitcoin,
            </Typography>

            {/* Row with badge (+5k users) and "Unlock DeFi" */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2,
                width: '100%',
              }}
            >
              {/* Gradient badge */}
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  p: '16px 24px',
                  background:
                    'linear-gradient(90deg, #FFFFFF 0%, #E1DCEE 100%)',
                  borderRadius: '16px',
                }}
              >
                {/* "+5k users" text */}
                <Typography
                  sx={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontWeight: 400,
                    fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.56rem' },
                    lineHeight: '120%',
                    color: '#75797E',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    mr: 2,
                  }}
                >
                  +5k users
                </Typography>

                {/* Circle with Person icon */}
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    border: '1px solid #75797E',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <PersonIcon
                    sx={{ color: '#75797E', width: 24, height: 24 }}
                  />
                </Box>
              </Box>

              {/* "Unlock DeFi" big text */}
              <Typography
                sx={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 500,
                  fontSize: { xs: '2rem', sm: '3rem', md: '4.75rem' },
                  lineHeight: 1.2,
                  color: '#2D3239',
                  textAlign: { xs: 'left', sm: 'right' },
                  width: '100%',
                }}
              >
                Unlock DeFi
              </Typography>
            </Box>
          </Stack>

          {/* Subheading */}
          <Typography
            sx={{
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 400,
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.58rem' },
              lineHeight: 1.3,
              color: '#75797E',
              maxWidth: '654.64px',
            }}
          >
            Earn yield on your Bitcoin through liquid staking
          </Typography>

          {/* CTA button => Pill shape with icon */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              p: '16px 32px',
              gap: '16px',
              width: { xs: 'auto', sm: '206px' },
              height: { xs: 'auto', sm: '72px' },
              background: '#161724',
              cursor: 'pointer',

              borderRadius: '100px',
              '&:hover': {
                backgroundColor: '#2D3239',
                borderColor: '#AAAAAA',
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 500,
                fontSize: { xs: '1rem', sm: '1.25rem' },
                lineHeight: '120%',
                color: '#FEFEFE',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}
            >
              Get xBTC
            </Typography>

            {/* Mini circle with an icon (could be CloseIcon or anything) */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
                border: '1px solid #FEFEFE',
                borderRadius: '50%',
              }}
            >
              <CloseIcon sx={{ color: '#FEFEFE', width: 24, height: 24 }} />
            </Box>
          </Box>
        </Stack>

        {/**
         * 4) RIGHT CONTENT (REPLACING the static example)
         *    We bring in the dynamic stepper from ProgressComponent.
         */}
        {!isMdUp ? (
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', lg: '561px' },
              mt: { xs: 4, lg: 0 },
              zIndex: 2,
            }}
          >
            {/* Step Titles */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                // marginBottom: 2,
              }}
            >
              {steps.map((step, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontFamily: 'Satoshi',
                    fontWeight: 500,
                    fontSize: '20px',
                    color: activeStep === index ? '#2D3239' : '#75797E',
                    cursor: 'pointer',
                    textAlign: 'center',
                    flex: 1,
                    // marginBottom: 0,
                    // marginBottom: activeStep === index && 5,
                  }}
                  onClick={() => handleStepChange(index)}
                >
                  {activeStep === index && step.title}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                // marginBottom: 2,
              }}
            >
              {steps.map((step, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontFamily: 'Satoshi',
                    fontWeight: 500,
                    fontSize: '20px',
                    color: activeStep === index ? '#2D3239' : '#75797E',
                    cursor: 'pointer',
                    textAlign: 'center',
                    flex: 1,
                    // marginBottom: 0,
                    marginBottom: activeStep === index && 5,
                  }}
                  onClick={() => handleStepChange(index)}
                >
                  {activeStep !== index && step.title}
                </Typography>
              ))}
            </Box>

            {/* Progress Line */}
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: '2px',
                backgroundColor: '#DDDDDD',
              }}
            >
              <motion.div
                style={{
                  position: 'absolute',
                  height: '2px',
                  // backgroundColor: '#9747FF',
                  width: `${(activeStep / (steps.length - 1)) * 100}%`,
                }}
                transition={{ duration: 3 }}
              />
            </Box>
            {/* Step Circles */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'relative',
                top: '-15px',
                mb: 4,
              }}
            >
              {steps.map((_, index) => (
                <HoverPin
                  key={index}
                  setActiveStep={handleStepChange}
                  index={index}
                  activeStep={activeStep}
                />
                // <motion.div
                //   key={index}
                //   style={{
                //     width: '30px',
                //     height: '30px',
                //     borderRadius: '50%',
                //     border:
                //       activeStep === index
                //         ? '3px solid #9747FF'
                //         : '1px solid #DDDDDD',
                //     backgroundColor: '#FFFFFF',
                //     cursor: 'pointer',
                //   }}
                //   onClick={() => setActiveStep(index)}
                // />
              ))}
            </Box>

            {/* Dynamic Card (step content) */}

            <motion.div
              key={activeStep}
              initial={{
                opacity: 0,
                x: prevStep > activeStep ? 100 : -100, // Slide from right if next, left if previous
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: prevStep > activeStep ? -100 : 100, // Slide out to the left or right
              }}
              transition={{ duration: 0.5 }}
            >
              {activeStep === 0 ? (
                <BitcoinStakeCard />
              ) : activeStep === 1 ? (
                <StakedBitcoinIllustration />
              ) : (
                <UseInDefi />
              )}

              {/* <Card
              sx={{
                margin: '20px auto',
                padding: 4,
                maxWidth: '600px',
                textAlign: 'center',
                boxShadow: '0px 4px 64px rgba(16, 24, 40, 0.12)',
                borderRadius: '24px',
                position: 'relative',
              }}
            >
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                style={{ maxWidth: '100%', marginBottom: '20px' }}
              />
              <Typography variant="h5" gutterBottom>
                {steps[activeStep].title}
              </Typography>
              <Typography>{steps[activeStep].description}</Typography>
            </Card> */}
            </motion.div>
          </Box>
        ) : (
          <>
            <BitcoinStakeCard />
            : activeStep === 1 ?
            <StakedBitcoinIllustration />
            :
            <UseInDefi />
          </>
        )}
      </Box>
    </Box>
  );
}
