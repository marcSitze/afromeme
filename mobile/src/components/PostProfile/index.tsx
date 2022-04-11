import React from 'react'
import { Box } from 'native-base';
import { Image } from 'react-native';
import img from '../../assets/images/meme1.jpg';
import { width, height } from '../../constants/layout';
import { PropTypes } from './PropTypes';

const PostProfile = ({ media }: PropTypes) => {
  return (
    <Box width={(width / 3) - 10} height={height / 6}>
      <Image style={{ width: '100%', height: '100%'}} source={img} />
    </Box>
  )
}

export default PostProfile