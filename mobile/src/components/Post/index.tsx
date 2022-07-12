import React, {useState} from 'react';
import {Image, TouchableOpacity, TouchableHighlight} from 'react-native';
import {Box, HStack, Text, VStack} from 'native-base';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import Camera from '../../assets/images/camera.svg';
// import Picture from '../../assets/images/image.png';
import Picture from '../../assets/images/meme1.jpg';
import Profile from '../../assets/images/profile.png';
import BaseWrapper from '../Layout/BaseWrapper';
import {height} from '../../constants/layout';
import * as SCREENS from '../../constants/screens';
import { IPost } from '../../types/posts';
import config from '../../config';

type PostProps = {
  post: IPost
};

const Post = ({post}: PostProps) => {
  const [onShow, setOnShow] = useState(false);
  const [showAnim, setShowAnim] = useState(true);
  const navigation: any = useNavigation();
  const changeScreen = () => {
    navigation.navigate(SCREENS.VIEW_PROFILE);
  };

  return (
    <Box
      width="100%"
      bg="white"
      borderWidth={1}
      borderColor="coolGray.100"
      borderRadius={6}
      p={4}
      mb="4">
      <HStack alignItems={'center'} mb="4">
        <Box bg={'blue.500'} borderRadius={20} mr={2}>
          {/* <Camera width={30} height={30} /> */}
          <TouchableOpacity onPress={changeScreen}>
            <Image style={{width: 40, height: 40}} source={Profile} />
          </TouchableOpacity>
        </Box>
        <TouchableOpacity onPress={changeScreen}>
          <VStack>
            <Text>{post.author.username || 'John Doe'}</Text>
            <Text fontSize={10} color={'gray.500'}>{'yesterday at 20:30'}</Text>
          </VStack>
        </TouchableOpacity>
      </HStack>
      <VStack>
        <Box width="full" mb='3' bg={'gray.100'} height={height / 2.4}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={post?.media ? { uri: config.API + '/api/media/' + post.media } : Picture}
            resizeMode="contain"
            // source={post.media ? {uri: post.media} : Picture}
          />
        </Box>
        <HStack width="full" justifyContent="space-around">
          <HStack alignItems={'center'}>
            {/* <LottieView style={{width: 50, height: 50}} source={require('../../assets/lottie/like.json')} autoPlay /> */}
            <TouchableOpacity
              onPress={() => {
                setOnShow(!onShow);
                setTimeout(() => {
                  setShowAnim(false);
                }, 1000);
              }}>
              {!onShow ? (
                <Icon name="heart-o" color={'#000'} size={16} />
              ) : (
                <Icon name="heart" color={'red'} size={16} />
              )}
            </TouchableOpacity>
            <Text ml={2}>{post.likes.length}</Text>
          </HStack>
          <Text>comments({post.comments.length})</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Post;
