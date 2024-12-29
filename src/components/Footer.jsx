import React from 'react';
import {
  Box,
  Typography,
  Link,
  useTheme,
  useMediaQuery,
  Stack,
} from '@mui/material';
// import your social icons, brand LogoWhite, etc.
import LogoWhite from '../assets/svg/LogoWhite.jsx';
import DiscordIcon from '../assets/svg/DiscordIcon.jsx';
import TwitterIcon from '../assets/svg/TwitterIcon.jsx';
import YoutubeIcon from '../assets/svg/YoutubeIcon.jsx';
const contacts = [
  {
    title: 'Discord',
    Logo: DiscordIcon,
  },
  {
    title: 'X',
    Logo: TwitterIcon,
  },
  {
    title: 'Youtube',
    Logo: YoutubeIcon,
  },
];
export default function Footer() {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));
  const isSmDown = useMediaQuery(theme.breakpoints.down('sm'));

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
        padding: isSmDown
          ? '40px 16px 32px 16px'
          : isMdDown
            ? '48px 64px 40px 64px'
            : '48px 108px 40px 108px', // center horizontally
        backgroundColor: '#181928', // if you want black background
        zIndex: 18,
        color: '#75797E', // Text color
      }}
    >
      {/* Top row: brand on the left, nav links in the middle, social links on the right */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isSmDown ? 'column' : 'row',
          justifyContent: !isSmDown && 'space-between',
          alignItems: !isSmDown && 'flex-start',
          width: !isSmDown && '100%',
          // height:!isSmDown&& '99.97px',
          gap: '24px',
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
          {isSmDown ? (
            <Stack sx={{ width: '100%', gap: '16px' }}>
              <Typography variant="body2">Ecosystem</Typography>
              <Typography variant="body2">Network</Typography>
              <Typography variant="body2">Documentations</Typography>
              <Typography variant="body2">Community</Typography>
            </Stack>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'row', gap: '24px' }}>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
              >
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
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}
              >
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
          )}
        </Box>

        {/* Right content (heading + social icons) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: !isSmDown ? 'flex-end' : 'flex-start',
            gap: '16px',
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
            {contacts.map((_, i) => (
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
                <Box
                  sx={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    background:
                      'linear-gradient(180deg, #FEC28E 0%, #FFD37A 100%)',
                    filter: 'blur(8px)',
                    opacity: 0.5,
                    borderRadius: '50%',
                  }}
                />
                <_.Logo />
                {/* replace with actual <Icon/> or <img/> */}
                {/* <Typography sx={{ color: '#FEFEFE', opacity: 0.8 }}>
                  Icon
                </Typography> */}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          // border: '1px solid #64656F',
          // transform: 'rotate(90deg)',
          width: '100%',
          height: '1px',
          alignSelf: 'center',
          background: '#75797E',
        }}
      />
      {/* Bottom row: copyright on the left, Terms/Privacy on the right */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: isSmDown ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: !isSmDown ? 'center' : 'left',
          // paddingTop: '24px',
          width: '100%',
          gap: '16px',
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
              // border: '1px solid #64656F',
              // transform: 'rotate(90deg)',
              width: '1px',
              height: '16px',
              alignSelf: 'center',
              background: '#75797E',
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
