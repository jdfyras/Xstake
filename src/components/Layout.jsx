import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
const Layout = ({ children }) => {
  return (
    <Box sx={{ width: '100%', minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

export default Layout;
