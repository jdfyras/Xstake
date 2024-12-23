import React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
// If you have a custom user/person icon, import it; otherwise we can use an MUI icon:
import PersonIcon from '@mui/icons-material/Person';

export default function TextLine() {
  const theme = useTheme();

  return (
    <Stack
      // Outer container mimics the "Text line" auto layout
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2} // gap: 14px in your design
      sx={{
        // width: 638, height: 91 from your spec
        // but you might want it responsive, so consider maxWidth instead:
        width: 638,
        height: 91,
        // If you want to test or override background for debugging:
        // backgroundColor: 'pink',
      }}
    >
      {/* 
        1) The badge “Frame 163” 
           Gradient background, 207×64, border-radius=16
      */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          p: '16px 24px',
          gap: '31px',
          width: 207,
          height: 64,
          margin: '0 auto',
          borderRadius: '16px',
          background: 'linear-gradient(90deg, #FFFFFF 0%, #E1DCEE 100%)',
        }}
      >
        {/* "+5k users" text */}
        <Typography
          sx={{
            margin: '0 auto',
            width: 108,
            height: 30,
            // Headline 5/Regular => ~25px
            fontFamily: 'Satoshi, sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '25px',
            lineHeight: '120%', // ~30px
            color: '#75797E',
          }}
        >
          +5k users
        </Typography>

        {/* The small circle border with icon => "Frame 4" */}
        <Box
          sx={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            p: '4px',
            gap: '10px',
            width: 32,
            height: 32,
            margin: '0 auto',
            border: '1px solid #75797E',
            borderRadius: '9999px',
            position: 'relative',
          }}
        >
          {/* Person icon, 24×24 */}
          <PersonIcon
            sx={{
              width: 24,
              height: 24,
              color: '#75797E',
            }}
          />
        </Box>
      </Box>

      {/* 
        2) "Unlock DeFi" text 
           Display/Medium => 76px, weight=500, lineHeight=120%
      */}
      <Typography
        sx={{
          margin: '0 auto',
          width: 416,
          height: 91,
          fontFamily: 'Satoshi, sans-serif',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '76px',
          lineHeight: '120%',
          color: '#2D3239',
          // Possibly scale down on small screens:
          [theme.breakpoints.down('sm')]: {
            fontSize: '2.5rem',
            width: 'auto',
            height: 'auto',
          },
        }}
      >
        Unlock DeFi
      </Typography>
    </Stack>
  );
}
