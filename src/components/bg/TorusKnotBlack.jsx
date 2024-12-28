import React from 'react';
import { Box } from '@mui/material';
import myImage from '../../assets/images/torus knot dark.png';

export default function TorusKnotBlack() {
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
        flex: 'none',
        order: 13,
        flexGrow: 0,
        zIndex: 4,
        // The second position setting (left: 0%; right: 0%; top: 0%; bottom: 0%)
        // would override the above if used at the same time.
        // If you truly need that "stretch" style, remove the width/height/left/top above.

        // background image
        backgroundImage: `url(${myImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        // Width changes based on breakpoints:
        //  - xs: extra-small screens
        //  - sm: small screens
        //  - md: medium screens
        //  - lg: large screens
        width: {
          xs: '60vw', // ~60% of the viewport width on extra-small devices
          sm: '50vw', // ~50% of the viewport width on small devices
          md: 543, // ~40% of the viewport width on medium devices
          lg: 543, // Fixed 543px on large and above
        },

        // Maintain aspect ratio by setting height to "auto"
        // so the image doesn't get stretched.

        height: {
          xs: 'auto', // auto from the left on extra-small devices
          sm: '2rem',
          md: 543,
          lg: 543, // original requested position at large screens
        },
        // Adjust positioning at different breakpoints
        top: {
          xs: '10rem', // 10rem from the top for extra-small devices
          sm: '15rem',
          md: '1900px',
          lg: '1900px', // original requested position at large screens
        },
        left: {
          xs: '1rem', // 1rem from the left on extra-small devices
          sm: '2rem',
          md: '-211px',
          lg: '-211px', // original requested position at large screens
        },
      }}
    />
  );
}
