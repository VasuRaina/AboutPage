import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { retrieveUserData } from '../utils/mockServer';

const ProfilePage = () => {
  const [userBio, setUserBio] = useState('');

  const getUrlParam = () => {
    const url = window.location.href;
    let arr = url.split('/');
    let profileName = arr[arr.length - 1];
    // mimic API call passing in name as param
    // return of API call shall be bio and pic

    const response = retrieveUserData(profileName);
    const { profileBio, profileImage } = response;
    setUserBio(profileBio);
    console.log(response);
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
         {userBio}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfilePage;
