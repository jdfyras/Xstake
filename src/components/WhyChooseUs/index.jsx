import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import LiquidityIcon from '@mui/icons-material/AttachMoney';
import LeverageIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import TransparencyIcon from '@mui/icons-material/Visibility';
import LiquidityCard from './LiquidityCard';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Liquidity',
      description: 'Stay liquid and flexible while earning native rewards.',
      icon: <LiquidityIcon fontSize="large" />,
    },
    {
      title: 'Leverage',
      description:
        'Deposit, collateralize, and provide liquidity effortlessly.',
      icon: <LeverageIcon fontSize="large" />,
    },
    {
      title: 'Security',
      description:
        'Built on secure, decentralized infrastructure to protect your assets.',
      icon: <SecurityIcon fontSize="large" />,
    },
    {
      title: 'Transparency',
      description: 'Track your native rewards and performance in real-time.',
      icon: <TransparencyIcon fontSize="large" />,
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', py: 6, px: 3 }}>
      <Grid container spacing={4} alignItems="flex-start">
        {/* Left Column: Text */}
        <Grid item xs={12} md={6}>
          <Box sx={{ px: 2 }}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 3, color: 'text.primary' }}
            >
              Why Choose Us for Bitcoin Staking?
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', lineHeight: 1.8 }}
            >
              Discover the best features for staking your Bitcoin with us. From
              liquidity to transparency, our platform ensures you earn rewards
              seamlessly and securely. Each feature is built with you in mind
              for a streamlined staking experience.
            </Typography>
          </Box>
        </Grid>

        {/* Right Column: Cards */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {features.map((feature, index) => (
              <LiquidityCard key={index} feature={feature} />
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
