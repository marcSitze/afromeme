import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Box, Center, Container, Heading, Text, FormControl, Input, VStack, HStack, Button } from 'native-base';

import * as SCREENS from '../../../constants/screens';

/**
 *
 * @todo add navigation type
 */
const Register = ({ navigation}: any) => {

  return (
    <Box h="full" backgroundColor="#181920">
      <Box justifyContent="center" h="1/4">
        <Center>
          <Heading color="white" mb="2">Create new account</Heading>
          <Text color="gray.400">Please fill in the form to continue</Text>
        </Center>
      </Box>
      <Box mx="5">
        <FormControl isRequired>
          <VStack mb="1/6">
          <Box mb="4">
            <Input borderRadius="10" px="4" color="gray.100" placeholderTextColor="#f4f4f4" backgroundColor="#252a34" borderColor="#252a34" type="text" placeholder='Full Name' />
          </Box>
          <Box mb="4">
            <Input borderRadius="10" px="4" color="gray.100" placeholderTextColor="#f4f4f4" backgroundColor="#252a34" borderColor="#252a34" type="text" placeholder='Last Name' />
          </Box>
          <Box mb="4">
            <Input borderRadius="10" px="4" color="gray.100" placeholderTextColor="#f4f4f4" backgroundColor="#252a34" borderColor="#252a34" type="text" defaultValue='example@gmail.com' placeholder='Email' />
          </Box>
          <Box mb="4">
            <Input borderRadius="10" px="4" color="gray.100" placeholderTextColor="#f4f4f4" backgroundColor="#252a34" borderColor="#252a34" type="password" defaultValue='example@gmail.com' placeholder='Email' />
          </Box>
          </VStack>
          <Box>
            <Button onPress={() => navigation.navigate(SCREENS.BOTTOM_NAVIGATION)} backgroundColor="#5568fe" mb="4" borderRadius="10">Sign Up</Button>
            <Center>
              <HStack>
                <Text color="gray.100" mr="2">Have an account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate(SCREENS.LOGIN)}>
                  <Text color="#5568fe">Login</Text>
                </TouchableOpacity>
              </HStack>
            </Center>
          </Box>
        </FormControl>
      </Box>
    </Box>
  )
}

export default Register