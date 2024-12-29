import React from 'react';
import { Box, Typography } from '@mui/material';

const LiquidityCard = ({ feature }) => {
  return (
    <Box
      sx={{
        // Layout & sizing
        display: 'flex',
        flexDirection: 'row',
        // maxWidth: '656px',
        // height: '160px',

        // Shadow & border
        overflow: 'hidden',

        // Optional background (transparent or a color of your choice)
        background: 'transparent',
        boxSizing: 'border-box',
        alignItems: 'center',
        padding: '32px',
        gap: '24px',

        width: '100%',

        // The Figma snippet uses `filter: drop-shadow(...)`
        // But if you want a standard box-shadow, replace with boxShadow.
        filter: 'drop-shadow(0px 4px 12px rgba(16, 24, 40, 0.12))',
        boxShadow: '0px 4px 12px 0px rgba(16, 24, 40, 0.12)',
        // border: '1px solid transparent',
        // border: '1px solid #F0DED7',
        // borderImageSlice: 1,
        // raduis: '32px',
        borderRadius: '32px',

        // A slight background color so the corners are visible
        // backgroundColor: 'rgba(255, 255, 255, 0.05)',

        // Center horizontally if parent is full-width
        mx: 'auto',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0, // top, right, bottom, left = 0
          borderRadius: 'inherit',
          padding: '1px', // thickness of the gradient border
          background: 'linear-gradient(180deg, #FFFFFF 0%, #F0DED7 100%)',
          zIndex: -1, // behind the content

          // The trick: cut out the inside using masking/clipping so only the border is visible.
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#F0DED7 0 0)',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#F0DED7 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        },
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
