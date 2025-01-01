import React from 'react';
import {
  Box,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
  Button,
  Card,
} from '@mui/material';
const Rectangle11 = () => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.down(1500)); //1200
  const dimensions = {
    xs: '200px',
    sm: '300px',
    md: '300px',
    lg: '383px',
  };

  const positions = {
    right: {
      xs: '-50px',
      sm: '-70px',
      md: '10%',
      lg: '5%',
    },
    top: {
      xs: '300px',
      sm: '400px',
      md: '500px',
      lg: '755px',
    },
  };
  return (
    <Box
      sx={{
        width: dimensions,
        height: '338px',
        right: positions.right,
        top: positions.top,
        display: isMdUp && 'none',
        position: 'absolute',
        // width: '383px',
        // height: '338px',
        // right: '-70px',
        // top: '755px',
        backgroundColor: '#FFFFFF',
        borderRadius: '32px',
        zIndex: 3,
      }}
    ></Box>
  );
};

export default Rectangle11;
