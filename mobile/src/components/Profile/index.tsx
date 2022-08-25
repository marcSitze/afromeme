import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Box, Text} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import ProfileImage from '../../assets/images/profile.png';
import * as SCREENS from '../../constants/screens';
import {IAccount} from '../../types/users';
import {viewProfile} from '../../redux/users/actions';
import Gravatar from '../Others/Gravatar'

type PropTypes = {
  account: IAccount;
};

const Profile = ({account}: PropTypes) => {
  const dispatch = useDispatch();
  const navigation: any = useNavigation();
  // console.log('Profiles: ', account);

  const changeScreen = () => {
    dispatch(viewProfile(account._id));
    navigation.navigate(SCREENS.VIEW_PROFILE);
  };

  return (
    <TouchableOpacity onPress={changeScreen}>
      <Box my={2} alignItems={'center'} mr={4}>
        <Box borderRadius={40} mb={1}>
          {/* <Image style={{width: 70, height: 70}} source={ProfileImage} /> */}
          <Gravatar size={70} username={account?.user?.username} />
        </Box>
        <Text fontSize={12} fontWeight={'semibold'}>
          {account?.user?.username ?? 'John Doe'}
        </Text>
      </Box>
    </TouchableOpacity>
  );
};

export default Profile;
