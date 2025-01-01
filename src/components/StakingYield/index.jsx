import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import StakeInput from './StakeInput'; // Import your StakeInput component
import { Xicon } from '../../utils/SvgApp';

const StakingComponent = () => {
  const [bitcoin, setBitcoin] = useState(2);
  const [yieldRate, setYieldRate] = useState(6);
  const [data, setData] = useState([]);

  const estimatedYield = (bitcoin * yieldRate) / 100;
  const totalBTC = bitcoin + estimatedYield;

  // Generate data for the chart
  useEffect(() => {
    const points = 8;
    const growthFactor = estimatedYield / points;
    const newData = Array.from({ length: points }, (_, i) => ({
      time: `Month ${i + 1}`,
      value: bitcoin + i * growthFactor,
    }));
    setData(newData);
  }, [bitcoin, estimatedYield]);

  const theme = useTheme();

  return (
    <Box
      sx={{
        // py: 4,
        pt: { xs: '64px', sm: '64px', md: '96px', lg: '128px' },

        px: { xs: '16px', sm: '16px', md: '64px', lg: '108px' },
        [theme.breakpoints.up('md')]: { px: 8 },
        zIndex: 15,
      }}
    >
      <Typography
        // variant="h4"
        sx={{
          zIndex: 15,

          //   width: '1224px',
          //   height: '91px',
          fontFamily: 'Satoshi',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: { xs: '42px', sm: '61px', lg: '76px' },
          //   lineHeight: '120%',
          color: '#2D3239',
          flex: 'none',
          order: 0,
          alignSelf: 'stretch',
          flexGrow: 0,

          textAlign: 'center',
          mb: 4,
          [theme.breakpoints.down('md')]: { fontSize: '49px' },
          // [theme.breakpoints.down('sm')]: { fontSize: '32px' },
        }}
      >
        Estimate Your Bitcoin Staking Yield
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{
          zIndex: 15,
        }}
      >
        <Grid
          item
          xs={12}
          md={10}
          lg={8}
          sx={{
            zIndex: 15,
          }}
        >
          <Box
            sx={{
              p: 4,
              zIndex: 15,

              borderRadius: '32px',
              background: 'linear-gradient(180deg, #FFFFFF 0%, #E1DCEE 100%)',
              boxShadow: '0px 4px 64px rgba(16, 24, 40, 0.12)',
            }}
          >
            {/* StakeInput Component */}
            <StakeInput
              bitcoin={bitcoin}
              setBitcoin={setBitcoin}
              yieldRate={yieldRate}
              setYieldRate={setYieldRate}
            />
            {/* Yield and Chart Section */}
            <Box
              sx={{
                zIndex: 15,

                mt: 4,
                p: 3,
                borderRadius: '16px',
                backgroundColor: '#FEFEFE',
                border: '1px solid #DDDDDD',
                gap: 4,
              }}
            >
              <Box
                sx={{
                  zIndex: 15,

                  borderRadius: '16px',
                  backgroundColor: '#F7F7F7',
                  border: '1px solid #DDDDDD',
                  py: 4,
                  px: 4,
                  // gap: 100,
                  // display: 'flex',
                  // justifyContent: 'space-between',
                  // // alignItems: 'center',
                  // mb: 2,
                  // flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                }}
              >
                <Box
                  sx={{
                    zIndex: 15,

                    display: 'flex',
                    justifyContent: 'space-between',
                    // alignItems: 'center',
                    gap: { xs: 2, sm: 0, md: 0 },

                    mb: 6,
                    flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{ color: '#75797E', zIndex: 15 }}
                  >
                    Estimated Annual Yield:
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      zIndex: 15,

                      fontFamily: 'Satoshi',

                      fontWeight: '500',
                      color: '#2D3239',
                      fontSize: '39px',
                    }}
                  >
                    {estimatedYield.toFixed(2)} BTC
                  </Typography>
                </Box>
                <Box
                  sx={{
                    zIndex: 15,

                    display: 'flex',
                    justifyContent: 'space-between',
                    // alignItems: 'center',
                    gap: { xs: 2, sm: 0, md: 0 },

                    mb: 6,
                    flexDirection: { xs: 'column', sm: 'row', md: 'row' },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      zIndex: 15,

                      color: '#75797E',
                      //styleName: Subtitle/Medium;
                      fontFamily: 'Satoshi',
                      fontSize: '20px',
                      fontWeight: '500',
                      // height: 24px,
                      align: 'left',
                      // text-underline-position: from-font,
                      // text-decoration-skip-ink: none,
                    }}
                  >
                    Total BTC After 1 Year:
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: 'Satoshi',
                      zIndex: 15,

                      fontWeight: '500',
                      color: '#2D3239',
                      fontSize: '39px',
                    }}
                  >
                    {totalBTC.toFixed(2)} BTC
                  </Typography>
                </Box>
                <ResponsiveContainer
                  width="100%"
                  height={200}
                  // height={200}
                >
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient
                        id="colorValue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#FEC28E"
                          // stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#FEC28E"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    {/* <XAxis dataKey="time" /> */}
                    {/* <YAxis /> */}
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
            {/* Button Section */}
            {/* <Grid item xs={12} sm={10} lg={8}>
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 4,
              py: 2,
              borderRadius: '50px',
              fontSize: '18px',
              fontWeight: 600,
              textTransform: 'none',
              background: '#161724',
              '&:hover': {
                background: '#1b1d33',
              },
            }}
            onClick={() => alert('Connect Wallet')}
          >
            Start Staking
          </Button>
        </Grid> */}
            <Grid
              item
              sx={{
                zIndex: 15,
              }}
            >
              <Box
                onClick={() => alert('Connect Wallet')}
                fullWidth
                variant="contained"
                sx={{
                  zIndex: 15,

                  mt: 4,
                  py: 2,
                  borderRadius: 100,
                  fontSize: 25,
                  fontWeight: 600,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  // p: '16px 32px',
                  gap: '16px',
                  // width: 210, // { xs: 'auto', sm: '206px' },
                  // height: 74, //{ xs: 'auto', sm: '72px' },
                  background: '#161724',
                  cursor: 'pointer',

                  '&:hover': {
                    backgroundColor: '#2D3239',
                    borderColor: '#AAAAAA',
                  },
                }}
              >
                <Typography
                  sx={{
                    zIndex: 15,

                    fontFamily: 'Satoshi, sans-serif',
                    fontWeight: 500,
                    fontSize: 25,
                    lineHeight: '120%',
                    color: '#FEFEFE',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                  }}
                >
                  Connect Wallet
                </Typography>

                {/* Mini circle with an icon (could be CloseIcon or anything) */}
                <Box
                  sx={{
                    zIndex: 15,

                    display: 'flex',
                    alignItems: 'center',
                    p: 1,
                    border: '1px solid #FEFEFE',
                    borderRadius: 360,
                    width: 40,
                    height: 40,
                  }}
                >
                  <Xicon
                    sx={{ zIndex: 15, color: '#FEFEFE', width: 40, height: 40 }}
                  />
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StakingComponent;
