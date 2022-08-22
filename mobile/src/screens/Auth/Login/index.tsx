import React, {useState} from 'react';
import {TouchableOpacity, Image} from 'react-native';
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
  HStack,
} from 'native-base';
import {connect, useDispatch} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as SCREENS from '../../../constants/screens';
import Camera from '../../../assets/images/camera.svg';
import {LoginDto} from '../../../types/auth';
import {login} from '../../../redux/auth/actions';
import {PropsState} from '../../../types';
import * as types from '../../../redux/auth/types';
import colors from '../../../constants/colors';
import Logo from '../../../assets/images/logo.png';

/**
 *
 * @todo add navigation type
 */

const Login = ({navigation, logging, logging_message}: any) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState<LoginDto>({
    email: 'test@gmail.com',
    password: '123456',
  });
  const [show, setShow] = useState(false);


  return (
    <Box backgroundColor={colors.light.white} height="full">
      <Box justifyContent="flex-end" height="1/3">
        <Center>
          {/* <Heading color="white" mb="2">
            Welcome Back
          </Heading> */}
          <Image source={Logo} style={{width: 100, height: 100, marginBottom: 10}} resizeMode='contain' />
          <Text color={colors.light.black} fontWeight={'bold'} fontSize={'3xl'}>
            Login into your account
          </Text>
        </Center>
      </Box>
      <Box mx="10">
        {Array.isArray(logging_message) && logging_message.length > 0 ? (
          logging_message.map((data, i) => (
            <Text bg={'red.400'} color={'red.500'} key={i}>
              {data.msg}
            </Text>
          ))
        ) : (
          <Text color={'red.500'}>{logging_message}</Text>
        )}
        <FormControl isRequired>
          <Stack mb="1/6">
            <Box mb="4">
              <Input
                onChangeText={text => setForm({...form, email: text})}
                value={form.email}
                borderRadius="10"
                px="4"
                py="3"
                shadow={'0'}
                color={colors.light.black}
                placeholderTextColor={colors.light.gray}
                backgroundColor={colors.light.gray__0}
                borderColor={colors.light.lightGray}
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
              <HStack alignItems={'center'}>
              <Input
                onChangeText={text => setForm({...form, password: text})}
                value={form.password}
                borderRadius="10"
                px="4"
                py="3"
                shadow={'0'}
                color={colors.light.black}
                placeholderTextColor={colors.light.gray}
                backgroundColor={colors.light.gray__0}
                borderColor={colors.light.lightGray}
                type={show ? "text": "password"}
                placeholder="password"
                flex={1}
              />
              <TouchableOpacity onPress={() => setShow(!show)} style={{ position: 'absolute', right: 10}}>
              <MaterialIcons size={20} name={show ? 'visibility' : 'visibility-off'}
                      />
              </TouchableOpacity>
              </HStack>

              {/* <FormControl.HelperText>is required</FormControl.HelperText> */}
              <Box alignItems="flex-end">
                <Text fontSize="xs" color={colors.light.gray}>
                  reveal password
                </Text>
              </Box>
            </Box>
          </Stack>
          <Box alignItems="center" mb="4">
            <Button
              onPress={() => {
                // navigation.navigate(SCREENS.BOTTOM_NAVIGATION)
                // navigation.navigate(SCREENS.BOTTOM_NAVIGATION)
                dispatch(login(form));
                // dispatch({ type: types.LOGIN_USER_REQUEST});
                // dispatch({ type: "GET_POSTS_REQUEST", payload: form});
                // loginService(form).then(data => data?.json()).then(data => console.log('lData: ', data)).catch(err => console.error('some Err: ', err));
              }}
              py="4"
              mb="4"
              borderRadius="10"
              backgroundColor={colors.light.primary}
              w="full"
              _text={{fontWeight: 'bold'}}
              isLoading={logging}
              shadow={3}
            >
              Sign In
            </Button>
            <TouchableOpacity onPress={() => navigation.navigate(SCREENS.FORGET_PASSWORD)}>
              <Text py="4"
              borderRadius="10" color={colors.light.gray}>Forgot password?</Text>
            </TouchableOpacity>
          </Box>
          <Center>
            <HStack>
              <Text color={colors.light.gray} mr="2">
                Don't have an account yet ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(SCREENS.REGISTER);
                  // dispatch(login(form));
                }}>
                <Text color={colors.light.primary} fontWeight={'bold'}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </HStack>
          </Center>
        </FormControl>
      </Box>
    </Box>
  );
};

const mapStateToProps = ({authReducer}: PropsState) => ({
  logging: authReducer.logging,
  logging_message: authReducer.logging_error,
});
export default connect(mapStateToProps)(Login);
