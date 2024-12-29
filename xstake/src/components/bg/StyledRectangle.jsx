import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

const StyledRectangle = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.down(1500)); //1200
  return (
    <Box
      sx={{
        display: isMdUp && 'none',

        position: 'absolute',
        width: '383px',
        height: '338px',
        left: '-120px',
        top: '755px',
        backgroundColor: '#FFFFFF',
        borderRadius: '32px',
        zIndex: 4,
      }}
    ></Box>
  );
};

export default StyledRectangle;
