import React from 'react';
import { Box, Typography, Link } from '@mui/material';
// import your social icons, brand LogoWhite, etc.
import LogoWhite from '../assets/svg/LogoWhite.jsx';

export default function Footer() {
  return (
    <Box
      component="footer"
      // Outer footer container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        // padding: '48px 0 40px',
        gap: '32px',
        // width: '1224px',
        // height: '260.97px',  // often let height be auto
        // margin: 'auto 10%', // center horizontally
        padding: '6% 6%', // center horizontally
        backgroundColor: '#181928', // if you want black background
        zIndex: 18,
      }}
    >
      {/* Top row: brand on the left, nav links in the middle, social links on the right */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '1224px',
          // height: '99.97px',
          gap: '10px',
        }}
      >
        {/* Left content (logo/brand + maybe tagline) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '24px',
            // width: '184px',
            // height: '99.97px',
            margin: '0 auto 0 0', // push left
          }}
        >
          {/* Replace with your actual brand/logo */}
          {/* <Typography variant="h5" color="#FEFEFE">
            XSTAKE
          </Typography> */}
          <LogoWhite />
          {/* Sub-navigation (Ecosystem / Network … ) */}
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography
                sx={{
                  fontFamily: 'Satoshi',
                  fontSize: '13px',
                  color: '#75797E',
                }}
              >
                Ecosystem
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Satoshi',
                  fontSize: '13px',
                  color: '#75797E',
                }}
              >
                Network
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Typography
                sx={{
                  fontFamily: 'Satoshi',
                  fontSize: '13px',
                  color: '#75797E',
                }}
              >
                Documentations
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Satoshi',
                  fontSize: '13px',
                  color: '#75797E',
                }}
              >
                Community
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Right content (heading + social icons) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '8px',
            margin: '0 0 0 auto', // push right
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Satoshi',
              fontSize: '13px',
              color: '#75797E',
            }}
          >
            Community
          </Typography>

          {/* Socials row */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '16px',
            }}
          >
            {/* Example of 3 circular icons */}
            {[1, 2, 3].map((_, i) => (
              <Box
                key={i}
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 56,
                  height: 56,
                  border: '1px solid #DDDDDD',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              >
                {/* replace with actual <Icon/> or <img/> */}
                <Typography sx={{ color: '#FEFEFE', opacity: 0.8 }}>
                  Icon
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Bottom row: copyright on the left, Terms/Privacy on the right */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '24px',
          width: '1224px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Satoshi',
            fontSize: '13px',
            color: '#75797E',
          }}
        >
          © Xstake 2024. All rights reserved.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
          <Typography
            sx={{
              fontFamily: 'Satoshi',
              fontSize: '13px',
              color: '#75797E',
            }}
          >
            Terms of Use
          </Typography>
          {/* Divider line */}
          <Box
            sx={{
              border: '1px solid #64656F',
              transform: 'rotate(90deg)',
              height: '0px',
              alignSelf: 'center',
            }}
          />
          <Typography
            sx={{
              fontFamily: 'Satoshi',
              fontSize: '13px',
              color: '#75797E',
            }}
          >
            Privacy Notice
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
