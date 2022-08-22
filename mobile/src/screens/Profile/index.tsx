import React, {useState} from 'react';
import {Image, Pressable} from 'react-native';
import {
  Box,
  Text,
  HStack,
  VStack,
  Container,
  Button,
  Heading,
} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {connect, useDispatch} from 'react-redux';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import profile from '../../assets/images/profile.png';
import {width, height} from '../../constants/layout';
import BaseWrapper from '../../components/Layout/BaseWrapper';
import PostProfile from '../../components/PostProfile';
import PostsView from '../../components/PostsView';
import {profilePosts} from '../../helpers/defaultData';
import WhiteSpace from '../../components/Others/WhiteSpace';
import {PropsState} from '../../types';
import {IAccount} from '../../types/users';

import {logout} from '../../redux/auth/actions';
import colors from '../../constants/colors';
import { countLikes } from '../../helpers/helper'
import Gravatar from '../../components/Others/Gravatar';

type PropsType = {
  account: IAccount;
  bg: string;
};

const Profile = ({account, bg}: PropsType) => {
  const dispatch = useDispatch();
  const [showPosts, setShowPosts] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const formatText = (length: number, text: string) => {
    if (text.length > length) {
      return `${text.slice(0, length)}...`;
    }

    return `${text.slice(0, length)}`;
  };

  return (
    <BaseWrapper backArrowAction={() => {}} headerText="Profile">
      <ScrollView>
        <Box flex={1} py="4">
          <VStack flex={1} alignItems="center">
            <Box alignItems={'center'} height={'1/5'} width={'1/2'} mb={5}>
              {/* <Image
                style={{width: '100%', height: '100%', minHeight: 80}}
                resizeMode="contain"
                source={profile}
              /> */}
              <Gravatar username={account.user.username} size={70} />
            </Box>
            <Container mb={'4'}>
              <Text fontSize={16} textAlign="center" fontWeight={'bold'}>
                {`@${account?.user?.username ?? 'John Doe'}`}
              </Text>
            </Container>
            <HStack w={width * 0.8} justifyContent={'space-evenly'} mb="4">
              <Box alignItems={'center'}>
                <Text fontWeight={'bold'} fontSize="xl">
                  {account?.posts?.length ?? 10}
                </Text>
                <Text color={'gray.500'}>Posts</Text>
              </Box>
              {/* <Box alignItems={'center'}>
                <Text fontWeight={'bold'} fontSize="xl">
                  {account?.followers.length ?? 10}
                </Text>
                <Text color={'gray.500'}>Followers</Text>
              </Box> */}
              <Box alignItems={'center'}>
                <Text fontWeight={'bold'} fontSize="xl">
                  {countLikes(account.posts)}
                </Text>
                <Text color={'gray.500'}>Likes</Text>
              </Box>
            </HStack>
            <Box mb={'4'}>
              <HStack>
                <Button
                  borderColor={colors.light.gray}
                  borderWidth={1}
                  bg={colors.light.white}
                  px={width * 0.15}
                  mr={2}>
                  Edit profile
                </Button>
                <Button
                  bg={colors.light.white}
                  borderColor={colors.light.gray}
                  borderWidth={1}
                  _text={{color: colors.light.black}}
                  onPress={handleLogout}
                  _focus={{backgroundColor: 'red.500'}}>
                  <MaterialIcon name="logout" />
                </Button>
              </HStack>
            </Box>
            <Box width={width * 0.9} mb="4" alignItems={'center'}>
              <Text textAlign={'center'} fontSize={13} color={'#000'}>
                {formatText(
                  100,
                  'this is the bio text this is the bio text space this is the bio text space this is the bio text space',
                )}
              </Text>
            </Box>

            {/**
             * @add @posts here
             */}
          </VStack>
          <HStack mb={2} justifyContent={'space-evenly'}>
            <Pressable
              style={{flex: 1, width: '100%'}}
              onPress={() => setShowPosts(false)}>
              <Text
                borderBottomWidth={2}
                borderColor={
                  !showPosts ? colors.light.primary : colors.light.white
                }
                pb={2}
                w={'100%'}
                textAlign="center">
                Normal
              </Text>
            </Pressable>
            <Pressable
              style={{flex: 1, width: '100%'}}
              onPress={() => setShowPosts(true)}>
              <Text
                borderBottomWidth={2}
                borderColor={
                  showPosts ? colors.light.primary : colors.light.white
                }
                pb={2}
                w={'100%'}
                textAlign="center">
                grid
              </Text>
            </Pressable>
          </HStack>
          <Box flex={1} flexDirection="row" flexWrap={'wrap'}>
            {!showPosts &&
              account.posts.map(data => (
                <PostProfile
                  key={data._id}
                  post={data}
                  openPosts={() => setShowPosts(true)}
                />
              ))}
            {showPosts && <WhiteSpace height={height / 2} />}
            {showPosts && <PostsView posts={account.posts} />}
          </Box>
        </Box>
      </ScrollView>
    </BaseWrapper>
  );
};

const mapStateToProps = ({usersReducer}: PropsState) => ({
  account: usersReducer.account,
});
export default connect(mapStateToProps)(Profile);
