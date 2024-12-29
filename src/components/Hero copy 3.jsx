import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: 0,
        width: '343px',
        height: '219px',
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontFamily: "'Satoshi', sans-serif",
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '61px',
          lineHeight: '120%',
          color: '#2D3239',
          width: '343px',
          height: '146px',
        }}
      >
        Stake Your Bitcoin,
      </Typography>

      {/* Bottom Row */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 0,
          gap: '14px',
          width: '343px',
          height: '73px',
          position: 'relative',
        }}
      >
        {/* Unlock DeFi */}
        <Typography
          sx={{
            fontFamily: "'Satoshi', sans-serif",
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '61px',
            lineHeight: '120%',
            color: '#2D3239',
            margin: '0 auto',
            width: '334px',
            height: '73px',
          }}
        >
          Unlock DeFi
        </Typography>

        {/* Users Info */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '8px',
            gap: '8px',
            position: 'absolute',
            width: '138px',
            height: '44px',
            left: '205px',
            top: '-57px',
            background: 'linear-gradient(90deg, #FFFFFF 0%, #E1DCEE 100%)',
            borderRadius: '8px',
            zIndex: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Satoshi', sans-serif",
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '120%',
              color: '#75797E',
            }}
          >
            +5k users
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              border: '1px solid #75797E',
              borderRadius: '50%',
              boxSizing: 'border-box',
            }}
          >
            <Avatar
              sx={{
                width: '20px',
                height: '20px',
                backgroundColor: '#75797E',
              }}
            >
              <PersonIcon sx={{ color: 'white', fontSize: '16px' }} />
            </Avatar>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
