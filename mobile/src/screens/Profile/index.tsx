import React from 'react';
import {Image} from 'react-native';
import {Box, Text, HStack, VStack, Container, Button, Heading} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { connect, useDispatch } from 'react-redux';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import profile from '../../assets/images/profile.png';
import { width, height } from '../../constants/layout';
import BaseWrapper from '../../components/Layout/BaseWrapper';
import PostProfile from '../../components/PostProfile';
import { profilePosts } from '../../helpers/defaultData';
import WhiteSpace from '../../components/Others/WhiteSpace';
import { PropsState } from '../../types';
import { IAccount } from '../../types/users';

import { logout } from '../../redux/auth/actions';

type PropsType = {
  account: IAccount
}

const Profile = ({ account }: PropsType) => {
  const dispatch = useDispatch();

  console.log('account: ', account);
  const handleLogout = () => {
    dispatch(logout());
  }
  return (
    <BaseWrapper headerText='Profile'>
      <ScrollView>
    <Box flex={1} py='4'>
      <VStack flex={1} alignItems="center">
        <Box alignItems={'center'} height={'1/5'} width={'1/2'} mb={5}>
          <Image
            style={{width: '100%', height: '100%', minHeight: 80}}
            resizeMode="contain"
            source={profile}
          />
        </Box>
        <Container mb={'4'}>
          <Text fontSize={'lg'} textAlign='center' fontWeight={'bold'}>
            {account?.user?.username ?? "John Doe"}
          </Text>
        </Container>
        <HStack w={width * 0.80} justifyContent={'space-evenly'} mb='4'>
          <Box alignItems={'center'}>
            <Text fontWeight={'bold'} fontSize='xl'>{account?.posts?.length ?? 10}</Text>
            <Text color={'gray.500'}>Posts</Text>
          </Box>
          <Box alignItems={'center'}>
          <Text fontWeight={'bold'} fontSize='xl'>{account?.followers.length?? 10}</Text>
            <Text color={'gray.500'}>Followers</Text>
          </Box>
          <Box alignItems={'center'}>
          <Text fontWeight={'bold'} fontSize='xl'>10</Text>
            <Text color={'gray.500'}>Following</Text>
          </Box>
        </HStack>
        <Box mb={'4'}>
          <HStack>
          <Button>Edit profile</Button>
          <Button bg={'red.500'} onPress={handleLogout}><MaterialIcon name='logout' /></Button>
          </HStack>
        </Box>
        <Text mb='4'>this is the bio text space</Text>

        {
          /**
           * @add @posts here
           */
        }
      </VStack>
        <Box flex={1} flexDirection='row' flexWrap={'wrap'}>
          {account.posts.map((data) => <PostProfile key={data._id} media={data.media}/>)}
          <WhiteSpace height={height / 2} />
        </Box>
    </Box>
    </ScrollView>
    </BaseWrapper>
  );
};

const mapStateToProps = ({ usersReducer }: PropsState) => ({
  account: usersReducer.account
})
export default connect(mapStateToProps)(Profile);
