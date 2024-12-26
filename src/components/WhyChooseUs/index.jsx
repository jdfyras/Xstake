import React from 'react';
import { Box, Typography } from '@mui/material';
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
    <Box
      sx={{
        // Outer container ("Why us" section)
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: '96px', // 96px top/bottom padding
        gap: '10px',
        width: '100%',
        background: '#181928', // Matches the design background
        // height: '928px',      // If you truly need a fixed height, uncomment
      }}
    >
      {/* Inner row container ("Frame 37") */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'flex-start',
          gap: '40px',
          width: '1224px', // As per design
          maxWidth: '100%', // Prevents overflow on small screens
          // height: '736px',      // If you truly need a fixed height, uncomment
        }}
      >
        {/* Left content: Title and description */}
        <Box
          sx={{
            // Matches the Figma spec: width: 528px, height: 273px
            width: { xs: '100%', md: '528px' },
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          <Typography
            // "Why Choose Us for Bitcoin Staking?" heading
            sx={{
              fontFamily: 'Satoshi',
              fontStyle: 'normal',
              fontWeight: 500, // "Medium"
              fontSize: { xs: '42px', md: '76px' }, // Responsive example
              lineHeight: '120%', // 1.2 (or 91px for 76px font)
              color: '#FEFEFE',
              mb: 3,
            }}
          >
            Why Choose Us for Bitcoin Staking?
          </Typography>
        </Box>

        {/* Right content: Cards */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: 0,
            gap: '32px', // 32px gap between cards
            width: { xs: '100%', md: '656px' },
            // height: '736px',      // If you truly need a fixed height, uncomment
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        >
          {features.map((feature, index) => (
            <LiquidityCard key={index} feature={feature} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChooseUs;
