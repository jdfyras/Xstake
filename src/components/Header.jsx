import React, { useState } from 'react';
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
// If your Logo is an SVG React component, import it directly:
import Logo from '../assets/svg/Logo.jsx';

const NavigationBar = () => {
  const theme = useTheme();
  const [menuOpen, setMenuOpen] = useState(false); // Menu open/close state
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <AppBar
      position="sticky" // or "absolute", depending on your design
      elevation={0} // remove default MUI shadow
      sx={{
        // Mimic the Tailwind background gradient + blur + box shadow
        background:
          'linear-gradient(to right, rgba(255,255,255,0.15), rgba(255,255,255,0.04))',
        boxShadow: '0px 16px 64px rgba(16, 24, 40, 0.12)',
        backdropFilter: 'blur(23px)',
        // Make sure text is dark by default if background is lightish:
        color: theme.palette.text.primary,
        borderRadius: '0px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: 1200,
          width: '100%',
          mx: 'auto',
        }}
      >
        {/* Logo + Brand */}
        <Logo
          width="160px"
          height="auto"
          // width={{ xs: '120px', sm: '160px', md: '160px' }}
          // height={{ xs: '33px', sm: '30px', md: '30px' }}
        />
        {/* Nav & Button Row */}
        <Stack direction="row" spacing={3} alignItems="center">
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex', md: 'flex' },
              gap: 3,
              alignItems: 'center',
            }}
          >
            {/* Navigation items (Docs, Blog) */}
            <Typography
              sx={{
                fontFamily: 'Satoshi, sans-serif',
                textTransform: 'none',
                fontWeight: 400,
                fontSize: { xs: '14px', lg: '16px' },
                color: '#75797E',
              }}
            >
              Docs
            </Typography>
            <Typography
              sx={{
                color: '#75797E',
                fontWeight: 400,
                fontFamily: 'Satoshi, sans-serif',
                textTransform: 'none',
                fontSize: { xs: '14px', lg: '16px' },
              }}
            >
              Blog
            </Typography>
          </Box>

          {/* Right Button (Launch App) */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#161724',
              color: '#FEFEFE',
              textTransform: 'none',
              fontFamily: 'Satoshi, sans-serif',
              fontWeight: 500,
              fontSize: { xs: '12px', sm: '14px', lg: '16px' },
              borderRadius: '100px', // pill shape
              px: { xs: 1.5, sm: 3, md: 3 },
              py: { xs: 1, sm: 1.5, md: 1.5 },
              borderColor: '#FFFFFF',
              // Override hover if needed
              '&:hover': {
                backgroundColor: '#2D3239',
                borderColor: '#AAAAAA',
              },
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              // variant="outlined"
            }}
          >
            Launch App
          </Button>
          {/* Burger menu for mobile */}
          <IconButton
            onClick={toggleMenu}
            sx={{
              display: { xs: 'flex', sm: 'none', md: 'none' },
              color: '#161724',
              width: 24,
              height: 24,
            }}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </Stack>
      </Toolbar>
      {/* Mobile Menu */}
      {menuOpen && (
        <Box
          sx={{
            position: 'absolute',
            top: 64, // Adjust for AppBar height
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Satoshi, sans-serif',
              textTransform: 'none',
              fontWeight: 400,
              fontSize: '16px',
              color: '#75797E',
              mb: 2,
            }}
          >
            Docs
          </Typography>
          <Typography
            sx={{
              color: '#75797E',
              fontWeight: 400,
              fontFamily: 'Satoshi, sans-serif',
              textTransform: 'none',
              fontSize: '16px',
              mb: 2,
            }}
          >
            Blog
          </Typography>
        </Box>
      )}
    </AppBar>
  );
};

export default NavigationBar;
