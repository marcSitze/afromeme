import React from 'react';
import {Image} from 'react-native';
import {Box, Text} from 'native-base';

import ProfileImage from '../../assets/images/profile.png';

const Profile = () => {
  return (
    <Box>
      <Box bg={'blue.500'} borderRadius={40} mr={4}>
        <Image style={{width: 80, height: 80}} source={ProfileImage} />
      </Box>
      <Text>John Doe</Text>
    </Box>
  );
};

export default Profile;
