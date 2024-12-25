import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import {
  Container,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Paper,
} from '@mui/material';
import Grid from '@mui/material/Grid2';

import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
const Layout = ({ children }) => {
  return (
    <Box
      position="sticky" // or "absolute", depending on your design
      sx={{ width: '100%', minHeight: '100vh', backgroundColor: 'transparent' }}
    >
      <Header />
      <Grid sx={{ pt: 10, width: '100%' }}>{children}</Grid>
      <Footer />
    </Box>
  );
};

export default Layout;
