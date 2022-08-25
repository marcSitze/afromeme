import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import VideoComponent from 'react-native-video';
import {Box, Button, Text} from 'native-base';
import colors from '../../constants/colors';

type PropTypes = {
  link: string;
  isMuted: boolean;
};
const Video = ({link, isMuted}: PropTypes) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <TouchableOpacity
      style={{flex: 1}}
      onPress={() => {
        console.log('Set pause');
        setIsPlaying(!isPlaying);
      }}>
      {isPlaying ? (
        <VideoComponent
          source={{uri: link}}
          paused={!isPlaying}
          // controls={true}
          resizeMode="contain"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: '100%',
            height: '100%',
            // backgroundColor: 'green',
          }}
          muted={isMuted}
        />
      ) : (
        <Box flex={1} bg={colors.light.gray} justifyContent={'center'}>
          <Text fontSize={'lg'} fontWeight={'bold'} textAlign={'center'}>
            Tap To Play
          </Text>
        </Box>
      )}
    </TouchableOpacity>
  );
};

export default Video;
