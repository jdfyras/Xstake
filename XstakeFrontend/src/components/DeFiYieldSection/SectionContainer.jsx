import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function BitcoinHero() {
  return (
    <Box
      sx={{
        /* Container (Auto layout) */
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        gap: '24px',

        width: '768px',
        height: '290px',
        zIndex: 1,
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontFamily: 'Satoshi, sans-serif',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '61px',
          lineHeight: '120%',
          color: '#FEFEFE',
          width: '768px',
          height: '146px',
          margin: 0,
        }}
      >
        Ready to Unlock the Full Potential of Your Bitcoin?
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontFamily: 'Satoshi, sans-serif',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '20px',
          lineHeight: '120%',
          color: '#DDDDDD',
          width: '768px',
          height: '24px',
          margin: 0,
        }}
      >
        Start earning yield today while leveraging your Bitcoin in DeFi with our
        liquid staking
      </Typography>

      {/* Button Row */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          padding: 0,
          gap: '24px',
          width: '370px',
          height: '72px',
        }}
      >
        {/* "Launch App" Button */}
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px 32px',
            gap: '16px',

            width: '173px',
            height: '72px',
            backgroundColor: '#EFEDFD',
            borderRadius: '100px',
            textTransform: 'none',

            fontFamily: 'Satoshi, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '120%',
            color: '#4D4B66',

            /* Remove MUI’s default hover background color if you want the exact design color to remain on hover */
            '&:hover': {
              backgroundColor: '#EFEDFD',
            },
          }}
        >
          Launch App
        </Button>

        {/* "Learn More" Button */}
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px 32px',
            gap: '16px',

            width: '173px',
            height: '72px',
            backgroundColor: '#161724',
            borderRadius: '100px',
            textTransform: 'none',

            fontFamily: 'Satoshi, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '120%',
            color: '#FEFEFE',

            '&:hover': {
              backgroundColor: '#161724',
            },
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}
