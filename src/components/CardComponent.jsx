import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useSpring, animated } from '@react-spring/web';
import Grid from '@mui/material/Grid2';
import Subtract from '../assets/svg/Subtract';
import Xpoint from '../assets/svg/Xpoint';
import myImage from '../assets/images/s3-alpha-sig.png';

// Counter Animation Component
const AnimatedNumber = ({ value }) => {
  const props = useSpring({
    from: { number: 0 },
    to: { number: value },
    config: { duration: 1500 },
  });

  return <animated.span>{props.number.to((n) => n.toFixed(0))}</animated.span>;
};

// Reusable Gradient Card (Empty)
const GradientCardEmpty = () => {
  return (
    <Card
      sx={{
        width: '400px',
        height: '400px',
        background: 'linear-gradient(180deg, #FFFFFF 0%, #E8E8E8 100%)',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          opacity: 0,
        }}
      >
        {/* Invisible Xpoint to keep spacing consistent if needed */}
        {/* <Xpoint
          style={
            {
              // opacity: 0,
            }
          }
        /> */}
      </CardContent>
    </Card>
  );
};

// Reusable Gradient Card 1 (the 8% card)
const GradientCard1 = ({ number, description, gradient }) => {
  return (
    <Card
      sx={{
        width: '100%',
        height: 'auto',
        maxWidth: '400px',
        // minHeight: '400px',
        background: gradient,
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        paddingBottom: '7%',
        paddingTop: '5%',
        paddingLeft: '5%',
        paddingRight: '10%',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          //   alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: 'left',

            fontWeight: 500,
            // Responsive font size
            fontSize: { xs: 40, sm: 50, md: 76 },
            color: '#2D3239',
          }}
        >
          <AnimatedNumber value={number} />%
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: 'left',
            color: '#75797E',
            // Responsive font size
            fontSize: { xs: 14, sm: 18, md: 25 },
            // marginLeft: '10%',
            // marginRight: '5%',
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Reusable Gradient Card 2 (the 2x card)
const GradientCard2 = ({ number, description, gradient }) => {
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        background: gradient,
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        // paddingBottom: '7%',
        paddingTop: '5%',
        paddingLeft: '5%',
        // paddingRight: '10%',
        paddingBottom: { xs: '7%', sm: '7%', md: '7%', lg: 'block' },
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          //   alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,
            // Responsive font size
            fontSize: { xs: 40, sm: 50, md: 76 },
            color: '#2D3239',
          }}
        >
          <AnimatedNumber value={number} />
          <Box
            component="span"
            // Hide "x Points" on xs & sm
            sx={{ display: { xs: 'inline', sm: 'inline', md: 'inline' } }}
          >
            x Points
          </Box>
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'left',
            color: '#75797E',
            // Responsive font size
            fontSize: { xs: 14, sm: 18, md: 25 },
            // marginLeft: '10%',
          }}
        >
          {description}
        </Typography>

        {/* Hide Xpoint on xs & sm */}
        <Box
          sx={{
            // alignItems: '',
            display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' },
            // marginLeft: '10%',
          }}
        >
          <Xpoint
            width={'100%'}
            height={'auto'}
            // style={{
            //   color: '#75797E',
            // }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

const ResponsiveLayout = () => {
  const theme = useTheme();

  const isMdUp = useMediaQuery(theme.breakpoints.down(1850)); //1200
  console.log(
    '🚀 ~ file: CardComponent.jsx:199 ~ ResponsiveLayout ~ isMdUp:',
    isMdUp
  );

  return (
    <Box
      sx={{
        // backgroundColor: '#F9FAFB',
        // minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        // Use space-around or space-between as needed
        justifyContent: 'space-around',
        position: 'relative',
        px: { xs: 2, md: 4 }, // Some padding for smaller screens
      }}
    >
      <Grid
        container
        spacing={6}
        justifyContent="space-around"
        alignItems="flex-end"
      >
        {/* 4) The final Empty Card (hide on xs & sm) */}
        <Grid
          item
          xs={0}
          sm={0}
          md={0}
          lg={3}
          sx={{
            display: isMdUp ? 'none' : 'block', // { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
          }}
        >
          <GradientCardEmpty />
        </Grid>
        {/* 
          1) Empty card (final on large screens, hidden on xs/sm).
             We'll place it last in DOM but reorder with "order"
             OR simply place in correct order and rely on breakpoints.
        */}

        {/* 2) The 8% Card */}
        <Grid item xs={0} sm={0} md={0} lg={3}>
          <GradientCard1
            number={8}
            description="Get yield on your BTC with competitive rates"
            gradient="linear-gradient(180deg, #FFFFFF 0%, #F0DED7 100%)"
          />
        </Grid>

        {/* 3) The 2x Card */}
        <Grid
          item
          xs={12} // full width on xs
          sm={6} // half width on sm
          md={3}
        >
          <GradientCard2
            number={2}
            description="Earn xPoints every time you mint xBTC"
            gradient="linear-gradient(180deg, #FFFFFF 0%, #E1DCEE 100%)"
          />
        </Grid>

        {/* 1) The "first" empty card (on the right for md+),
            hidden on xs & sm */}
        <Grid
          item
          xs={0}
          sm={0}
          md={0}
          lg={3}
          sx={{
            display: isMdUp ? 'none' : 'block',
          }}
        >
          <GradientCardEmpty />
        </Grid>

        {/* White Card with Image, hidden on xs & sm */}
        <Grid
          item
          xs={0}
          sm={0}
          md={3}
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '300px', // Adjust as needed
            }}
          >
            <Box
              component="img"
              src={myImage}
              alt="Decorative"
              sx={{
                position: 'absolute',
                top: '10%',
                left: '0%',
                transform: 'rotate(0.1turn)',
                width: '130%',
                height: 'auto',
                zIndex: 10,
              }}
            />

            <Card
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                boxShadow: 3,
                position: 'absolute',
                zIndex: 1,
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Decorative Torus Knot */}
      <Box
        sx={{
          position: 'absolute',
          width: { xs: 200, md: 436.84 },
          height: { xs: 200, md: 436.84 },
          top: { xs: 'auto', md: 50 },
          right: { xs: 'auto', md: 50 },
          background:
            "url('/path/to/torus-knot-dark.png') no-repeat center/cover",
          transform: 'rotate(27.97deg)',
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default ResponsiveLayout;
