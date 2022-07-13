import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Box, Center, Text, Image } from 'native-base';
import LottieView from 'lottie-react-native'
import { useDispatch } from 'react-redux';

import colors from '../../constants/colors';
import * as SCREENS from '../../constants/screens';
import { getLocalSignIn } from '../../redux/auth/actions';

const WaitingScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(getLocalSignIn());
      // navigation.navigate(SCREENS.LOGIN);
    }, 1500);
  }, []);

  return (
    <Box flex={1}>
      <Box justifyContent={'center'} flex={1}>
        <Center>
          <Box w={'1/2'} h={100}>
            <LottieView source={require('../../assets/lottie/95728-loading-19.json')} autoPlay loop />
          </Box>
        </Center>
      </Box>
      <Center>
        {/* <Text fontSize={'2xl'} mb='4' color={'blue.400'}>Loading...</Text> */}
        <ActivityIndicator size={'large'} />
      </Center>
    </Box>
  )
}

export default WaitingScreen;