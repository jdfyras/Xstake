import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

const OuterCircle = styled(motion.div)({
  boxSizing: 'border-box',
  position: 'relative',
  width: '30px',
  height: '30px',
  left: '0px',
  top: '0px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #DDDDDD',
  borderRadius: '50%',
});

const InnerCircle = styled(motion.div)({
  boxSizing: 'border-box',
  position: 'relative',
  width: '10px',
  height: '10px',
  left: '9px',
  top: '9px',
  backgroundColor: '#DDDDDD',
  border: '1px solid #DDDDDD',
  borderRadius: '50%',
});

const AnimatedCircle = ({ setActiveStep, index }) => {
  return (
    <OuterCircle
      whileHover={{
        backgroundColor: '#EFEDFD',
        border: '1px solid #64656F',
        cursor: 'pointer',
      }}
      onClick={() => setActiveStep(index)}
    >
      <InnerCircle
        whileHover={{
          backgroundColor: '#64656F',
          border: '1px solid #64656F',
          //   cursor: 'pointer',
        }}
      />
    </OuterCircle>
  );
};

export default AnimatedCircle;
