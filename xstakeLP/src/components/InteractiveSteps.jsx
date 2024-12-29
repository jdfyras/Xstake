import React, { useState } from 'react';
import { Box, Typography, Card } from '@mui/material';
import { motion } from 'framer-motion';

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

const ProgressComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Box
      sx={{
        width: '100%',
        padding: 4,
        textAlign: 'center',
        position: 'relative',
      }}
    >
      {/* Step Titles */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 2,
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
            }}
            onClick={() => setActiveStep(index)}
          >
            {step.title}
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
            backgroundColor: '#9747FF',
            width: `${(activeStep / (steps.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.5 }}
        />
      </Box>

      {/* Step Circles */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          position: 'relative',
          top: '-15px',
        }}
      >
        {steps.map((_, index) => (
          <motion.div
            key={index}
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              border:
                activeStep === index
                  ? '3px solid #9747FF'
                  : '1px solid #DDDDDD',
              backgroundColor: '#FFFFFF',
              cursor: 'pointer',
            }}
            onClick={() => setActiveStep(index)}
          />
        ))}
      </Box>

      {/* Dynamic Card */}
      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Card
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
        </Card>
      </motion.div>
    </Box>
  );
};

export default ProgressComponent;
