import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Box,
  Center,
  Container,
  Heading,
  Text,
  FormControl,
  Input,
  VStack,
  HStack,
  Button,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { connect, useDispatch } from 'react-redux';

import * as SCREENS from '../../../constants/screens';
import { PropsState } from '../../../types';
import { RegisterDto } from '../../../types/auth';
import { register } from '../../../redux/auth/actions';
import colors from '../../../constants/colors'
/**
 *
 * @todo add navigation type
 */

type PropTypes = {
  navigation: any;
  registering: boolean;
  registering_message: string | void;
}
const Register = ({navigation, registering, registering_message = ''}: any) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState<RegisterDto>({
    username: '',
    email: '',
    phone: '',
    password: '',
  });

  return (
    <Box h="full" backgroundColor={colors.light.white}>
      <Box justifyContent="center" h="1/4">
        <Center>
          <Heading color={colors.light.white} mb="2">
            Create new account
          </Heading>
          <Text color={colors.light.black} fontSize={'3xl'} fontWeight={'bold'}>Let's get started!</Text>
          <Text color={colors.light.gray}>create an account to start browsing</Text>
        </Center>
      </Box>
      <Box mx="5">
        {Array.isArray(registering_message) && registering_message.length > 0 ? registering_message.map((data, i) => <Text bg={'red.400'} color={'red.500'} key={i}>{data.msg}</Text>): <Text color={'red.500'} >{registering_message}</Text>}
        <FormControl isRequired>
          <VStack mb="1/6">
            <Box mb="4">
              <Input
                borderRadius="10"
                value={form.username}
                onChangeText={(text) => setForm({...form, username: text})}
                px="4"
                py="3"
                color={colors.light.black}
                placeholderTextColor={colors.light.gray}
                backgroundColor={colors.light.gray__0}
                borderColor={colors.light.lightGray}
                type="text"
                shadow={'0'}
                placeholder="Username"
              />
            </Box>
            <Box mb="4">
              <Input
                borderRadius="10"
                value={form.email}
                onChangeText={(text) => setForm({...form, email: text})}
                px="4"
                py="3"
                color={colors.light.black}
                placeholderTextColor={colors.light.gray}
                backgroundColor={colors.light.gray__0}
                borderColor={colors.light.lightGray}
                type="text"
                shadow={'0'}
                placeholder="Email"
              />
            </Box>
            <Box mb="4">
              <Input
                borderRadius="10"
                px="4"
                py="3"
                value={form.phone}
                onChangeText={(text) => setForm({...form, phone: text})}
                color={colors.light.black}
                placeholderTextColor={colors.light.gray}
                backgroundColor={colors.light.gray__0}
                borderColor={colors.light.lightGray}
                shadow={'0'}
                type="text"
                // defaultValue="example@gmail.com"
                placeholder="Phone"
              />
            </Box>
            <Box mb="4">
              <Input
                borderRadius="10"
                px="4"
                py="3"
                value={form.password}
                onChangeText={(text) => setForm({...form, password: text})}
                color={colors.light.black}
                placeholderTextColor={colors.light.gray}
                backgroundColor={colors.light.gray__0}
                borderColor={colors.light.lightGray}
                shadow={'0'}
                type="password"
                // defaultValue="example@gmail.com"
                placeholder="Password"
              />
            </Box>
          </VStack>
          <Box>
            <Button
              _text={{padding: 2, fontWeight: 'bold'}}
              shadow={3}
              isLoading={registering}
              onPress={() => {
                dispatch(register(form))
              }}
              backgroundColor={colors.light.primary}
              mb="4"
              borderRadius="10">
              Sign Up
            </Button>
            <Center>
              <HStack>
                <Text color={colors.light.black} mr="2">
                  Already have an account?{' '}
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(SCREENS.LOGIN)}>
                  <Text color={colors.light.primary} fontWeight={'bold'}>Login</Text>
                </TouchableOpacity>
              </HStack>
            </Center>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

const mapStateToProps = ({ authReducer }: PropsState) => ({
  registering: authReducer.registering,
  registering_message: authReducer.registering_message,
});

export default connect(mapStateToProps)(Register);
