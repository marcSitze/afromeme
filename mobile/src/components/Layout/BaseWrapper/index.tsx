import React from "react";
import { Box, Text } from 'native-base';

type BaseWrapperProp = {
  children: React.ReactNode,
  headerText?: string,
}

const BaseWrapper = ({ children, headerText = 'Afromeme' }: BaseWrapperProp) => {
  return (
    <Box bg="coolGray.100" height="full" px="2" pt={4}>
      {/**
       * @AppHeader @will @come @here
       */}
       <Text fontWeight={'bold'} fontSize={'xl'} mb={'4'}>{headerText}</Text>
      {children}
    </Box>
  )
}

export default BaseWrapper;