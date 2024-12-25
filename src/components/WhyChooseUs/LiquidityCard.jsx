import React from 'react';
import { Box, Typography } from '@mui/material';

const LiquidityCard = ({ feature }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        p: 3,
        gap: 2,
        width: '100%',
        maxWidth: '656px',
        height: '160px',
        borderRadius: '32px',
        boxShadow: '0px 4px 12px rgba(16, 24, 40, 0.12)',
        backgroundColor: 'background.paper',
        mx: 'auto', // Center horizontally
      }}
    >
      {/* Icon Container */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '96px',
          height: '96px',
          border: '1px solid #DDDDDD',
          borderRadius: '50%',
          position: 'relative',
          overflow: 'hidden',
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
        {/* Icon */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>{feature.icon}</Box>
      </Box>

      {/* Content */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: 500, color: 'text.primary', mb: 1 }}
        >
          {feature.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {feature.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default LiquidityCard;
