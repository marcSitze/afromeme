import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Box,
  Center,
  Heading,
  Text,
  FormControl,
  Input,
  Stack,
  Button,
  HStack,
} from 'native-base';
import { connect, useDispatch } from 'react-redux';

import { LOGIN } from '../../../constants/screens';
import { forgetPassword } from '../../../redux/auth/actions';
import { PropsState } from '../../../types';

const ForgetPassword = ({ navigation, forgetPassword_msg, loading_forgetPass }: any) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
console.log('forgetPassword_msg: ', forgetPassword_msg);
console.log('email: ', email);
  return (
    <Box backgroundColor="#181920" height="full">
      <Box justifyContent="center" height="1/3">
        <Center>
          <Heading color="white" mb="2">
            Welcome Back
          </Heading>
          <Text color="gray.400">Please Login into your account</Text>
        </Center>
      </Box>
      <Box mx="10">
        {forgetPassword_msg.length > 0 && <Text bg={'red.400'} color={'red.500'}>{forgetPassword_msg}</Text>}
        <FormControl isRequired>
          <Stack mb="1/6">
            <Box mb="4">
              <Input
                onChangeText={text => setEmail(text)}
                value={email}
                borderRadius="10"
                px="4"
                color="gray.100"
                placeholderTextColor="#f4f4f4"
                backgroundColor="#252a34"
                borderColor="#252a34"
                type="text"
                defaultValue="example@gmail.com"
                placeholder="Email"
              />
              {/* <FormControl.HelperText>is Required</FormControl.HelperText> */}
              <FormControl.ErrorMessage>
                you should fill this input
              </FormControl.ErrorMessage>
            </Box>
          </Stack>
          <Box alignItems="center" mb="4">
            <Button
              onPress={() => {
                console.log('pressed');
                dispatch(forgetPassword(email))
              }}
              py="4"
              mb="4"
              borderRadius="10"
              backgroundColor="#5568fe"
              w="full"
              isLoading={loading_forgetPass}
            >
              Reset Password
            </Button>
          </Box>
          <Center>
            <HStack>
              <Text color="gray.100" mr="2">
                Don't have an account yet ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(LOGIN);
                }}>
                <Text color="#5568fe">Sign In</Text>
              </TouchableOpacity>
            </HStack>
          </Center>
        </FormControl>
      </Box>
    </Box>
  );
};

const mapStateToProps = ({ authReducer }: PropsState) => ({
  loading_forgetPass: authReducer.loading_forgetPass,
  forgetPassword_msg: authReducer.forgetPassword_msg
})
export default connect(mapStateToProps)(ForgetPassword);
