import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { retrieveUserData } from '../utils/mockServer';

const ProfilePage = () => {
  //initial state
  const [userBio, setUserBio] = useState('');
  const [userName, setUserName] = useState('');

  const getUrlParam = () => {
    const url = window.location.href;
    let arr = url.split('/');
    let profileName = arr[arr.length - 1];
    setUserName(profileName);
    // mimic API call passing in name as param
    // return of API call shall be bio
    const response = retrieveUserData(profileName);
    const { profileBio } = response;
    setUserBio(profileBio);
  };

  useEffect(() => {
    getUrlParam();
  }, []);

  return (
    <Box display='flex' justifyContent='center' minHeight='90vh'>
      <Box
        width='35%'
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <Box marginY={4}>
          <Typography>{userName.toUpperCase()}</Typography>
        </Box>
        <Box display='flex' justifyContent='center'>
          {userName === 'akash' && (
            <img width='100%' src={require('../assets/akash.jpg')} />
          )}
          {userName === 'vasu' && (
            <img width='100%' src={require('../assets/vasu.jpg')} />
          )}
          {userName === 'sean' && (
            <img width='100%' src={require('../assets/sean.jpg')} />
          )}
          {userName === 'kartikey' && (
            <img width='100%' src={require('../assets/kartikey.jpg')} />
          )}
          {userName === 'kiran' && (
            <img width='100%' src={require('../assets/kiran.jpg')} />
          )}
        </Box>
        <Box
          width={1080}
          alignItems='center'
          display='flex'
          padding={3}
          flexDirection='column'
        >
          <Typography variant='subtitle1'>{userBio}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;
