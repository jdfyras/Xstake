import React from 'react';
import { Box, Typography } from '@mui/material';
import { Defi } from '../utils/SvgApp';
import InDefiLogos from './InDefiLogos';
// import Logo1 from '../assets/svg/inDefi/Logo1';
// import Logo2 from '../assets/svg/inDefi/Logo2';
// import Logo3 from '../assets/svg/inDefi/Logo3';
export default function UseInDefi() {
  return (
    <Box
      sx={{
        position: 'relative',
        filter: 'drop-shadow(0px 4px 64px rgba(16, 24, 40, 0.12))',
      }}
    >
      {/* Rectangle 15 */}
      <Box
        sx={{
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional shadow for better visibility

          position: 'absolute',
          width: '239px',
          height: '154px',
          left: '337px',
          top: '-20px',
          background: '#FFFFFF',
          borderWidth: '1px',
          borderRadius: '22px',
        }}
      />

      {/* Rectangle 16 */}
      <Box
        sx={{
          position: 'absolute',
          width: '80px',
          height: '154px',
          left: '496px',
          top: '-100px',
          background: '#FFFFFF',
          borderRadius: '22px',
        }}
      />

      {/* Content area (graph + text) */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          position: 'relative',
          width: '215px',
          height: '119.59px',
          left: '352px',
          top: '-20px',
          gap: '40px',
          borderRadius: '22px',
        }}
      >
        {/* Chart container */}
        {/* <Box sx={{ position: 'relative', width: 215, height: 61.59 }}>
          <svg
          ref={chartRef}
          style={{ position: 'absolute', top: 0, left: 0 }}
          />
          </Box> */}
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            marginBottom: 2,
          }}
        >
          <Logo1 sx={{ width: 50, height: 50, backgroundColor: '#f3f3f3' }} />
          <Logo2 sx={{ width: 50, height: 50, backgroundColor: '#f3f3f3' }} />
          <Logo3 sx={{ width: 50, height: 50, backgroundColor: '#f3f3f3' }} />
        </Box> */}
        <InDefiLogos />
        {/* Card text */}
        <Typography
          variant="body2"
          sx={{
            // width: '215px',
            // height: '34px',
            fontFamily: 'Satoshi, sans-serif',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '13px',
            textAlign: 'right',
            lineHeight: '130%',
            color: '#75797E',
          }}
        >
          Maximize your yield by using your tokens in the DeFi ecosystem.{' '}
        </Typography>
      </Box>

      {/* Bitcoin SVG in the top corner */}
      <Box
        sx={{
          position: 'absolute',
          //   width: '68px',
          //   height: '64px',
          left: '503.6px', //225-488
          top: '-94px',
        }}
      >
        <Defi />
      </Box>
    </Box>
  );
}
