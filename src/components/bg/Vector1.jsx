import React from 'react';
import { Box } from '@mui/material';

const VectorComponent = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '756px',
        height: '610px',
        left: '-596px',
        top: '4600px',
        background:
          'linear-gradient(180deg, #B8B2F2 0%, #E1C8CF 54.5%, #EAAB80 100%)',
        filter: 'blur(100px)',
        boxSizing: 'border-box',
        zIndex: 4,
      }}
    />
  );
};

export default VectorComponent;
