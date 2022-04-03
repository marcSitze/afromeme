import React from 'react';
import {Image} from 'react-native';
import {Box, HStack, Text, VStack} from 'native-base';

import Camera from '../../assets/images/camera.svg';
import Picture from '../../assets/images/image.png';
import Profile from '../../assets/images/profile.png';
import BaseWrapper from '../Layout/BaseWrapper';
import {height} from '../../constants/layout';

type PostProps = {
  post: {
    author: {
      name: string;
    };
    media: string;
  };
};

const Post = ({post}: PostProps) => {
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
          <Image style={{width: 40, height: 40}} source={Profile} />
        </Box>
        <Text>{post.author.name || 'John Doe'}</Text>
      </HStack>
      <VStack>
        <Box width="full" mb={4}>
          <Image
            style={{width: '100%', height: height / 3}}
            source={Picture}
            // source={post.media ? {uri: post.media} : Picture}
          />
        </Box>
        <HStack width="full" justifyContent="space-around">
          <Text>Like({Math.round(Math.random() * 100)})</Text>
          <Text>comments({Math.round(Math.random() * 30)})</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Post;
