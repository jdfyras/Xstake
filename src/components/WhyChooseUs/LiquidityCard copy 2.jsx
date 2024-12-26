import React from 'react';
import { Box, Typography } from '@mui/material';

const LiquidityCard = ({ feature }) => {
  return (
    <Box
      sx={{
        // Layout & sizing
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        p: 4, // 32px padding
        gap: 3, // 24px gap
        width: '100%',
        // maxWidth: '656px',
        // height: '160px',
        borderRadius: '32px',

        // Shadow & border
        boxShadow: '0px 4px 12px 0px rgba(16, 24, 40, 0.12)',
        border: '1px solid transparent',
        borderImageSource: 'linear-gradient(180deg, #FFFFFF 0%, #F0DED7 100%)',
        borderImageSlice: 1,
        overflow: 'hidden',

        // Optional background (transparent or a color of your choice)
        background: 'transparent',
        boxSizing: 'border-box',

        // Center horizontally if parent is full-width
        mx: 'auto',
      }}
    >
      {/* Icon Container */}
      <Box
        sx={{
          position: 'relative',
          width: '96px',
          height: '96px',
          border: '1px solid #DDDDDD',
          borderRadius: '50%',
          overflow: 'hidden',

          // Center the icon
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {/* Blur Effect */}
        <Box
          sx={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            background: 'linear-gradient(180deg, #FEC28E 0%, #FFD37A 100%)',
            filter: 'blur(8px)',
            opacity: 0.3,
            borderRadius: '50%',
          }}
        />
        {/* Actual Icon */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>{feature.icon}</Box>
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1 }}>
        <Typography
          // Headline 4 / Medium
          sx={{
            fontFamily: 'Satoshi',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '31px',
            lineHeight: '120%',
            color: '#FEFEFE',
            mb: 1, // margin-bottom: 8px
          }}
        >
          {feature.title}
        </Typography>
        <Typography
          // Body 1 / Regular
          sx={{
            fontFamily: 'Satoshi',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '130%',
            color: '#75797E',
          }}
        >
          {feature.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default LiquidityCard;
