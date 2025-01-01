import React from 'react';
import { Box } from '@mui/material';
import myImage from '../../assets/images/pill.png';

const Pill = () => {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'block' }, // Ensure the component is hidden on small screens
        position: 'absolute',
        width: { xs: 100, sm: 150, md: 180, lg: 211 },
        height: { xs: 100, sm: 150, md: 180, lg: 211 },
        left: { xs: 20, sm: 200, md: 800, lg: 1350 },
        top: { xs: 500, sm: 1500, md: 4600, lg: 3550 },
        filter: 'blur(78.4px)', // Simplified decimal precision for better readability
        zIndex: 4,
        backgroundImage: `url(${myImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      role="img" // Accessibility: Adds a role for semantics
      aria-label="Decorative pill image" // Accessibility: Describes the element for screen readers
    />
  );
};

export default Pill;
