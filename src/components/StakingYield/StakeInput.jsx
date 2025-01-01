import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Box, Typography, InputAdornment, Menu, MenuItem } from '@mui/material';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { BitcoinIcon } from '../../utils/SvgApp';

// Styled input container
const InputContainer = styled(Box)(
  ({ theme, focused, borderRadius = '16px 0px 0px 16px' }) => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    borderRadius: borderRadius,
    backgroundColor: '#FEFEFE',
    border: `1px solid ${focused ? 'rgba(97, 71, 236, 1)' : '#DDDDDD'}`,
    boxShadow: focused ? '0 0 8px rgba(97, 71, 236, 0.3)' : 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s',
  })
);

// Label styling
const Label = styled(Typography)(({ focused }) => ({
  fontFamily: 'Satoshi',
  fontSize: 20,
  fontWeight: 400,
  color: focused ? 'rgba(97, 71, 236, 1)' : '#75797E',
}));

// Styled Input for Bitcoin
const StyledInput = styled('input')(({ theme }) => ({
  width: '100%',
  fontSize: 31,
  fontFamily: 'Satoshi',
  fontWeight: 400,
  // padding: theme.spacing(2),
  border: 'none',
  outline: 'none',
  MozAppearance: 'textfield',
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    display: 'none',
  },
}));

// Dropdown Menu
const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    boxSizing: 'border-box',
    padding: theme.spacing(3),
    backgroundColor: '#FFFFFF',
    border: '1px solid #DDDDDD',
    borderRadius: '0px 0px 16px 16px',
    boxShadow: '0px 4px 64px rgba(16, 24, 40, 0.12)',
  },
  left: -25,
  top: 25,
}));

// Styled Menu Items
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  fontSize: 31,
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  borderRadius: '8px',
  backgroundColor: 'rgba(239, 237, 253, 0.09)', // Default background
  '&.Mui-selected': {
    backgroundColor: '#EFEDFD', // Selected background
    color: '#2D3239',
  },
  '&:hover': {
    backgroundColor: 'rgba(239, 237, 253, 0.2)', // Hover background
  },
}));

const StakeInput = ({ bitcoin, setBitcoin, yieldRate, setYieldRate }) => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleOpenMenu = (event) => setMenuAnchor(event.currentTarget);
  const handleCloseMenu = () => setMenuAnchor(null);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        zIndex: 15,

        flexDirection: { xs: 'column', sm: 'row', md: 'row' },
      }}
    >
      {/* Bitcoin Input */}
      <InputContainer
        borderRadius={{
          xs: '16px 16px 0px 0px',
          sm: '16px 0px 0px 16px',
          md: '16px 0px 0px 16px',
        }}
        focused={focusedInput === 'bitcoin'}
        onFocus={() => setFocusedInput('bitcoin')}
        onBlur={() => setFocusedInput(null)}
      >
        <Label focused={focusedInput === 'bitcoin'}>
          Bitcoin you’d like to stake
        </Label>
        {/* <BitcoinIcon /> */}
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            zIndex: 15,

            flexDirection: 'row',
          }}
        >
          <BitcoinIcon />
          <StyledInput
            type="number"
            value={bitcoin}
            onChange={(e) => setBitcoin(Number(e.target.value))}
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start"></InputAdornment>
            //   ),
            // }}
          />
        </Box>
      </InputContainer>

      {/* Yield Rate Selector */}
      <InputContainer
        borderRadius={{
          xs: `0px 0px ${menuAnchor ? '0px' : '16px'} ${menuAnchor ? '0px' : '16px'}`,
          sm: `0px 16px ${menuAnchor ? '0px' : '16px'}  0px`,
          md: `0px 16px ${menuAnchor ? '0px' : '16px'}  0px`,
        }}
        focused={Boolean(menuAnchor)}
      >
        <Label focused={Boolean(menuAnchor)}>Select a yield rate</Label>
        <Box sx={{ cursor: 'pointer', width: '100%' }} onClick={handleOpenMenu}>
          <Typography
            sx={{
              fontSize: 31,
              padding: '8px',
              color: '#2D3239',
              zIndex: 15,
            }}
          >
            {yieldRate}% Annual yield
          </Typography>
        </Box>
        <StyledMenu
          // variant={'selectedMenu'}
          anchorEl={menuAnchor}
          open={Boolean(menuAnchor)}
          onClose={handleCloseMenu}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          MenuListProps={{
            sx: {
              width: menuAnchor ? menuAnchor.offsetWidth : 'auto',
            },
          }}
        >
          {[6, 8, 10].map((rate) => (
            <StyledMenuItem
              key={rate}
              selected={yieldRate === rate}
              onClick={() => {
                setYieldRate(rate);
                handleCloseMenu();
              }}
            >
              {rate}% Annual yield
            </StyledMenuItem>
          ))}
        </StyledMenu>
      </InputContainer>
    </Box>
  );
};

export default StakeInput;
