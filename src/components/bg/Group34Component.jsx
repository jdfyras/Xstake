import React from 'react';
import { Box } from '@mui/material';
import { FullPotentialIcon } from '../../utils/SvgApp';
// import FullPotentialIcon from './FullPotentialIcon'; // Update the import path as necessary

const Group34Component = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '548px',
        height: '582.45px',
        left: '815px',
        top: '-45.48px',
        zIndex: 2,
      }}
    >
      {/* FullPotentialIcon */}
      <Box
        sx={{
          position: 'absolute',
          width: '518px',
          height: '535.45px',
          left: 'calc(50% - 518px/2 + 492px)',
          top: '-45.48px',
          opacity: 0.4,
        }}
      >
        <FullPotentialIcon />
      </Box>

      {/* Additional UI elements */}
      <Box
        sx={{
          position: 'absolute',
          width: '487.74px',
          height: '281.6px',
          left: '875.26px',
          top: '95.74px',
          opacity: 0.6,
        }}
      >
        {/* Nested elements or placeholders */}
        <Box
          sx={{
            position: 'absolute',
            width: '281.6px',
            height: '281.6px',
            left: '1119.13px',
            top: '95.74px',
            background:
              'linear-gradient(187.11deg, rgba(219, 182, 248, 0.4) 9.41%, rgba(110, 83, 236, 0.2) 92.63%)',
            backdropFilter: 'blur(12.987px)',
            borderRadius: '45.3916px',
            transform: 'matrix(0.87, 0.5, -0.87, 0.5, 0, 0)',
          }}
        />
      </Box>

      {/* Example of an ellipse shape */}
      <Box
        sx={{
          position: 'absolute',
          width: '482.5px',
          height: '316.9px',
          left: '969.41px',
          top: '155.42px',
          background: 'linear-gradient(180deg, #F3F3F3 0%, #6147EC 100%)',
          filter: 'blur(92.5904px)',
        }}
      />
    </Box>
  );
};

export default Group34Component;
