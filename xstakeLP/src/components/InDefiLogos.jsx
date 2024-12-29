import React from 'react';
import { Box } from '@mui/material';
import XBTC from '../assets/svg/XBTC';
import BitcoinBTC from '../assets/svg/BitcoinBTC';
import Logo1 from '../assets/svg/inDefi/Logo1';
import Logo2 from '../assets/svg/inDefi/Logo2';
import Logo3 from '../assets/svg/inDefi/Logo3';
export default function InDefiLogos() {
  return (
    <Box
      sx={{
        /* Frame 73 container */
        // boxSizing: 'border-box',
        display: 'flex',
        // position: 'absolute',

        // flexDirection: 'column',
        // alignItems: 'flex-start',
        // padding: '8px',
        // // gap: '5px',
        // position: 'relative',
        // left: 'calc(50% - 190px/2)',
        // top: 'calc(50% - 60px/2 )',
        // background:
        //   'linear-gradient(180deg, rgba(254, 254, 254, 0.3) 0%, rgba(255, 255, 255, 0.6) 100%)', // Gradient
        // backdropFilter: 'blur(56px)', // Background blur
        // WebkitBackdropFilter: 'blur(56px)', // Safari compatibility
        // boxShadow: '0 0 56px rgba(0, 0, 0, 0.1)', // Adjust blur effect with alpha
        // borderRadius: '188px',
        // width: 'fit-content', // Adjust based on content
        // height: 'fit-content', // Adjust based on content
        // border: '0.52px solid rgba(221, 221, 221, 1)', // Border properties
        // padding: '10px', // Add padding if needed
      }}
    >
      {/* Group 72 */}
      <Box
        sx={{
          boxSizing: 'border-box',
          position: 'relative',
          width: '61px',
          height: '61px',
          left: '155px',
          top: 18,

          //   border: '0.5px solid #DDDDDD',
          // filter: 'drop-shadow(0px 0.5px 33px rgba(16, 24, 40, 0.16))',
          //   borderRadius: '66px',
        }}
      >
        <Logo3 width="61px" height="61px" />
      </Box>
      <Box
        sx={{
          boxSizing: 'border-box',
          position: 'absolute',
          width: '61px',
          height: '61px',
          left: '105px',
          top: 18,

          //   border: '0.5px solid #DDDDDD',
          // filter: 'drop-shadow(0px 0.5px 33px rgba(16, 24, 40, 0.16))',
          //   borderRadius: '66px',
        }}
      >
        <Logo2 width="61px" height="61px" />
      </Box>
      <Box
        sx={{
          boxSizing: 'border-box',
          position: 'absolute',
          width: '61px',
          height: '61px',
          top: 18,
          left: '55px',
          //   border: '0.1px solid #DDDDDD',
          //   borderWidth: '1px',
          // filter: 'drop-shadow(0px 0.5px 33px rgba(16, 24, 40, 0.16))',
          //   borderRadius: '66px',
        }}
      >
        <Logo1 width="61px" height="61px" />
      </Box>
    </Box>
  );
}
