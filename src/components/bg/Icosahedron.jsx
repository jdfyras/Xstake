import React from 'react';
import { Box } from '@mui/material';
import myImage from '../../assets/images/Icosahedron.png';

const Icosahedron = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 374,
        height: 374,
        left: -98,
        bottom: 100,
        zIndex: 4,
        backgroundImage: `url(${myImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        flexGrow: 0,
        order: 0,
      }}
      role="img"
      aria-label="Decorative icosahedron"
    />
  );
};

export default Icosahedron;
