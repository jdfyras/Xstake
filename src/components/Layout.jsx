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
      // position="sticky" // or "absolute", depending on your design
      sx={{
        position: 'relative', // Ensure relative positioning for proper placement of absolute children
        overflow: 'hidden', // Prevent Icosahedron from overflowing the layout
        // minHeight: '100vh',
        backgroundColor: '#181928',
      }}
    >
      <Header
        sx={
          {
            // minHeight: '100vh',
            // backgroundColor: '#F7F7F7',
          }
        }
      />
      <Grid
        sx={{
          // width: '100%',
          // padding: '10% 10% 0% 10%',
          borderRadius: '0px 0px 32px 32px',
          // border: '1px solid #DDDDDD',
          backgroundColor: '#F7F7F7',
          pb: { xs: '64px', sm: '64px', md: '96px', lg: '128px' },
        }}
      >
        {children}
      </Grid>
      <Footer
        sx={{
          zIndex: 15,
          backgroundColor: '#181928', // if you want black background
        }}
      />
    </Box>
  );
};

export default Layout;
