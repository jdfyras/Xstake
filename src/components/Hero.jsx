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
import LandingCards from './LandingCards';
import { Xicon } from '../utils/SvgApp';

const steps = [
  {
    title: 'Deposit Bitcoin',
    description:
      'Deposit your Bitcoin securely into xstake to start earning rewards.',
    image: 'path/to/step1-image.png',
  },
  {
    title: 'Get xBTC',
    description:
      'Instantly get liquid tokens representing your staked Bitcoin.',
    image: 'path/to/step2-image.png',
  },
  {
    title: 'Use in DeFi',
    description:
      'Maximize your yield by using your tokens in the DeFi ecosystem.',
    image: 'path/to/step3-image.png',
  },
];

export default function HeroSection() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.down('lg'));
  console.log('🚀 ~ file: Hero.jsx:44 ~ HeroSection ~ isMdUp:', isMdUp);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(
    '🚀 ~ file: Hero.jsx:45 ~ HeroSection ~ isSmallScreen:',
    isSmallScreen
  );

  const [activeStep, setActiveStep] = useState(0);
  const [prevStep, setPrevStep] = useState(0);

  const handleStepChange = (newStep) => {
    setPrevStep(activeStep);
    setActiveStep(newStep);
  };
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        backgroundColor: 'transparent',
        zIndex: 5,
        px: { xs: '16px', sm: '16px', md: '64px', lg: '108px' },
        pt: { xs: '64px', sm: '64px', md: '96px', lg: '128px' },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          width: '100%',
          gap: 4,
          isolation: 'isolate',
        }}
      >
        <Stack
          spacing={3}
          sx={{
            zIndex: 1,
          }}
        >
          <Stack spacing={3} alignItems="flex-start">
            <Typography
              sx={{
                fontFamily: 'Satoshi, sans-serif',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: !isSmDown ? 76 : 61,
                lineHeight: '120%',
                color: '#2D3239',
              }}
            >
              Stake Your Bitcoin,
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '14px',
                padding: 0,
                position: 'relative',
                width: '100%',
              }}
            >
              {!isSmDown && <Button5K />}
              <Typography
                sx={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontWeight: 500,
                  fontStyle: 'normal',
                  fontSize: !isSmDown ? 76 : 61,
                  lineHeight: '120%',
                  color: '#2D3239',
                  margin: '0 auto',
                  width: '100%',
                  textAlign: { xs: 'left', sm: 'right' },
                }}
              >
                Unlock DeFi
              </Typography>
              {isSmDown && <Button5K />}
            </Box>
          </Stack>

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

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              p: '16px 32px',
              gap: '16px',
              maxWidth: 210,
              maxHeight: 74,
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

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 1,
                border: '1px solid #FEFEFE',
                borderRadius: '50%',
              }}
            >
              <Xicon sx={{ color: '#FEFEFE', width: 24, height: 24 }} />
            </Box>
          </Box>
        </Stack>

        {!isSmDown && (
          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', lg: '561px' },
              mt: { xs: 4, lg: 0 },
              mb: { xs: 20, lg: 0 },
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
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
                    marginBottom: activeStep === index && 5,
                  }}
                  onClick={() => handleStepChange(index)}
                >
                  {activeStep !== index && step.title}
                </Typography>
              ))}
            </Box>

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
                  width: `${(activeStep / (steps.length - 1)) * 100}%`,
                }}
                transition={{ duration: 3 }}
              />
            </Box>
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
              ))}
            </Box>

            <motion.div
              key={activeStep}
              initial={{
                opacity: 0,
                x: prevStep > activeStep ? 100 : -100,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: prevStep > activeStep ? -100 : 100,
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
            </motion.div>
          </Box>
        )}
      </Box>
    </Box>
  );
}

function Button5K() {
  const theme = useTheme();
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));
  const isMdUp = useMediaQuery(theme.breakpoints.down('lg'));
  console.log('🚀 ~ file: Hero.jsx:44 ~ HeroSection ~ isMdUp:', isMdUp);

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(
    '🚀 ~ file: Hero.jsx:45 ~ HeroSection ~ isSmallScreen:',
    isSmallScreen
  );

  const [activeStep, setActiveStep] = useState(0);
  const [prevStep, setPrevStep] = useState(0);

  const handleStepChange = (newStep) => {
    setPrevStep(activeStep);
    setActiveStep(newStep);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: !isSmDown ? '16px 24px' : '10px',
        background: 'linear-gradient(90deg, #FFFFFF 0%, #E1DCEE 100%)',
        borderRadius: !isSmDown ? '16px' : '10px',
        left: isSmDown && '207px',
        top: isSmDown && '-80px',
        position: isSmDown && 'absolute',
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Satoshi, sans-serif',
          fontWeight: 400,
          fontSize: { xs: 18, sm: 20, md: 25 },
          lineHeight: '120%',
          color: '#75797E',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          mr: { xs: 1, sm: 1, md: 2 },
        }}
      >
        +5k users
      </Typography>

      <Box
        sx={{
          width: { xs: 18, sm: 24, md: 32 },
          height: { xs: 18, sm: 24, md: 32 },
          border: '1px solid #75797E',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <PersonIcon
          sx={{
            color: '#75797E',
            width: { xs: 18, sm: 18, md: 24 },
            height: { xs: 18, sm: 18, md: 24 },
          }}
        />
      </Box>
    </Box>
  );
}
