import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Button,
  IconButton,
  useTheme,
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';

export default function LeftContent() {
  const theme = useTheme();

  return (
    <Stack
      direction="column"
      spacing={3} // gap ~24px
      sx={{
        // Parent container
        width: '100%',
        maxWidth: 700, // Approx. 654.64, but rounded for responsiveness
        margin: '0 auto', // Center horizontally
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
          px: 2, // extra horizontal padding on small screens
        },
      }}
    >
      {/* 1) Content block */}
      <Stack
        direction="column"
        spacing={3}
        alignItems="flex-start"
        sx={{
          width: '100%',
        }}
      >
        {/* Header (Big Title + Row with badge + subheading) */}
        <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
          {/* Headline "Stake Your Bitcoin," */}
          <Typography
            sx={{
              fontFamily: 'Satoshi, sans-serif',
              fontStyle: 'normal',
              fontWeight: 500,
              // from 2rem (~32px) up to 4.75rem (~76px)
              fontSize: {
                xs: '2rem',
                sm: '3rem',
                md: '4.75rem',
              },
              lineHeight: 1.2, // ~120%
              color: '#2D3239',
              width: '100%',
            }}
          >
            Stake Your Bitcoin,
          </Typography>

          {/* Row with: "+5k users" gradient badge + "Unlock DeFi" */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            sx={{ width: '100%' }}
          >
            {/* Badge container */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: '16px 24px',
                gap: '31px',
                background: 'linear-gradient(90deg, #FFFFFF 0%, #E1DCEE 100%)',
                borderRadius: '16px',
                flexShrink: 0,
              }}
            >
              {/* "+5k users" text */}
              <Typography
                sx={{
                  fontFamily: 'Satoshi, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: {
                    xs: '1.25rem', // ~20px
                    sm: '1.5rem', // ~24px
                    md: '1.56rem', // ~25px
                  },
                  lineHeight: '120%',
                  color: '#75797E',
                  mr: 2, // small spacing
                }}
              >
                +5k users
              </Typography>

              {/* Circle w/ person icon */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 32,
                  height: 32,
                  border: '1px solid #75797E',
                  borderRadius: '50%',
                  flexShrink: 0,
                }}
              >
                <PersonIcon sx={{ color: '#75797E', width: 24, height: 24 }} />
              </Box>
            </Box>

            {/* "Unlock DeFi" text */}
            <Typography
              sx={{
                fontFamily: 'Satoshi, sans-serif',
                fontWeight: 500,
                fontSize: {
                  xs: '2rem',
                  sm: '3rem',
                  md: '4.75rem',
                },
                lineHeight: 1.2,
                color: '#2D3239',
                textAlign: { xs: 'left', sm: 'right' },
                width: '100%',
              }}
            >
              Unlock DeFi
            </Typography>
          </Stack>
        </Stack>

        {/* Subheading: "Earn yield on your Bitcoin through liquid staking" */}
        <Typography
          sx={{
            fontFamily: 'Satoshi, sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: {
              xs: '1rem', // 16px
              sm: '1.25rem', // 20px
              md: '1.58rem', // ~25.3px
            },
            lineHeight: 1.3,
            color: '#75797E',
            width: '100%',
          }}
        >
          Earn yield on your Bitcoin through liquid staking
        </Typography>
      </Stack>

      {/* 2) CTA: "Get xBTC" */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          p: '16px 32px',
          gap: '16px',
          background: '#161724',
          borderRadius: '100px',
          width: { xs: 'auto', sm: 'fit-content' },
        }}
      >
        {/* Label */}
        <Typography
          sx={{
            fontFamily: 'Satoshi, sans-serif',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: {
              xs: '1rem', // 16px
              sm: '1.25rem',
            },
            lineHeight: 1.2,
            color: '#FEFEFE',
          }}
        >
          Get xBTC
        </Typography>

        {/* Circle w/ close or any icon */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            p: 1,
            border: '1px solid #FEFEFE',
            borderRadius: '50%',
          }}
        >
          <CloseIcon sx={{ color: '#FEFEFE', width: 24, height: 24 }} />
        </Box>
      </Box>
    </Stack>
  );
}
