import React from 'react';
import { Box } from '@mui/material';

const BlurLayer1 = () => {
  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        position: 'absolute',
        width: {
          xs: '100%', // Full width for extra small screens
          sm: '80%', // 80% for small screens
          md: '756px', // Original width for medium and larger screens
          lg: '756px', // Original width for medium and larger screens
        },
        height: {
          xs: '300px', // Smaller height for smaller screens
          sm: '450px', // A moderate height for small screens
          md: '610px', // Original height for medium and larger screens
        },
        left: {
          xs: '-50px', // Adjust positioning for small screens
          sm: '-100px', // Slightly more adjustment for larger small screens
          md: '-300px', // Original positioning for medium and larger screens
          lg: '-187px', // Original positioning for medium and larger screens
        },
        top: {
          xs: '150px', // Adjust for small screens
          sm: '250px', // Moderate position for small screens
          md: '318px', // Original positioning for medium and larger screens
        },
        background:
          'linear-gradient(180deg, #B8B2F2 0%, #E1C8CF 54.5%, #EAAB80 100%)',
        filter: 'blur(100px)',
        zIndex: 0,
      }}
    />
  );
};

export default BlurLayer1;
