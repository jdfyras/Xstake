import React from 'react';
import { Box } from '@mui/material';
import XBTC from '../assets/svg/XBTC';
import BitcoinBTC from '../assets/svg/BitcoinBTC';
export default function SwitchIllustration() {
  return (
    <Box
      sx={{
        /* Frame 73 container */
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '8px',
        // gap: '5px',
        position: 'relative',
        left: 'calc(50% - 190px/2)',
        top: 'calc(50% - 60px/2 )',
        background:
          'linear-gradient(180deg, rgba(254, 254, 254, 0.3) 0%, rgba(255, 255, 255, 0.6) 100%)', // Gradient
        // backdropFilter: 'blur(56px)', // Background blur
        // WebkitBackdropFilter: 'blur(56px)', // Safari compatibility
        boxShadow: '0 0 56px rgba(0, 0, 0, 0.1)', // Adjust blur effect with alpha
        borderRadius: '188px',
        width: 'fit-content', // Adjust based on content
        height: 'fit-content', // Adjust based on content
        border: '0.52px solid rgba(221, 221, 221, 1)', // Border properties
        // padding: '10px', // Add padding if needed
      }}
    >
      {/* Group 72 */}
      <Box
        sx={{
          width: '170px',
          height: '43px',
          flex: 'none',
          order: 0,
          flexGrow: 0,
          position: 'relative', // so absolute children anchor inside
        }}
      >
        {/* The "DepositBitcoin" logo on the left (like a BTC icon) */}
        <Box
          sx={{
            position: 'absolute',
            width: '40px',
            height: '42px',
            // left: '8.34px',
            // top: 'calc(50% - 41.71px/2 + 0.67px)',
            filter: 'drop-shadow(0px 0.6px 37px rgba(16, 24, 40, 0.16))',
          }}
        >
          <BitcoinBTC />
        </Box>

        {/* XBTC-icon */}
        <Box
          sx={{
            boxSizing: 'border-box',
            position: 'absolute',
            width: '42px',
            height: '42px',
            left: '125px',
            border: '0.5px solid #DDDDDD',
            // filter: 'drop-shadow(0px 0.5px 33px rgba(16, 24, 40, 0.16))',
            borderRadius: '66px',
          }}
        >
          <XBTC width="42px" height="42px" />
        </Box>
        <Box
          sx={{
            boxSizing: 'border-box',
            position: 'absolute',
            width: '42px',
            height: '42px',
            left: '114px',
            border: '0.5px solid #DDDDDD',
            // filter: 'drop-shadow(0px 0.5px 33px rgba(16, 24, 40, 0.16))',
            borderRadius: '66px',
          }}
        >
          <XBTC width="42px" height="42px" />
        </Box>
        <Box
          sx={{
            boxSizing: 'border-box',
            position: 'absolute',
            width: '42px',
            height: '42px',
            left: '103px',
            border: '0.5px solid #DDDDDD',
            // filter: 'drop-shadow(0px 0.5px 33px rgba(16, 24, 40, 0.16))',
            borderRadius: '66px',
          }}
        >
          <XBTC width="42px" height="42px" />
        </Box>
        <Box
          sx={{
            boxSizing: 'border-box',
            position: 'absolute',
            width: '42px',
            height: '42px',
            left: '92px',
            border: '0.5px solid #DDDDDD',
            // filter: 'drop-shadow(0px 0.5px 33px rgba(16, 24, 40, 0.16))',
            borderRadius: '66px',
          }}
        >
          <XBTC width="42px" height="42px" />
        </Box>
        <Box
          sx={{
            boxSizing: 'border-box',
            position: 'absolute',
            width: '42px',
            height: '42px',
            left: '81px',
            border: '0.5px solid #DDDDDD',
            // filter: 'drop-shadow(0px 0.5px 33px rgba(16, 24, 40, 0.16))',
            borderRadius: '66px',
          }}
        >
          <XBTC width="42px" height="42px" />
        </Box>
      </Box>
    </Box>
  );
}
