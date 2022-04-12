import React, { useEffect } from 'react';
import { Box, Center, Text, Image } from 'native-base';
import LottieView from 'lottie-react-native'

import colors from '../../constants/colors';
import * as SCREENS from '../../constants/screens';

const WaitingScreen = ({ navigation }: any) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(SCREENS.LOGIN);
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
        <Text fontSize={'2xl'} mb='4' color={'blue.400'}>Loading...</Text>
      </Center>
    </Box>
  )
}

export default WaitingScreen;