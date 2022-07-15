import React from 'react';
import {Box, HStack, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import colors from '../../../constants/colors'

type BaseWrapperProp = {
  children: React.ReactNode;
  headerText?: string;
  backArrow?: Boolean;
  backArrowAction: Function;
};

const BaseWrapper = ({
  children,
  headerText = 'Afromeme',
  backArrow = false,
  backArrowAction = () => {},
  ...rest
}: BaseWrapperProp) => {
  const navigation: any = useNavigation();
  return (
    <Box bg={colors.light.white} height="full" px="2" pt={4} {...rest}>
      {/**
       * @AppHeader @will @come @here
       */}
      <HStack alignItems={'center'}>
        {backArrow && (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
              backArrowAction();
            }}
            style={{justifyContent: 'center', marginRight: 10}}>
            <Icon name="arrow-back" size={30} />
          </TouchableOpacity>
        )}
        <Text fontWeight={'bold'} fontSize={'xl'}>
          {headerText}
        </Text>
      </HStack>
      {children}
    </Box>
  );
};

export default BaseWrapper;
