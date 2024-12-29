import React from 'react';
import { Box } from '@mui/material';
import myImage from '../../assets/images/s3-alpha-sig.png';

const TorusKnot = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        display: {
          xs: 'none', // small screens
          sm: 'none', // medium screens
          md: 'block', // large screens
          lg: 'block', // extra-large screens
        },
        width: {
          xs: '200px', // small screens
          sm: '300px', // medium screens
          md: '400px', // large screens
          lg: '500px', // extra-large screens
        },
        height: {
          xs: '200px',
          sm: '300px',
          md: '400px',
          lg: '500px',
        },
        right: {
          xs: '-50px',
          sm: '-70px',
          md: '-90px',
          lg: '-100px',
        },
        top: {
          xs: '300px',
          sm: '400px',
          md: '500px',
          lg: '640px',
        },
        transform: 'rotate(27.97deg)',
        backgroundImage: `url(${myImage})`,
        // backgroundImage: { myImage },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        zIndex: 4,
      }}
    />
  );
};

export default TorusKnot;
