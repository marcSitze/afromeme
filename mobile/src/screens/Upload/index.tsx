import React, {useState, useEffect} from 'react';
import {View, Modal, Animated, TouchableOpacity, Alert, Image} from 'react-native';
import {Box, Button, FormControl, HStack, Input, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import DocumentPicker from 'react-native-document-picker';
import { connect, useDispatch } from 'react-redux';

import colors from '../../constants/colors';

import styles from './styles';
import {height} from '../../constants/layout';
import { createPost } from '../../redux/posts/actions';
import { PropsState } from '../../types';
import { IAccount } from '../../types/users';
/**
 *
 * @add react native image picker for image selection
 */

type UploadType = {
  account: IAccount,
}

const Upload = ({ account }: UploadType) => {
  const [picture, setPicture] = useState<any>(null);
  const [post, setPost] = useState({
    author: account._id,
    photo: picture,
    description: 'some description'
  });

  const [input, setInput] = useState<any>(undefined);
  // const [post, setPost] = useState(false)


  const dispatch = useDispatch();

  const pickImage = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      console.log('res: ', res);
      setPicture(res);
      setInput(res);
      setPost({ ...post, photo: res});
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  console.log('picture: ', picture);
  // console.log('accountUp: ', account)
const [submit, setSubmit] = useState(false);
  useEffect(() => {
    // var formdata = new FormData();
    // // formdata.append("photo", fileInput.files[0], "real-estate-6688945_1920.jpg");
    // formdata.append("photo", input);
    // formdata.append("author", "623ec37dd65ad319c55093cf");
    // formdata.append("name", "this is the name");
    // console.log('input: ', input)
    // var requestOptions: any = {
    //   method: 'POST',
    //   body: formdata,
    //   redirect: 'follow'
    // };

    // fetch("http://192.168.42.60:5000/api/media", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
  }, [post, submit])

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
          <Image source={{ uri: picture.uri}} style={{height: 300}} />
          <FormControl my={5}>
          <Input placeholder='Add a post legend' mb={3} />
          <Input placeholder='#hashtags' />
          </FormControl>
          <HStack justifyContent={'space-between'}>
            <Button w={'1/3'} bg={'red.500'} onPress={() => setPicture('')}>Cancel</Button>
            <Button w={'1/3'} onPress={() => {
              Alert.alert('Post Created')
              dispatch(createPost({author: account._id, photo: picture}));
              // setSubmit(!submit);
            }}>Post</Button>
          </HStack>
          </Box>
        </Modal>
      )}
    </>
  );
};

const mapStateToProps = ({ usersReducer }: PropsState) => ({
  account: usersReducer.account
})

export default connect(mapStateToProps)(Upload);
