import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import StakeBitcoinCard from './StakeBitcoinCard';
import LeverageInDeFiCard from './LeverageInDeFiCard';
import BitcoinIcon from '../assets/svg/BitcoinIcon';
import XBTC_rounded from '../assets/svg/XBTC copy';
const StyledButton = styled(Button)({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px 32px',
  gap: '16px',
  background: '#161724',
  borderRadius: '100px',
  fontFamily: "'Satoshi', sans-serif", // Ensure to import this font in your project
  fontStyle: 'normal',
  fontWeight: 500,
  fontSize: '20px',
  lineHeight: '120%',
  color: '#FEFEFE',
  '&:hover': {
    backgroundColor: '#2D3239',
    borderColor: '#AAAAAA',
  },
  // Responsive adjustments
  width: '90%', // Default width for smaller screens
  maxWidth: '214px', // Limit max width for larger screens
  height: 'auto', // Adjust height dynamically
  textAlign: 'center',
});
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

const HowItWorks = () => {
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
    <Box
      sx={{
        // py: 4,
        overflow: 'hidden',
        width: '100%',
        display: 'flex',
        position: 'relative',

        // // maxWidth: 1225,
        // margin: '0 auto',
        // mt: { xs: 4, md: 8 },
        zIndex: 10,
        background: 'transparent',
        // background: '#181928',
        // borderRadius: '99px',
        // px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box
        sx={{
          // maxWidth: 1225,
          py: 4,
          overflow: 'hidden',
          width: '100%',
          // margin: '0 auto',
          // mt: { xs: 4, md: 8 },
          zIndex: 10,
          // background: '#181928',
          // borderRadius: '99px',
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Satoshi, sans-serif',
            fontWeight: 500,
            fontSize: { xs: '3rem', sm: '3rem', md: '4rem' },
            lineHeight: { xs: 1.3, sm: 1.2 },
            color: '#2D3239',
            textAlign: 'left',
          }}
        >
          How It Works
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 2, sm: 3 },
            overflowX: { xs: 'auto', sm: 'unset' },
            scrollSnapType: { xs: 'x mandatory', sm: 'none' },
            '-webkit-overflow-scrolling': 'touch',
            px: { xs: 1, sm: 2 },
            pt: { xs: 3, sm: 5 },
            pb: { xs: 3, sm: 5 },
            flexWrap: { sm: 'wrap', md: 'nowrap' },
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              style={{
                scrollSnapAlign: 'start',
                flex: '1 1 auto',
                minWidth: { xs: '80%', sm: '45%', md: '30%' },
                maxWidth: '100%',
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
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // height: '100vh', // Fill the entire viewport height
            // width: '100%', // Fill the entire viewport width
          }}
        >
          <StyledButton>Get Started Now</StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

export default HowItWorks;
