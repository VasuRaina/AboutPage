import React from 'react';
import { Box, Typography } from '@mui/material';

const LandingPage = () => {
  return (
    <Box display='flex' justifyContent='center' minHeight='90vh'>
      <Box
        bgcolor='lawngreen'
        width={1080}
        alignItems='center'
        display='flex'
        padding={3}
        flexDirection='column'
      >
        {/*  */}
        {/* <Typography variant='h3' >Landing Page</Typography> */}
        <Box paddingX={3} width='50%'>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Box>
        <Box>list</Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
