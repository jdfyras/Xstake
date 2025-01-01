import React from 'react';
import { Box, Typography, Grow, useTheme } from '@mui/material';
import ProtocolCard from './ProtocolCard.jsx';
import logo1 from '../../assets/images/logo1.png';
import logo2 from '../../assets/images/logo2.png';
import logo3 from '../../assets/images/logo3.png';
/**
 * Example protocol data
 * Update these logos with real file paths or URLs in your project.
 */
const protocols = [
  {
    title: 'Uniswap',
    description:
      'Swap tokens seamlessly, provide liquidity, and earn fees on the leading decentralized trading platform.',
    logo: logo1,
  },
  {
    title: 'Morpho',
    description:
      'Enhance lending efficiency by connecting borrowers and lenders for better rates on decentralized finance platforms.',
    logo: logo2,
  },
  {
    title: 'Eigenlayer',
    description:
      'Maximize Ethereum security by restaking your assets to support multiple networks and earn additional rewards.',
    logo: logo3,
  },
];

function IntegratedWithDefi() {
  const theme = useTheme();

  return (
    <Box
      /* Parent container: "How it works" / "Integrated with the Best of DeFi" */
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // padding: '6%',
        margin: '20px auto',
        width: '100%',

        flex: 'none',
        order: 15,
        alignSelf: 'stretch',
        flexGrow: 0,
        zIndex: 15,
        // We'll manage widths and heights with breakpoints:
        // The gap for the "How it works" section:
        gap: theme.spacing(5),
        px: { xs: '16px', sm: '16px', md: '64px', lg: '108px' },
        pt: { xs: '64px', sm: '64px', md: '96px', lg: '128px' },

        // For large screens (1224px design)
        // margin: '0 auto',
      }}
    >
      {/* Title: "Integrated with the Best of DeFi" */}
      <Typography
        sx={{
          zIndex: 15,

          //   width: '1224px',
          //   height: '91px',
          fontFamily: 'Satoshi',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: { xs: '42px', sm: '61px', lg: '76px' },
          lineHeight: '120%',
          color: '#2D3239',
          flex: 'none',
          order: 0,
          alignSelf: 'stretch',
          flexGrow: 0,
        }}
      >
        Integrated with the Best of DeFi
      </Typography>

      {/* Cards Row (now horizontal scroll) */}
      <Box
        sx={{
          zIndex: 15,

          /* According to your spec: width 1224px, height 300px, etc.
             but we enable horizontal scrolling if more cards than fit. */
          display: 'flex',
          flexDirection: 'row',
          // alignItems: 'flex-start',
          padding: '4% 4%',
          gap: '32px',
          width: '100%',
          height: 'auto',
          flex: 'none',
          order: 1,
          //   alignSelf: 'stretch',
          flexGrow: 0,
          justifyContent: {
            xs: 'flex-start',
            sm: 'flex-start',
            md: 'flex-start',
            lg: 'center',
          },
          alignItems: 'center',
          /* Enable horizontal scroll */
          overflowY: 'auto',
          scrollSnapType: 'y proximity',
          '&::-webkit-scrollbar': {
            display: 'none', // hide scrollbar if desired
          },
        }}
      >
        {protocols.map((protocol, index) => (
          // Wrap each card with a Grow for reveal animation
          <Grow
            key={protocol.title}
            in={true}
            style={{ transformOrigin: '0 0 0' }}
            timeout={500 * (index + 1)}
            // Stagger the animation by index
          >
            <Box
              sx={{
                // Snap alignment so each card "locks" to the start
                scrollSnapAlign: 'start',
              }}
            >
              <ProtocolCard
                title={protocol.title}
                description={protocol.description}
                logo={protocol.logo}
              />
            </Box>
          </Grow>
        ))}
      </Box>

      {/* Button (CTA) */}
      <Box
        sx={{
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '24px 32px',
          //   gap: '16px',
          //   width: '214px',
          //   height: '72px',
          background: '#161724',
          borderRadius: '100px',
          flex: 'none',
          order: 2,
          flexGrow: 0,
          cursor: 'pointer',
          // Little hover effect on the button
          transition: 'opacity 0.3s ease',
          '&:hover': {
            opacity: 0.8,
          },
        }}
        onClick={() => alert('Get Started')}
      >
        <Typography
          sx={{
            // width: '150px',
            // height: '24px',
            fontFamily: 'Satoshi',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '120%',
            color: '#FEFEFE',
            textAlign: 'center',
          }}
        >
          Get Started Now
        </Typography>
      </Box>
    </Box>
  );
}

export default IntegratedWithDefi;
