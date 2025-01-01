import React from 'react';
import { Box } from '@mui/material';

const Vector = () => {
  // Styles separated for better readability
  const vectorStyles = {
    boxSizing: 'border-box',
    position: 'absolute',
    width: { xs: 300, sm: 300, md: 300, lg: 756 },
    height: { xs: 240, sm: 300, md: 300, lg: 610 },
    left: { xs: 20, sm: 400, md: 600, lg: 1000 },
    top: { xs: 1500, sm: 5000, md: 5300, lg: 4000 },
    background:
      'linear-gradient(180deg, #B8B2F2 0%, #E1C8CF 54.5%, #EAAB80 100%)',
    filter: 'blur(100px)',
    flex: 'none',
    order: 5,
    flexGrow: 0,
    zIndex: 5,
  };

  return <Box sx={vectorStyles} />;
};

export default Vector;
