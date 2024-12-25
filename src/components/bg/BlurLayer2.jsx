import React from 'react';
import { Box } from '@mui/material';

const BlurLayer2 = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '1016px',
        height: '256px',
        left: '679px',
        top: '234px',
        flex: 'none',
        order: 0,
        flexGrow: 0,
        zIndex: 2,
      }}
    >
      {/* First Vector */}
      <Box
        sx={{
          boxSizing: 'border-box',
          position: 'absolute',
          left: '79.92%',
          right: '-5.71%',
          top: '69.64%',
          bottom: '-45.83%',
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
          left: '88.08%',
          right: '-0.65%',
          top: '98.21%',
          bottom: '-35.12%',
          background:
            'linear-gradient(180deg, #B8B2F2 0%, #E1C8CF 54.5%, #EAAB80 100%)',
          filter: 'blur(50px)',
        }}
      />
    </Box>
  );
};

export default BlurLayer2;
