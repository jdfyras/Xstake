import React from 'react';
import { Box } from '@mui/material';

const FixedImage = ({ Image, ...props }) => {
  return (
    <Box
      component="img"
      src={Image}
      alt="Fixed Position Image"
      sx={{
        position: 'fixed', // Makes the image fixed on the screen
        // top: top || '20px', // Adjusts the vertical position
        // left: left || '50px', // Adjusts the horizontal position
        // width: width || '200px', // Set the width of the image
        height: 'auto', // Maintain aspect ratio
        zIndex: 1000, // Ensures it stays above other elements
        ...props,
      }}
    />
  );
};

export default FixedImage;
