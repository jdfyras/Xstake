import React from 'react';
import { Box } from '@mui/material';
import { BitcoinBTC, XBTC } from '../utils/SvgApp';
import { styled, keyframes } from '@mui/material/styles';
import { BorderColor } from '@mui/icons-material';

const Line = styled(Box)(({ animation }) => ({
  position: 'absolute',
  top: '50%',
  left: '15%',
  height: '2px',
  // background: 'linear-gradient(90deg, #FEC28E 18.1%, #8D88AA 72.84%)',
  animation: `${animation} 0.5s ease-out forwards`,
}));

const darkBitcoinTranslate = keyframes`
from {
  transform: translateX(-100%);
  opacity: 0;
}
to {
  transform: translateX(0);
  opacity: 1;
}
`;

const BitcoinWrapper = styled(Box)(({ animation, delay }) => ({
  position: 'absolute',
  animation: `${animation} 0.5s ease-out`,
  animationDelay: `${delay}s`,
  animationFillMode: 'forwards',
}));
const lineExpand = keyframes`
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 50%;
    opacity: 1;
  }
`;
export default function SwitchIllustration({ sx }) {
  return (
    <Box
      sx={
        sx || {
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
        }
      }
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
        <Line
          animation={lineExpand}
          style={{
            borderBottom: '1px dotted ', // Dashed border
            width: '100%', // Full width
            BorderColor:
              'linear-gradient(90deg, #FEC28E 18.1%, #8D88AA 72.84%)',
            // margin: '16px 0', // Optional margin            width: '20px', // Final width of the line
            // height: '0px',
            // zIndex: 1,
          }}
        />
        {/* The "DepositBitcoin" logo on the left (like a BTC icon) */}
        <BitcoinWrapper
          // animation={yellowBitcoin}
          style={{
            zIndex: 2,
            transform: 'translateX(0)',
          }}
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
        </BitcoinWrapper>

        {/* XBTC-icon */}
        <BitcoinWrapper
          animation={darkBitcoinTranslate}
          delay={1}
          style={{
            // zIndex: 1,
            transform: 'translateX(-125px) scale(0.5,0.5)',
            opacity: 0,
            // left: `${50 + 1 * 20}px`,
          }}
          sx={{
            boxSizing: 'border-box',
            position: 'absolute',
            width: '42px',
            height: '42px',
            left: '94px',
            // border: '0.5px solid #DDDDDD',
            // filter: 'drop-shadow(0px 0.5px 33px rgba(16, 24, 40, 0.16))',
            borderRadius: '66px',
            bottom: 34,
          }}
        >
          <XBTC />
        </BitcoinWrapper>
        <BitcoinWrapper
          animation={darkBitcoinTranslate}
          delay={0.8}
          style={{
            // zIndex: 1,
            transform: 'translateX(-83px) scale(0.5,0.5)',
            opacity: 0,
            // left: `${50 + 1 * 20}px`,
          }}
          sx={{
            // opacity: 0,
            boxSizing: 'border-box',
            position: 'absolute',
            width: '42px',
            height: '42px',
            left: '83px',
            // border: '0.5px solid #DDDDDD',
            // filter: 'drop-shadow(0px 0.5px 33px rgba(16, 24, 40, 0.16))',
            borderRadius: '66px',
            bottom: 34,
          }}
        >
          <XBTC />
        </BitcoinWrapper>
        <BitcoinWrapper
          animation={darkBitcoinTranslate}
          delay={0.6}
          style={{
            // zIndex: 1,
            transform: 'translateX(-72px) scale(0.5,0.5)',
            opacity: 0,
            // left: `${50 + 1 * 20}px`,
          }}
          sx={{
            // opacity: 0,

            boxSizing: 'border-box',
            position: 'absolute',
            width: '42px',
            height: '42px',
            left: '72px',
            // border: '0.5px solid #DDDDDD',
            // filter: 'drop-shadow(0px 0.5px 33px rgba(16, 24, 40, 0.16))',
            borderRadius: '66px',
            bottom: 34,
          }}
        >
          <XBTC />
        </BitcoinWrapper>
        <BitcoinWrapper
          animation={darkBitcoinTranslate}
          delay={0.4}
          style={{
            // zIndex: 1,
            transform: 'translateX(-61px) scale(0.5,0.5)',
            opacity: 0,
            // left: `${50 + 1 * 20}px`,
          }}
          sx={{
            // opacity: 0,

            boxSizing: 'border-box',
            position: 'absolute',
            width: '42px',
            height: '42px',
            left: '61px',
            // border: '0.5px solid #DDDDDD',
            // filter: 'drop-shadow(0px 0.5px 33px rgba(16, 24, 40, 0.16))',
            borderRadius: '66px',
            bottom: 34,
          }}
        >
          <XBTC />
        </BitcoinWrapper>
        <BitcoinWrapper
          animation={darkBitcoinTranslate}
          delay={0.2}
          style={{
            //   zIndex: 1,
            transform: 'translateX(-50px) scale(0.5,0.5)',
            opacity: 0,
            // left: `${5 * 20}px`,
          }}
          sx={{
            boxSizing: 'border-box',
            position: 'absolute',
            width: '42px',
            height: '42px',
            left: '50px',
            bottom: 34,
            // border: '0.5px solid #DDDDDD',
            // filter: 'drop-shadow(0px 0.5px 33px rgba(16, 24, 40, 0.16))',
            borderRadius: '66px',
          }}
        >
          <XBTC />
        </BitcoinWrapper>
      </Box>
    </Box>
  );
}
