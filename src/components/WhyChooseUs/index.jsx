import React from 'react';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
// import LiquidityIcon from '@mui/icons-material/AttachMoney';
// import LeverageIcon from '@mui/icons-material/TrendingUp';
// import SecurityIcon from '@mui/icons-material/Security';
// import TransparencyIcon from '@mui/icons-material/Visibility';
import LiquidityCard from './LiquidityCard';
import LiquidityIcon from '../../assets/svg/LiquidityIcon';
import LeverageIcon from '../../assets/svg/LeverageIcon';
import SecurityIcon from '../../assets/svg/SecurityIcon';
import TransparencyIcon from '../../assets/svg/TransparencyIcon';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Liquidity',
      description: 'Stay liquid and flexible while earning native rewards.',
      icon: <LiquidityIcon />,
    },
    {
      title: 'Leverage',
      description:
        'Deposit, collateralize, and provide liquidity effortlessly.',
      icon: <LeverageIcon />,
    },
    {
      title: 'Security',
      description:
        'Built on secure, decentralized infrastructure to protect your assets.',
      icon: <SecurityIcon />,
    },
    {
      title: 'Transparency',
      description: 'Track your native rewards and performance in real-time.',
      icon: <TransparencyIcon />,
    },
  ];

  return (
    <Box
      sx={{
        borderRadius: '0px 0px 32px 32px',
        border: '0px 1px solid #DDDDDD',
        py: { xs: 6, md: 12 }, // Responsive vertical padding
        backgroundColor: '#181928', // Example background color
      }}
    >
      <Container maxWidth="lg">
        {/* Using stable Grid from Material UI */}
        <Grid container spacing={{ xs: 4, md: 8 }}>
          {/* Left column: Heading */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              zIndex: 10,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                zIndex: 10,
                fontWeight: 500,
                fontSize: { xs: '42px', md: '76px' },
                lineHeight: 1.2,
                color: '#FEFEFE',
                mb: 3,
              }}
            >
              Why Choose Us for Bitcoin Staking?
            </Typography>
          </Grid>

          {/* Right column: Feature cards */}
          <Grid item xs={12} md={6}>
            <Stack
              spacing={4}
              sx={{
                zIndex: 10,
              }}
            >
              {features.map((feature, index) => (
                <LiquidityCard key={index} feature={feature} />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
