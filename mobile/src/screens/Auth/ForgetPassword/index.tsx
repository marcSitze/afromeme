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
import colors from '../../../constants/colors';

const ForgetPassword = ({ navigation, forgetPassword_msg, loading_forgetPass }: any) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
console.log('forgetPassword_msg: ', forgetPassword_msg);
console.log('email: ', email);
  return (
    <Box backgroundColor={colors.light.white} height="full">
      <Box px={2} justifyContent="flex-end" height="1/3" pb={5}>
        <Center>
          {/* <Heading color={colors.light.white} mb="2">
            Welcome Back
          </Heading> */}
          <Text color={colors.light.black} fontSize={'2xl'} mb={2}>Forgot your password?</Text>
          <Text textAlign={'center'}>
            Enter your email address and we will send you instructions to reset your password.
          </Text>
        </Center>
      </Box>
      <Box mx="10">
        {forgetPassword_msg.length > 0 && <Text bg={'red.400'} color={'red.500'}>{forgetPassword_msg}</Text>}
        <FormControl isRequired>
          <Stack>
            <Box mb="4">
              <Input
                onChangeText={text => setEmail(text)}
                value={email}
                borderRadius="10"
                px="4"
                py="3"
                shadow={'0'}
                color={colors.light.black}
                placeholderTextColor={colors.light.gray}
                backgroundColor={colors.light.gray__0}
                borderColor={colors.light.lightGray}
                type="text"
                placeholder="Email"
              />
            </Box>
          </Stack>
          <Box alignItems="center" mb="4">
            <Button
            _text={{ fontWeight: 'bold'}}
              onPress={() => {
                console.log('pressed');
                dispatch(forgetPassword(email))
              }}
              py="4"
              mb="4"
              shadow={3}
              borderRadius="10"
              backgroundColor={colors.light.primary}
              w="full"
              isLoading={loading_forgetPass}
            >
              Continue
            </Button>
          </Box>
          <Center>
            <HStack>
              <Text color={colors.light.gray} mr="2">
                go back ?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(LOGIN);
                }}>
                <Text color={colors.light.primary} fontWeight={'bold'}>Sign In</Text>
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
