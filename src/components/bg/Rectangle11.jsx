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

  return (
    <Box
      sx={{
        display: isMdUp && 'none',
        position: 'absolute',
        width: '383px',
        height: '338px',
        right: '-70px',
        top: '755px',
        backgroundColor: '#FFFFFF',
        borderRadius: '32px',
        zIndex: 3,
      }}
    ></Box>
  );
};

export default Rectangle11;
