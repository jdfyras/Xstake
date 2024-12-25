import React from 'react';
import { Box } from '@mui/material';

const AbsoluteShapes = () => {
  return (
    <Box>
      {' '}
      {/* Container with a background */}
      {/* Subtract */}
      <Box
        position="absolute"
        width={383}
        height={338}
        left={-120}
        top={548}
        bgcolor="#FFFFFF"
        borderRadius={4} // 32px equivalent
        boxShadow={1} // Optional: Adds shadow for better visuals
      />
      {/* Rectangle 5 */}
      <Box
        position="absolute"
        width={383}
        height={338}
        left={-120}
        top={548}
        bgcolor="#FFFFFF"
        borderRadius={4}
      />
      {/* Rectangle 11 */}
      <Box
        position="absolute"
        width={301}
        height={289}
        left={12}
        top={309}
        bgcolor="#FFFFFF"
        borderRadius={4}
      />
    </Box>
  );
};

export default AbsoluteShapes;
