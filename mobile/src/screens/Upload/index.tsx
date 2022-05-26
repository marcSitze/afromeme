import React, {useState} from 'react';
import {View, Modal, Animated, TouchableOpacity, Alert, Image} from 'react-native';
import {Box, Button, FormControl, HStack, Input, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import DocumentPicker from 'react-native-document-picker';

import colors from '../../constants/colors';

import styles from './styles';
import {height} from '../../constants/layout';

/**
 *
 * @add react native image picker for image selection
 */

const Upload = () => {
  const [picture, setPicture] = useState<any>(null);

  const pickImage = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      setPicture(res.uri);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  console.log('picture: ', picture);
  return (
    <>
      {!picture ? (
        <Box flex={1} px={3}>
          <Text textAlign={'center'} fontWeight={'bold'} fontSize={22} my={3}>
            Create and publish a post
          </Text>
          <TouchableOpacity
            onPress={pickImage}
            style={[
              styles.touchable,
              {height: height / 2.2, marginBottom: 20},
            ]}>
            <Box justifyContent={'center'} alignItems={'center'}>
              <Icon
                name="camera"
                size={72}
                color={colors.light.primary || 'blue'}
              />
              <Text>Click here to choose an image</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => Alert.alert('Coming soon...')}>
            <Box justifyContent={'center'} alignItems={'center'} height={'1/3'}>
              <IconFA5
                name="pen"
                size={52}
                color={colors.light.primary || 'blue'}
              />
              <Text>Click here to write article</Text>
              <Text>Coming soon...</Text>
            </Box>
          </TouchableOpacity>
        </Box>
      ) : (
        <Modal animationType='slide'>
          <Box flex={1} p={5}>
          <Text>Post preview</Text>
          <Image source={{ uri: picture}} style={{height: 300}} />
          <FormControl my={5}>
          <Input placeholder='Add a post legend' mb={3} />
          <Input placeholder='#hashtags' />
          </FormControl>
          <HStack justifyContent={'space-between'}>
            <Button w={'1/3'} bg={'red.500'} onPress={() => setPicture('')}>Cancel</Button>
            <Button w={'1/3'} onPress={() => Alert.alert('Post Created')}>Post</Button>
          </HStack>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default Upload;
