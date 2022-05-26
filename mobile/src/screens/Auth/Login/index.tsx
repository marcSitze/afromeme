import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Box,
  Container,
  Heading,
  FormControl,
  Stack,
  Input,
  Center,
  Text,
  Button,
  Icon,
  Image,
  HStack,
} from 'native-base';
import { connect, useDispatch } from 'react-redux';

import * as SCREENS from '../../../constants/screens';
import Camera from '../../../assets/images/camera.svg';
import {LoginDto} from '../../../types/auth';
import { login } from '../../../redux/auth/actions';
import { PropsState } from '../../../types';
import * as types from '../../../redux/auth/types';

/**
 *
 * @todo add navigation type
 */

const Login = ({navigation, logging }: any) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState<LoginDto>({
    email: 'test@gmail.com',
    password: '123456',
  });
console.log('logging: ', logging)
  console.log('form: ', form);
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
        <FormControl isRequired>
          <Stack mb="1/6">
            <Box mb="4">
              <Input
                onChangeText={text => setForm({...form, email: text})}
                value={form.email}
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
            <Box>
              <Input
                onChangeText={text => setForm({...form, password: text})}
                value={form.password}
                borderRadius="10"
                px="4"
                color="gray.100"
                placeholderTextColor="#f4f4f4"
                backgroundColor="#252a34"
                borderColor="#252a34"
                type="password"
                defaultValue="12345"
                placeholder="password"
              />
              {/* <FormControl.HelperText>is required</FormControl.HelperText> */}
              <Box alignItems="flex-end">
                <Text fontSize="xs" color="gray.400">
                  you should fill this input
                </Text>
              </Box>
            </Box>
          </Stack>
          <Box alignItems="center" mb="4">
            <Button
              onPress={() => {
                // navigation.navigate(SCREENS.BOTTOM_NAVIGATION)
                console.log('pressed')
                // navigation.navigate(SCREENS.BOTTOM_NAVIGATION)
                dispatch(login(form));
                // dispatch({ type: types.LOGIN_USER_REQUEST});
                // dispatch({ type: "GET_POSTS_REQUEST", payload: form});
                // loginService(form).then(data => data?.json()).then(data => console.log('lData: ', data)).catch(err => console.error('some Err: ', err));
              }}
              py="4"
              mb="4"
              borderRadius="10"
              backgroundColor="#5568fe"
              w="full">
              Sign In
            </Button>
            <Button
              py="4"
              borderRadius="10"
              bg="white"
              w="full"
              leftIcon={<Camera width={20} height={20} />}>
              Sign In with Google
            </Button>
          </Box>
          <Center>
            <HStack>
              <Text color="gray.100" mr="2">
                Don't have an account yet ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  // navigation.navigate(SCREENS.REGISTER)
                  dispatch(login(form));
                }}>
                <Text color="#5568fe">Sign Up</Text>
              </TouchableOpacity>
            </HStack>
          </Center>
        </FormControl>
      </Box>
    </Box>
  );
};

const mapStateToProps = ({ authReducer }: PropsState) => ({
  logging: authReducer.logging_error
})
export default connect(mapStateToProps)(Login);
