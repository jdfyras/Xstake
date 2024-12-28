import React from 'react';
import { Box } from '@mui/material';

const BlurLayer2 = () => {
  return (
    <Box
      sx={{
        // Instead of fixed width & height, use responsive or relative units
        position: 'absolute',
        // This example scales from 80% width on extra-small screens
        // up to the original 1016px on medium screens and above
        width: {
          xs: '80%', // mobile
          sm: '70%', // tablet
          md: '1016px', // desktop
        },
        // Same idea for the height:
        height: {
          xs: '200px',
          sm: '220px',
          md: '256px',
        },
        // Position responsively; you can adjust these
        // so they look good at each breakpoint
        top: {
          xs: '2%',
          sm: '3%',
          md: '5%',
        },
        left: {
          xs: '5%', // 10% from the left on xs
          sm: '10%',
          md: '20%',
          lg: '40%',
        },
        zIndex: 2,
      }}
    >
      {/* First Vector */}
      <Box
        sx={{
          boxSizing: 'border-box',
          position: 'absolute',
          // Try percentages so these shapes move/scale relative to their parent
          left: {
            xs: '65%',
            sm: '75%',
            md: '79.92%',
          },
          top: {
            xs: '50%',
            sm: '60%',
            md: '69.64%',
          },
          // You can remove right/bottom if you prefer using width/height + top/left
          right: {
            xs: '-10%',
            sm: '-8%',
            md: '-5.71%',
          },
          bottom: {
            xs: '-30%',
            sm: '-35%',
            md: '-45.83%',
          },
          width: {
            xs: '30%',
            sm: '25%',
            md: 'auto',
          },
          height: {
            xs: '30%',
            sm: '25%',
            md: 'auto',
          },
          background:
            'linear-gradient(180deg, #B8B2F2 0%, #E1C8CF 54.5%, #EAAB80 100%)',
          filter: 'blur(100px)',
          zIndex: 10,
        }}
      />

      {/* Second Vector */}
      <Box
        sx={{
          boxSizing: 'border-box',
          position: 'absolute',
          left: {
            xs: '75%',
            sm: '80%',
            md: '88.08%',
          },
          top: {
            xs: '70%',
            sm: '85%',
            md: '98.21%',
          },
          right: {
            xs: '0%',
            sm: '-2%',
            md: '-0.65%',
          },
          bottom: {
            xs: '-20%',
            sm: '-25%',
            md: '-35.12%',
          },
          width: {
            xs: '20%',
            sm: '15%',
            md: 'auto',
          },
          height: {
            xs: '20%',
            sm: '15%',
            md: 'auto',
          },
          background:
            'linear-gradient(180deg, #B8B2F2 0%, #E1C8CF 54.5%, #EAAB80 100%)',
          filter: 'blur(50px)',
        }}
      />
    </Box>
  );
};

export default BlurLayer2;
