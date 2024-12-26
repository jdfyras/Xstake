import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import StakeInput from './StakeInput'; // Updated StakeInput Component

const StakingComponent = () => {
  const [bitcoin, setBitcoin] = useState(2);
  const [yieldRate, setYieldRate] = useState(6);
  const [data, setData] = useState([]);

  const estimatedYield = (bitcoin * yieldRate) / 100;
  const totalBTC = bitcoin + estimatedYield;

  // Generate data for the chart
  useEffect(() => {
    const generateChartData = () => {
      const points = 8; // Number of data points
      const growthFactor = estimatedYield / points; // Increment for smooth curve
      const newData = Array.from({ length: points }, (_, i) => ({
        time: `Month ${i + 1}`,
        value: bitcoin + i * growthFactor,
      }));
      setData(newData);
    };

    generateChartData();
  }, [bitcoin, estimatedYield]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'flex-start',
        // padding: '32px',
        // gap: '32px',
        margin: '10% 0%',
        width: '100%',
        //  // height: '821.48px',
        // background: 'linear-gradient(180deg, #FFFFFF 0%, #E1DCEE 100%)',
        // boxShadow: '0px 4px 64px rgba(16, 24, 40, 0.12)',
        // borderRadius: '32px',
        position: 'relative',
        // margin: '0 auto',
      }}
    >
      <Typography
        sx={{
          //   width: '1224px',
          //   height: '91px',
          fontFamily: 'Satoshi',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '76px',
          //   lineHeight: '120%',
          color: '#2D3239',
          flex: 'none',
          order: 0,
          alignSelf: 'stretch',
          flexGrow: 0,
          textAlign: 'center',
          paddingBottom: '2%',
        }}
      >
        Estimate Your Bitcoin Staking Yield
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          //   padding: '0% 10%',
          //   gap: '32px',
          //   margin: '10% 10%',
          //   width: '90%',
          //  // height: '821.48px',
          background: 'transparent',
          //   boxShadow: '0px 4px 64px rgba(16, 24, 40, 0.12)',
          //   borderRadius: '32px',
          position: 'relative',
          // margin: '0 auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '32px',
            gap: '32px',
            //   margin: '10% 0%',
            // width: '90%',
            //  // height: '821.48px',
            background: 'linear-gradient(180deg, #FFFFFF 0%, #E1DCEE 100%)',
            boxShadow: '0px 4px 64px rgba(16, 24, 40, 0.12)',
            borderRadius: '32px',
            // position: '',
            // margin: '0 auto',
          }}
        >
          {/* Stake Input Section */}
          <StakeInput
            bitcoin={bitcoin}
            setBitcoin={setBitcoin}
            yieldRate={yieldRate}
            setYieldRate={setYieldRate}
          />

          {/* Yield and Chart Section */}
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              //   flexDirection: 'column',
              alignItems: 'center',
              padding: '32px',
              //   gap: '31.83px',
              //   width: '865px',
              //   height: '483.48px',
              background: '#FEFEFE',
              border: '1px solid #DDDDDD',
              boxShadow: '0px 1px 64px rgba(16, 24, 40, 0.12)',
              borderRadius: '16px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '100%',

                flexDirection: 'column',
                alignItems: 'center',
                padding: '32px',
                gap: '31.83px',
                // width: '865px',
                // height: '483.48px',
                background: '#F7F7F7',
                border: '1px solid #DDDDDD',
                // boxShadow: '0px 1px 64px rgba(16, 24, 40, 0.12)',
                borderRadius: '16px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '753px',
                  marginBottom: '16px',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Satoshi',
                    fontWeight: 500,
                    fontSize: '23.87px',
                    color: '#75797E',
                  }}
                >
                  Estimated Annual Yield:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Satoshi',
                    fontWeight: 500,
                    fontSize: '49px',
                    color: '#2D3239',
                  }}
                >
                  {estimatedYield.toFixed(2)} BTC
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '753px',
                  marginBottom: '16px',
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'Satoshi',
                    fontWeight: 500,
                    fontSize: '23.87px',
                    color: '#75797E',
                  }}
                >
                  Total BTC After 1 Year:
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Satoshi',
                    fontWeight: 500,
                    fontSize: '49px',
                    color: '#2D3239',
                  }}
                >
                  {totalBTC.toFixed(2)} BTC
                </Typography>
              </Box>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FEC28E" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#FEC28E" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#FEC28E"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Box>

          {/* Start Staking Button */}
          <Button
            variant="contained"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '24px 32px',
              gap: '16px',
              width: '100%',

              //   width: '865px',
              //   height: '88px',
              background: '#161724',
              borderRadius: '100px',
              fontFamily: 'Satoshi',
              fontSize: '25px',
              color: '#FEFEFE',
            }}
            onClick={() => alert('Connect Wallet')}
          >
            Start Staking
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default StakingComponent;
