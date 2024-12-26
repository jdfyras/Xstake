import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import FullPotentialIcon from '../../assets/svg/FullPotentialIcon';

export default function CtaHero() {
  return (
    <Box
      sx={{
        // The outer container
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '10% 0%',
        width: '100%',
        padding: '64px',
        gap: '12px',
        isolation: 'isolate', // Ensures child z-index stacking is isolated
        background: '#181928',
        border: '1px solid rgba(167, 167, 167, 0.2)',
        borderRadius: '32px',
        position: 'relative', // Needed for absolutely positioning the SVG
        overflow: 'hidden', // Optionally hide anything that bleeds outside
      }}
    >
      {/* Background Icon Container */}
      <Box
        sx={{
          position: 'absolute',
          top: '-60px', // Adjust these to reposition the SVG
          right: '-250px',
          zIndex: 1, // Behind the text
        }}
      >
        <FullPotentialIcon
        // width="550px" height="auto"
        />
      </Box>

      {/* Content Block */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '24px',
          width: '768px',
          height: '290px',
          position: 'relative', // Make sure this content is on top
          zIndex: 2,
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 500,
            fontSize: '61px',
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
            fontSize: '20px',
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
            flexDirection: 'row',
            gap: '24px',
          }}
        >
          {/* Launch App Button */}
          <Button
            variant="contained"
            sx={{
              padding: '24px 32px',
              borderRadius: '100px',
              backgroundColor: '#EFEDFD',
              color: '#4D4B66',
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 500,
              fontSize: '20px',
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
              padding: '24px 32px',
              borderRadius: '100px',
              backgroundColor: '#161724',
              color: '#FEFEFE',
              border: '1px solid #EFEDFD',
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 500,
              fontSize: '20px',
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
