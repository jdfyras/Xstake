import React from 'react';
import { Box } from '@mui/material';
import myImage from '../../assets/images/Torus.png';

const Torus = () => {
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
        width: { xs: '150px', sm: '200px', md: '250px', lg: '332px' }, // Responsive widths
        height: { xs: '150px', sm: '200px', md: '250px', lg: '332px' }, // Responsive heights
        left: { xs: '10px', sm: '20px', md: '-50px', lg: '50px' }, // Adjusting the left position
        top: { xs: '800px', sm: '1000px', md: '1200px', lg: '1330px' }, // Adjusting the top position

        // transform: 'rotate(27.97deg)',
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

export default Torus;
