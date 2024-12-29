import React from 'react';
import { Box } from '@mui/material';

const Ellipse = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '1777px',
        height: '809px',
        left: 'calc(50% - 1777px / 2 - 0.5px)',
        top: '137px',
        background:
          'radial-gradient(50% 50% at 50% 50%, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)',
        filter: 'blur(10.2px)',
        zIndex: 1,
        flex: 'none',
        order: 8,
        flexGrow: 0,
      }}
    />
  );
};

export default Ellipse;
