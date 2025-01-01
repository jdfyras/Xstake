import React from 'react';
import { Box } from '@mui/material';

const GradientBox = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: { xs: '100%', sm: 500, md: 756 }, // Responsive width
        height: { xs: 400, sm: 500, md: 610 }, // Responsive height
        left: { xs: 0, sm: -100, md: -267 }, // Responsive position
        top: { xs: 2000, sm: 2200, md: 2400 }, // Responsive top
        background:
          'linear-gradient(180deg, #B8B2F2 0%, #E1C8CF 54.5%, #EAAB80 100%)',
        filter: 'blur(100px)',
        zIndex: 3,
        opacity: 0.5,
        boxSizing: 'border-box',
      }}
    />
  );
};

export default GradientBox;
