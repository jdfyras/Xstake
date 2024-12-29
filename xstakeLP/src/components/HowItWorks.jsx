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
import BitcoinIcon from '../assets/svg/BitcoinIcon';
import XBTC_rounded from '../assets/svg/XBTC copy';

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
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(5),
  },
  // For medium screens (~616px design)
  [theme.breakpoints.between('sm', 'lg')]: {
    // Example: we can do 616px max or just let it fill
    maxWidth: 616,
  },
  // For large screens (1224px design)
  [theme.breakpoints.up('lg')]: {
    maxWidth: 1224,
  },
  margin: '0 auto', // center content
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
  fontSize: '49px',
  lineHeight: '120%', // from your Figma
  // Adjust at medium (~616px)
  [theme.breakpoints.up('sm')]: {
    fontSize: '61px', // or 73px line-height from Figma
  },
  // Adjust at large (~1224px)
  [theme.breakpoints.up('lg')]: {
    fontSize: '76px',
  },
}));

// This container holds all the "items" (the cards)
const ItemsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  // For smaller screens, stack vertically
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: theme.spacing(4),
  isolation: 'isolate',
  // Width references:
  width: '100%', // fill container
  [theme.breakpoints.down('sm')]: {
    // 375 design
    maxWidth: 343,
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    // 616 design
    maxWidth: 616,
  },
  [theme.breakpoints.up('lg')]: {
    // 1224 design
    // maxWidth: 1224,
    flexDirection: 'row', // side by side on large
    alignItems: 'flex-start',
    zIndex: 10,
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
      Icon: XBTC_rounded,
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
    <Container>
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
