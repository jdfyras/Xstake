import React from 'react';
import { Box } from '@mui/material';

const Ellipse = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: { xs: '90vw', sm: '80vw', md: '70vw', lg: '60vw' }, // Responsive widths
        height: { xs: '50vh', sm: '40vh', md: '35vh', lg: '30vh' }, // Responsive heights
        left: '50%',
        top: { xs: '10vh', sm: '15vh', md: '20vh', lg: '25vh' }, // Adjust position for different screens
        transform: 'translateX(-50%)', // Center horizontally
        background:
          'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        filter: 'blur(10.2px)',
        zIndex: 1,
      }}
    />
  );
};

export default Ellipse;
