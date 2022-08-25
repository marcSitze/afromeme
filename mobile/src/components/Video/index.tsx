import React, {useEffect} from 'react';
import {Pressable} from 'react-native';
import VideoComponent from 'react-native-video';
import { Button, Text } from 'native-base'

type PropTypes = {
  link: string;
  isMuted: boolean;
};
const Video = ({link, isMuted}: PropTypes) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  console.log('Link: ', link);


  return (
    <>
      {/* <Pressable onPress={() => {
        console.log('Set pause')
         setIsPlaying(!isPlaying)
      }} style={{position: 'absolute', right: 10, bottom: 10 }}>
        <Text bg={'pink.500'}>replay</Text>
      </Pressable> */}
      <Button onPress={() => {
        console.log('Set pause')
         setIsPlaying(!isPlaying)
      }}
      zIndex={10}
      >replay</Button>
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
    </>
  );
};

export default Video;
