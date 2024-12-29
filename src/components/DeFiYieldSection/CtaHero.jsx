import React from 'react';
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import FullPotentialIcon from '../../assets/svg/FullPotentialIcon';

export default function CtaHero() {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        // The outer container
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stack content on small screens
        alignItems: { xs: 'flex-start', sm: 'center' },
        margin: '10% 0%',
        width: '100%',
        padding: { xs: '32px', sm: '32px', md: '48px', lg: '64px' },
        pb: { xs: '221px', sm: '221px', md: '236px', lg: '64px' },
        px: { xs: '32px', sm: '32px', md: '48px', lg: '64px' },
        gap: '12px',
        isolation: 'isolate',
        background: '#181928',
        border: '1px solid rgba(167, 167, 167, 0.2)',
        borderRadius: '32px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Icon Container */}
      <Box
        sx={{
          position: 'absolute',
          top: { xs: '50%', sm: '50%', md: '46%', lg: '-60px' },
          right: { xs: '-35%', sm: '-10%', md: '7%', lg: '-250px' },
          zIndex: 1,
          // width: 20,
        }}
      >
        <FullPotentialIcon
        // width={{ xs: '-80%', sm: '-30%', md: '-15%', lg: '-250px' }} //{!isLarge && '100%'}
        // Adjust width/height as needed for responsiveness
        />
      </Box>

      {/* Content Block */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: {
            xs: 'center',
            sm: 'center',
            md: 'center',
            lg: 'flex-start',
          }, // { xs: 'center', sm: 'flex-start' },
          textAlign: { xs: 'center', sm: 'center', md: 'center', lg: 'left' }, // { xs: 'center', sm: 'left' },
          padding: '0px',
          gap: '24px',
          width: { xs: '100%', sm: '100%', md: '100%', lg: '70%' },
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 500,
            fontSize: { xs: '32px', sm: '61px' },
            lineHeight: '120%',
            color: '#FEFEFE',
          }}
        >
          Ready to Unlock the Full Potential of Your Bitcoin?
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 400,
            fontSize: { xs: '16px', sm: '20px' },
            lineHeight: '120%',
            color: '#DDDDDD',
          }}
        >
          Start earning yield today while leveraging your Bitcoin in DeFi with
          our liquid staking
        </Typography>

        {/* Buttons Row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: '16px',
            alignItems: { xs: 'center', sm: 'flex-start' },
            width: { xs: '100%', sm: 'auto' },
          }}
        >
          {/* Launch App Button */}
          <Button
            variant="contained"
            sx={{
              width: { xs: '100%', sm: 'auto' },
              padding: '16px 24px',
              borderRadius: '100px',
              backgroundColor: '#EFEDFD',
              color: '#4D4B66',
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#EFEDFD',
              },
            }}
          >
            Launch App
          </Button>

          {/* Learn More Button */}
          <Button
            variant="contained"
            sx={{
              width: { xs: '100%', sm: 'auto' },
              padding: '16px 24px',
              borderRadius: '100px',
              backgroundColor: 'transparent',
              color: '#FEFEFE',
              border: '1px solid #EFEDFD',
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#161724',
              },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
