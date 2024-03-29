import React, { useState} from 'react';
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

import profile from '../../assets/images/profile.png';
import {width, height} from '../../constants/layout';
import BaseWrapper from '../../components/Layout/BaseWrapper';
import PostProfile from '../../components/PostProfile';
import {profilePosts} from '../../helpers/defaultData';
import WhiteSpace from '../../components/Others/WhiteSpace';
import {PropsState} from '../../types';
import {IAccount} from '../../types/users';
import { clearViewProfile} from '../../redux/users/actions'
import { countLikes } from '../../helpers/helper';
import Gravatar from '../../components/Others/Gravatar'
import PostsView from '../../components/PostsView'
import colors from '../../constants/colors'

type PropTypes = {
  view_profile: IAccount;
  view_profile_msg: string;
  view_profile_loading: Boolean;
};
const ViewProfile = ({
  view_profile,
  view_profile_msg,
  view_profile_loading,
}: PropTypes) => {

  const dispatch = useDispatch();
  const [showPosts, setShowPosts] = useState(false);


  return (
    <BaseWrapper backArrowAction={() => {
      dispatch(clearViewProfile())
    }} backArrow={true} headerText={view_profile?.user?.username}>
      <ScrollView style={{paddingHorizontal: 5}}>
        <Box flex={1} py="4">
          <HStack flex={1} alignItems="center" justifyContent={'space-evenly'}>
            <Box alignItems={'center'}>
              <Box width={100} height={100}>
                {/* <Image
                  style={{width: '100%', height: '100%', minHeight: 80}}
                  resizeMode="contain"
                  source={profile}
                /> */}
                <Gravatar username={view_profile.user?.username} />
              </Box>
            </Box>
            <Box alignItems={'center'}>
              {/* <Text>{JSON.stringify(view_profile)}</Text> */}
              <Text fontWeight={'bold'} fontSize="xl">
                {view_profile?.posts?.length > 0 ? view_profile.posts.length: 0}
              </Text>
              <Text color={'gray.500'}>Posts</Text>
            </Box>
            {/* <Box alignItems={'center'}>
              <Text fontWeight={'bold'} fontSize="xl">
                {view_profile?.followers?.length > 0 ? view_profile?.followers?.length: 0}
              </Text>
              <Text color={'gray.500'}>Followers</Text>
            </Box> */}
            <Box alignItems={'center'}>
              <Text fontWeight={'bold'} fontSize="xl">
                {countLikes(view_profile.posts)}
              </Text>
              <Text color={'gray.500'}>Likes</Text>
            </Box>

            {/**
             * @add @posts here
             */}
          </HStack>
          <Text fontSize={'lg'} fontWeight={'bold'} ml={7}>
            {view_profile?.user?.username}
          </Text>
          <WhiteSpace height={10} />
          {/* <Button mb={4}>Follow</Button> */}
          {/* <Box flex={1} flexDirection="row" flexWrap={'wrap'}>
            {view_profile?.posts?.map((data, i) => (
              <PostProfile openPosts={() => {}} key={i} post={data} />
            ))}
            <WhiteSpace height={height / 2} />
          </Box> */}
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
              view_profile?.posts.map(data => (
                <PostProfile
                  key={data._id}
                  post={data}
                  openPosts={() => setShowPosts(true)}
                />
              ))}
            {showPosts && <WhiteSpace height={height / 2} />}
            {showPosts && <PostsView posts={view_profile.posts} />}
          </Box>
        </Box>
      </ScrollView>
    </BaseWrapper>
  );
};

const mapStateToProps = ({usersReducer}: PropsState) => ({
  view_profile: usersReducer.view_profile,
  view_profile_loading: usersReducer.view_profile_loading,
  view_profile_msg: usersReducer.view_profile_msg,
});

export default connect(mapStateToProps)(ViewProfile);
