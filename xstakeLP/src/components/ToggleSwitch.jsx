import React, { useEffect, useState } from 'react';
import { styled, keyframes } from '@mui/material/styles';
import { Box } from '@mui/material';

const Container = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  width: '200px',
  height: '100px',
  background: '#fff',
  borderRadius: '50px',
  overflow: 'hidden',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
});

const yellowBitcoin = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const darkBitcoinTranslate = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const BitcoinWrapper = styled(Box)(({ animation, delay }) => ({
  position: 'absolute',
  animation: `${animation} 0.5s ease-out`,
  animationDelay: `${delay}s`,
  animationFillMode: 'forwards',
}));

const BitcoinSVG = ({ color = 'gold' }) => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill={color} />
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dy=".3em"
      fontSize="12"
      fill="#fff"
      fontWeight="bold"
    >
      ₿
    </text>
  </svg>
);

const BitcoinAnimation = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimate(true);
  }, []);

  return (
    <Container>
      {/* Yellow Bitcoin (static) */}
      <BitcoinWrapper
        animation={yellowBitcoin}
        style={{
          zIndex: 2,
          transform: 'translateX(0)',
        }}
      >
        <BitcoinSVG color="gold" />
      </BitcoinWrapper>

      {/* Dark Bitcoins (animated) */}
      {animate &&
        [1, 2, 3].map((index) => (
          <BitcoinWrapper
            key={index}
            animation={darkBitcoinTranslate}
            delay={index * 0.2}
            style={{
              zIndex: 1,
              transform: 'translateY(50px)',
              left: `${50 + index * 20}px`,
            }}
          >
            <BitcoinSVG color="#4A4A4A" />
          </BitcoinWrapper>
        ))}
    </Container>
  );
};

export default BitcoinAnimation;
