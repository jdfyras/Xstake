import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

const OuterCircle = styled(motion.div)({
  boxSizing: 'border-box',
  position: 'absolute',
  width: '30px',
  height: '30px',
  left: '20px', // Positioning for the parent component
  top: '20px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #DDDDDD',
  borderRadius: '50%',
});

const MiddleCircle = styled(motion.div)({
  boxSizing: 'border-box',
  position: 'absolute',
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
  position: 'absolute',
  width: '10px',
  height: '10px',
  left: '10px',
  top: '10px',
  backgroundColor: '#DDDDDD',
  border: '1px solid #DDDDDD',
  borderRadius: '50%',
});

const ConcentricCircles = () => {
  return (
    <OuterCircle>
      <MiddleCircle>
        <InnerCircle />
      </MiddleCircle>
    </OuterCircle>
  );
};

export default ConcentricCircles;
