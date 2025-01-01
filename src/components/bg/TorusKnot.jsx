import React from 'react';
import { Box, useTheme } from '@mui/material';
import myImage from '../../assets/images/s3-alpha-sig.png';

const TorusKnot = () => {
  const theme = useTheme();

  const dimensions = {
    xs: '200px',
    sm: '300px',
    md: '300px',
    lg: '500px',
  };

  const positions = {
    right: {
      xs: '-50px',
      sm: '-70px',
      md: '10%',
      lg: '5%',
    },
    top: {
      xs: '300px',
      sm: '400px',
      md: '500px',
      lg: '640px',
    },
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        display: { xs: 'none', md: 'block' },
        width: dimensions,
        height: dimensions,
        right: positions.right,
        top: positions.top,
        transform: 'rotate(27.97deg)',
        backgroundImage: `url(${myImage})`,
        backgroundSize: 'contain', //cover
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 4,
        overflow: 'hidden', // Prevent content from overflowing
        maxWidth: '100vw', // Ensures it doesn't exceed the viewport width
        maxHeight: '100vh', // Ensures it doesn't exceed the viewport height
      }}
    />
  );
};

export default TorusKnot;
