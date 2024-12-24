import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

// Import your custom SVG icons
import XBTC from '../assets/svg/XBTC';
import BitcoinBTC from '../assets/svg/BitcoinBTC';

const stepsData = [
  {
    id: 1,
    step: 'Step 1',
    Icon: XBTC, // Replace with your SVG icon
    title: 'Stake Your Bitcoin',
    description:
      'Deposit Bitcoin to mint a liquid ERC20 token that mirrors your Bitcoin balance',
  },
  {
    id: 2,
    step: 'Step 2',
    Icon: XBTC, // Replace with your SVG icon
    title: 'Earn Native Yield',
    description:
      'Earn staking rewards automatically, without locking up your BTC',
  },
  {
    id: 3,
    step: 'Step 3',
    Icon: BitcoinBTC, // Replace with your SVG icon
    title: 'Leverage in DeFi',
    description:
      'Use your LTS xBTC across multiple DeFi for additional earnings',
  },
];

const HowItWorks = () => {
  return (
    <Box
      sx={{
        py: 4,
        px: 2,
        backgroundColor: '#f8f9fc',
        overflow: 'hidden',
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 4, fontWeight: 'bold', color: '#181928' }}
      >
        How It Works
      </Typography>

      {/* Horizontal scroll container */}
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          '-webkit-overflow-scrolling': 'touch',
          px: 2,
          '&::-webkit-scrollbar': { display: 'none' }, // Hide scrollbar
        }}
      >
        {stepsData.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{
              scale: 1.03,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            }}
            style={{
              flex: '0 0 300px',
              scrollSnapAlign: 'center',
            }}
          >
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                ':hover': {
                  cursor: 'pointer',
                },
              }}
            >
              <CardContent
                sx={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                {/* Icon */}
                <Box sx={{ mb: 2 }}>
                  <step.Icon width={50} height={50} />
                </Box>

                {/* Step label */}
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 'bold', color: '#f7931a' }}
                >
                  {step.step}
                </Typography>

                {/* Title */}
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: '#181928' }}
                >
                  {step.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{ color: '#666', lineHeight: 1.5 }}
                >
                  {step.description}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default HowItWorks;
