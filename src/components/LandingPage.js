import React from 'react';
import { Box, Typography } from '@mui/material';

const LandingPage = () => {
  return (
    <Box display='flex' justifyContent='center' minHeight='90vh'>
      <Box
        width={1080}
        alignItems='center'
        display='flex'
        padding={3}
        flexDirection='column'
      >
        <Box paddingX={3} width='50%'>
          <Typography variant='subtitle1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Box>
        <Box paddingTop={4} width='50%'>
          <Box marginY={3}>
            <Typography variant='h4'>Vasu Raina</Typography>
            <Typography variant='h5'>Team Lead</Typography>
          </Box>
          <Box marginY={3}>
            <Typography variant='h4'>Kartikey Sarode</Typography>
            <Typography variant='h5'>Github Master</Typography>
          </Box>
          <Box marginY={3}>
            <Typography variant='h4'>Akash Thiagarajan</Typography>
            <Typography variant='h5'>Back-End Lead</Typography>
          </Box>
          <Box marginY={3}>
            <Typography variant='h4'>Kiran Shrestha</Typography>
            <Typography variant='h5'>Front-End Lead</Typography>
          </Box>
          <Box marginY={3}>
            <Typography variant='h4'>Sean Locklar</Typography>
            <Typography variant='h5'>Scrum Master</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
