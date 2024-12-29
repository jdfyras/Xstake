import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

const Circle = styled(motion.div)(({ theme }) => ({
  boxSizing: 'border-box',
  position: 'absolute',
  width: '30px',
  height: '30px',
  left: '0px',
  top: '0px',
  backgroundColor: '#EFEDFD',
  border: '1px solid #64656F',
  borderRadius: '50%',
}));

const AnimatedCircle = () => {
  return (
    <Circle
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    />
  );
};

export default AnimatedCircle;
