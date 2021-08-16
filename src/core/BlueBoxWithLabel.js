import React from 'react';
import { Box, Typography } from '@material-ui/core';

const BlueBoxWithLabel = ({ labelText, height, mr, content }) => {
  return (
    <Box mr={mr}>
      <Typography color='primary' style={{ fontSize: '14px' }}>
        {labelText}
      </Typography>
      <Box
        sx={{
          height: height,
          width: '100%',
          borderBottom: '2px solid #b1b1b3',
          paddingLeft: '5px',
          paddingRight: '5px',
        }}
        bgcolor='primary.light'
      >
        {content}
      </Box>
    </Box>
  );
};

export default BlueBoxWithLabel;
