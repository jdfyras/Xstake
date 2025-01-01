import React from 'react';
import { styled } from '@mui/system';
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';

// Example sub-components
import StakeBitcoinCard from './StakeBitcoinCard';
import LeverageInDeFiCard from './LeverageInDeFiCard';

// Icons
import { BitcoinIcon, XBTC_Copy } from '../utils/SvgApp';

// ======================
//   STYLED COMPONENTS
// ======================

// Outer container
const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 10,
  // We'll manage widths and heights with breakpoints:
  width: '100%',
  // The gap for the "How it works" section:
  gap: theme.spacing(5),
  // For smaller screens (around 375px)
  // For medium screens (~616px design)
  // [theme.breakpoints.down('md')]: {
  //   // Example: we can do 616px max or just let it fill
  //   mx: '16px',
  //   mt: '164px',
  // },
  // [theme.breakpoints.between('md', 'lg')]: {
  //   // Example: we can do 616px max or just let it fill
  //   mx: '64px',
  //   mt: '196px',
  // },
  // [theme.breakpoints.up('lg')]: {
  //   mx: '108px',
  //   mt: '1128px',
  // },
}));

// The big heading
const Heading = styled(Typography)(({ theme }) => ({
  // Default (mobile first)
  fontFamily: 'Satoshi, sans-serif',
  fontStyle: 'normal',
  fontWeight: 500,
  color: '#2D3239',
  textAlign: 'left',
  // For smaller screens (375px)
  // Adjust at medium (~616px)
  fontSize: '42px',
  lineHeight: '120%', // Maintain consistent line-height
  // Adjust for medium screens (~sm to lg)
  [theme.breakpoints.up('sm')]: {
    fontSize: '61px', // For medium screens
  },
  // Adjust for large screens (~lg and above)
  [theme.breakpoints.up('lg')]: {
    fontSize: '76px', // For large screens
  },
}));

// This container holds all the "items" (the cards)
const ItemsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  // For smaller screens, stack vertically
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(4),
  isolation: 'isolate',
  // Width references:
  width: '100%', // fill container
  zIndex: 10,
  [theme.breakpoints.up('lg')]: {
    // 1224 design
    // maxWidth: 1224,
    flexDirection: 'row', // side by side on large
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

// The "Get Started Now" button
const StyledButton = styled(Button)(({ theme }) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  // Default (mobile)
  padding: theme.spacing(3, 4),
  gap: theme.spacing(2),
  background: '#161724',
  borderRadius: '100px',
  fontFamily: 'Satoshi, sans-serif',
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '20px',
  lineHeight: '120%',
  color: '#FEFEFE',
  '&:hover': {
    backgroundColor: '#2D3239',
    borderColor: '#AAAAAA',
  },
  // For large screens
  [theme.breakpoints.up('lg')]: {
    width: 214,
    height: 72,
    padding: theme.spacing(3),
    fontSize: '20px', // can keep or adjust
  },
}));

// Framer motion card variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },

  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

// ======================
//   MAIN COMPONENT
// ======================
const HowItWorks = () => {
  const theme = useTheme();
  // If you want to handle logic specifically for breakpoints:
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const cards = [
    {
      id: 1,
      Icon: BitcoinIcon,
      step: 'Step 1',
      title: 'Stake Your Bitcoin',
      description:
        'Deposit Bitcoin to mint a liquid ERC20 token that mirrors your Bitcoin balance',
    },
    {
      id: 2,
      Icon: XBTC_Copy,
      step: 'Step 2',
      title: 'Earn Native Yield',
      description:
        'Earn staking rewards automatically, without locking up your BTC',
    },
    {
      id: 3,
      Component: LeverageInDeFiCard,
    },
  ];

  return (
    <Container
      sx={{
        px: { xs: '16px', sm: '16px', md: '64px', lg: '108px' },
        py: { xs: '64px', sm: '64px', md: '96px', lg: '128px' },
      }}
    >
      <Heading>How It Works</Heading>

      {/* Items (cards) container */}
      <ItemsContainer>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            style={{
              width: '100%',
              // On large screens, each card might have a maxWidth
              // or flex basis around 386.67px from Figma
              flexBasis: isLarge ? '386.67px' : 'auto',
            }}
          >
            {card.Component ? (
              <card.Component />
            ) : (
              <StakeBitcoinCard
                Icon={card.Icon}
                step={card.step}
                title={card.title}
                description={card.description}
              />
            )}
          </motion.div>
        ))}
      </ItemsContainer>

      {/* "Get Started Now" button */}
      <Box
        sx={{ display: 'flex', justifyContent: 'center', mt: 2, zIndex: 100 }}
      >
        <StyledButton>Get Started Now</StyledButton>
      </Box>
    </Container>
  );
};

export default HowItWorks;
