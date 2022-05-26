import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Box, Text} from 'native-base';
import { useNavigation } from '@react-navigation/native';

import ProfileImage from '../../assets/images/profile.png';
import * as SCREENS from '../../constants/screens';

const Profile = () => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(SCREENS.VIEW_PROFILE)}>
      <Box>
        <Box bg={'blue.500'} borderRadius={40} mr={4}>
          <Image style={{width: 80, height: 80}} source={ProfileImage} />
        </Box>
        <Text>John Doe</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Profile;
