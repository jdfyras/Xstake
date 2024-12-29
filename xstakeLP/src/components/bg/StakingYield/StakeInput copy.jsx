import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';

export default function StakeCalculator() {
  return (
    <Box
      // Outer container styles
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: 865,
        height: 122,
        // Shadow from your CSS snippet
        filter: 'drop-shadow(0px 1px 64px rgba(16, 24, 40, 0.12))',
      }}
    >
      {/* Left side: “Bitcoin you’d like to stake” input section */}
      <Box
        sx={{
          flex: 1,
          // We apply negative margin to mimic your “margin: 0px -1px;”
          // but it may be optional
          margin: '0px -1px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          // The height is 122, same as the outer container
          height: 122,
        }}
      >
        <Box
          sx={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '24px 32px',
            gap: '8px',
            width: 433,
            height: 122,
            backgroundColor: '#FEFEFE',
            border: '1px solid #6147EC',
            borderRadius: '16px 0 0 16px',
          }}
        >
          {/* Column inside the input */}
          <Stack spacing={1}>
            <Typography
              sx={{
                fontFamily: 'Satoshi',
                fontSize: 20,
                lineHeight: '120%',
                color: '#6147EC',
              }}
            >
              Bitcoin you’d like to stake
            </Typography>

            {/* Row that shows the BTC icon + numeric input */}
            <Stack direction="row" alignItems="center" spacing={1}>
              {/* Replace this Box with a real icon of your choice */}
              <Box
                sx={{
                  width: 42,
                  height: 42,
                  background:
                    'linear-gradient(180deg, #FEC28E 0%, #FFD37A 100%)',
                  borderRadius: '50%',
                }}
              />
              <Typography
                sx={{
                  fontFamily: 'Satoshi',
                  fontSize: 31,
                  lineHeight: '120%',
                  color: '#2D3239',
                }}
              >
                2|
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* Right side: “Select a yield rate” section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          height: 122,
        }}
      >
        <Box
          sx={{
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 32px',
            gap: '40px',
            width: 433,
            height: 122,
            backgroundColor: '#FEFEFE',
            border: '1px solid #DDDDDD',
            borderRadius: '0 16px 16px 0',
          }}
        >
          {/* Column inside the yield selector */}
          <Stack spacing={1} sx={{ width: 189 }}>
            <Typography
              sx={{
                fontFamily: 'Satoshi',
                fontSize: 20,
                lineHeight: '120%',
                color: '#75797E',
              }}
            >
              Select a yield rate
            </Typography>

            {/* Row that shows the numeric yield value */}
            <Stack direction="row" alignItems="baseline" spacing={1}>
              <Typography
                sx={{
                  fontFamily: 'Satoshi',
                  fontSize: 31,
                  lineHeight: '120%',
                  color: '#2D3239',
                }}
              >
                6%
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Satoshi',
                  fontSize: 25,
                  lineHeight: '120%',
                  color: '#2D3239',
                }}
              >
                Annual yield
              </Typography>
            </Stack>
          </Stack>

          {/* Replace this Box with a suitable icon if desired */}
          <Box
            sx={{
              width: 36,
              height: 36,
              transform: 'rotate(-90deg)',
              backgroundColor: '#ccc', // Just placeholder
              borderRadius: '50%', // Just placeholder
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
