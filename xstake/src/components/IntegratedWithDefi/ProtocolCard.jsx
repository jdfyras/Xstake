import React from 'react';
import { Box, Typography } from '@mui/material';

function ProtocolCard({ title, description, logo }) {
  return (
    <Box
      sx={{
        /* Card container styles */
        boxSizing: 'border-box',
        // display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '32px',
        // gap: '24px',
        // width: '386.67px',
        // height: '300px',
        background: '#FEFEFE',
        border: '1px solid #DDDDDD',
        boxShadow: '0px 4px 12px rgba(16, 24, 40, 0.12)',
        borderRadius: '32px',
        /* Make sure the card is inline-block so it 
           won't wrap to a new line in horizontal scroll */
        display: 'inline-flex',

        /* Hover animations */
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 8px 16px rgba(16, 24, 40, 0.2)',
        },
      }}
    >
      {/* Content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '24px',
          // margin: '0 auto',
          // width: '322.67px',
          // height: '236px',
        }}
      >
        {/* Top Row (illustration + possible spacing for logo) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            // gap: '93px',
            // width: '322.67px',
            // height: '96px',
          }}
        >
          {/* Illustration / Logo bubble */}
          <Box
            sx={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '24px',
              // gap: '200px',
              isolation: 'isolate',
              // width: '100%',
              width: '96px',
              height: '96px',
              background: '#FEFEFE',
              border: '1px solid #DDDDDD',
              borderRadius: '360px',
              position: 'relative',
            }}
          >
            {/* Blurred icon behind */}
            <Box
              sx={{
                position: 'absolute',
                width: '48px',
                height: '48px',
                left: 'calc(50% - 24px + 8px)',
                top: 'calc(50% - 24px - 4px)',
                opacity: 0.5,
                filter: 'blur(8px)',
                zIndex: 0,
                backgroundImage: `url(${logo})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
            {/* Foreground icon */}
            <Box
              sx={{
                position: 'absolute',
                width: '48px',
                height: '48px',
                left: 'calc(50% - 24px)',
                top: 'calc(50% - 24px)',
                zIndex: 1,
                backgroundImage: `url(${logo})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </Box>
        </Box>

        {/* Text Content (Title + Body) */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
            width: '322.67px',
            height: '116px',
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              fontFamily: 'Satoshi',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '31px',
              lineHeight: '120%',
              color: '#2D3239',
            }}
          >
            {title}
          </Typography>
          {/* Description */}
          <Typography
            sx={{
              fontFamily: 'Satoshi',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '130%',
              color: '#75797E',
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ProtocolCard;
