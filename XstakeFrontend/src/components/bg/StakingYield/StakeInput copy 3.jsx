import React, { useState } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  InputAdornment,
  Typography,
} from '@mui/material';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { minHeight, styled } from '@mui/system';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const yieldRates = [
  { label: '4% Annual yield', value: 4 },
  { label: '5% Annual yield', value: 5 },
  { label: '6% Annual yield', value: 6 },
  // ... Add more if you want
];
const BootstrapInput1 = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(2),
  },
  '& .MuiInputBase-input': {
    borderRadius: '16px 0px 0px 16px',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 20,
    minHeight: '50px',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: 'Satoshi',
    '&:focus': {
      borderRadius: '16px 0px 0px 16px',
      borderColor: 'rgba(97, 71, 236, 1)',
      boxShadow: '0px 4px 64px 0px rgba(16, 24, 40, 0.12)',
    },
  },
}));
const BootstrapInput2 = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(2),
  },
  '& .MuiInputBase-input': {
    minHeight: '50px',
    borderRadius: '0px 16px 16px 0px',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 20,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: 'Satoshi',
    '&:focus': {
      borderRadius: '0px 16px 16px 0px',
      borderColor: 'rgba(97, 71, 236, 1)',
      boxShadow: '0px 4px 64px 0px rgba(16, 24, 40, 0.12)',
    },
  },
}));
export default function StakeInput() {
  const [btcAmount, setBtcAmount] = useState(2);
  const [selectedYield, setSelectedYield] = useState(yieldRates[2].value);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        // padding: '32px',
        // gap: '31.83px',
        width: '865px',
        // height: '483.48px',
        // background: '#FEFEFE',
        // border: '1px solid #DDDDDD',
        // boxShadow: '0px 1px 64px rgba(16, 24, 40, 0.12)',
        // borderRadius: '16px',
        // display: 'flex',
        flexWrap: 'wrap',
        // alignItems: 'center',
        // // justifyContent: 'flex-start',
        // borderRadius: 2,
        // p: 2,
        // boxShadow: 2,
        // maxWidth: 600,
        flexDirection: 'row',
        // // justifyContent: 'space-between',
        // width: '100%',
        // // height: '122px',
        // filter: 'drop-shadow(0px 1px 64px rgba(16, 24, 40, 0.12))',
      }}
    >
      <FormControl sx={{ width: '100%', flex: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox">
          Bitcoin you’d like to stake
        </InputLabel>
        <BootstrapInput1
        // id="demo-customized-textbox"
        />
      </FormControl>
      <FormControl sx={{ width: '100%', flex: 1 }} variant="standard">
        <InputLabel htmlFor="demo-customized-textbox">
          Bitcoin you’d like to stake
        </InputLabel>
        <BootstrapInput2 id="demo-customized-textbox" />
      </FormControl>
    </Box>
  );
}
