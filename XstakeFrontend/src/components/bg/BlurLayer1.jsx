import React from 'react';
import { Box } from '@mui/material';

const BlurLayer1 = () => {
  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        position: 'absolute',
        width: '756px',
        height: '610px',
        left: '-187px',
        top: '318px',
        background:
          'linear-gradient(180deg, #B8B2F2 0%, #E1C8CF 54.5%, #EAAB80 100%)',
        filter: 'blur(100px)',
        flex: 'none',
        order: 7,
        flexGrow: 0,
        zIndex: 0,
      }}
    />
  );
};

export default BlurLayer1;
