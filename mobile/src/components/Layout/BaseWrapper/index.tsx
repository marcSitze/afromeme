import React from "react";
import { Box, Text } from 'native-base';

type BaseWrapperProp = {
  children: React.ReactNode
}

const BaseWrapper = ({ children }: BaseWrapperProp) => {
  return (
    <Box bg="coolGray.200" height="full" px="2" pt={4}>
      {children}
    </Box>
  )
}

export default BaseWrapper;