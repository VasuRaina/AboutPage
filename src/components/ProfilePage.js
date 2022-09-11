import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const ProfilePage = () => {
  //
  const getUrlParam = () => {
    const url = window.location.href;

    let arr = url.split('/');

    let profileName = arr[arr.length - 1];
  };

  useEffect(() => {
    getUrlParam();
  }, []);

  return (
    <Box display='flex' justifyContent='center' minHeight='90vh'>
      <Box
        width={1080}
        alignItems='center'
        display='flex'
        padding={3}
        flexDirection='column'
      >
        <Typography variant='subtitle1'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfilePage;
