import React from 'react';
import {
  Box,
  Stack,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';

export default function LandingPage() {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        backgroundColor: '#181928',
        color: '#FEFEFE',
        mt: 'auto',
        py: 4,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Left side: logo or brand */}
        <Box sx={{ mb: { xs: 2, sm: 0 } }}>
          <Typography variant="body1">Xstake © 2024</Typography>
        </Box>
        {/* Right side: nav links or social icons, etc. */}
        <Stack direction="row" spacing={2}>
          <Typography
            variant="body2"
            sx={{ cursor: 'pointer', color: '#FFFFFF' }}
          >
            Terms of Use
          </Typography>
          <Typography
            variant="body2"
            sx={{ cursor: 'pointer', color: '#FFFFFF' }}
          >
            Privacy Policy
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
