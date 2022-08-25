import React from 'react'
import { Box } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';
import img from '../../assets/images/meme1.jpg';
import { width, height } from '../../constants/layout';
import { PropTypes } from './PropTypes';
import config from '../../config';

const PostProfile = ({ post, openPosts }: PropTypes) => {
  return (
    <Box width={(width / 3) - 10} height={height / 6} borderWidth={2} borderColor={'white'}>
      <TouchableOpacity onPress={() => openPosts()}>
        <Image style={{ width: '100%', height: '100%'}} source={{ uri: config.API + '/api/media/' + post.media._id}} />
      </TouchableOpacity>
    </Box>
  )
}

export default PostProfile