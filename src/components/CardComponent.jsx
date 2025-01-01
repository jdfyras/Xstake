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
import { Subtract, Xpoint } from '../utils/SvgApp';
import myImage from '../assets/images/s3-alpha-sig.png';
import LandingCards from './LandingCards';

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

// Reusable Gradient Card 1 (the 8% card)
const GradientCard1 = ({ number, description, gradient }) => {
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: '400px',
        background: gradient,
        // boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        // boxShadow: '0px -12px 30.9px #E1DCEE',
        boxShadow: 0,

        p: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
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
            fontSize: { xs: 14, sm: 18, md: 25 },
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
        background: gradient,
        boxShadow: '0px -12px 30.9px #E1DCEE',
        p: { xs: 2, sm: 3, md: 4 },
        pb: { xs: 2, sm: 3, md: 0 },
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          gap: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,
            fontSize: { xs: 40, sm: 50, md: 76 },
            color: '#2D3239',
          }}
        >
          <AnimatedNumber value={number} />
          <Box
            component="span"
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
            fontSize: { xs: 14, sm: 18, md: 25 },
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' },
          }}
        >
          <Xpoint width={'100%'} height={'auto'} />
        </Box>
      </CardContent>
    </Card>
  );
};

const ResponsiveLayout = () => {
  const theme = useTheme();

  const isMdUp = useMediaQuery(theme.breakpoints.up('sm')); //1200

  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'space-around',
        // position: 'relative',
        // flexDirection: 'column',
        // gap: 10,
        // // px: { xs: 2, md: 4 },
        // py: { xs: 2, md: 4 },
        px: { xs: '16px', sm: '16px', md: '64px', lg: '108px' },
        mt: { xs: '64px', sm: '64px', md: '96px', lg: '128px' },

        // zIndex: 10,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          position: 'relative',
          flexDirection: 'row',
          // gap: 4,
          // px: { xs: 2, md: 4 },
          // py: { xs: 20, md: 4 },
          zIndex: 10,
        }}
      >
        <Box
          sx={{
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-around',
            position: 'relative',
            flexDirection: { xs: 'row', sm: 'row', md: 'row' },
            gap: { xs: 2, md: 4 },
            // px: { xs: 2, md: 4 },
            // py: { xs: 20, md: 4 },
          }}
          container
          spacing={6}
          justifyContent="space-around"
          alignItems="flex-end"
        >
          <Grid item xs={6} sm={6} md={6}>
            <GradientCard1
              number={8}
              description="Get yield on your BTC with competitive rates"
              gradient="linear-gradient(180deg, #FFFFFF 0%, #F0DED7 100%)"
            />
          </Grid>

          <Grid item xs={6} sm={6} md={6}>
            <GradientCard2
              number={2}
              description="Earn xPoints every time you mint xBTC"
              gradient="linear-gradient(180deg, #FFFFFF 0%, #E1DCEE 100%)"
            />
          </Grid>
        </Box>
      </Box>
      {!isMdUp && (
        <Box
          sx={{
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            position: 'relative',
            // flexDirection: 'row',
            paddingTop: 5,
            // px: { xs: 2, md: 4 },
            // py: { xs: 20, md: 4 },
            zIndex: 10,
          }}
        >
          <LandingCards />
        </Box>
      )}
    </Box>
  );
};

export default ResponsiveLayout;
