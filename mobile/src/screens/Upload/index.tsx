import React, {useState, useEffect} from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import {View, Modal, Animated, TouchableOpacity, Image, ActivityIndicator} from 'react-native';
import {
  Box,
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  useToast,
} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import DocumentPicker from 'react-native-document-picker';
import {connect, useDispatch} from 'react-redux';

import colors from '../../constants/colors';

import styles from './styles';
import {height} from '../../constants/layout';
import {createPost} from '../../redux/posts/actions';
import {PropsState} from '../../types';
import {IAccount} from '../../types/users';
/**
 *
 * @add react native image picker for image selection
 */

type UploadType = {
  account: IAccount;
  creating: Boolean;
  creating_msg: string;
};

const Upload = ({account, creating, creating_msg}: any) => {
  const [picture, setPicture] = useState<any>(null);
  const [posting, setPosting] = useState(false);
  const [post, setPost] = useState({
    author: account._id,
    photo: picture,
    description: 'some description',
  });
  const [showAlert, setShowAlert] = useState(false);
  const [form, setForm] = useState({
    description: '',
    tags: '',
  });
  const [input, setInput] = useState<any>(undefined);
  const Toast = useToast();
  // const [post, setPost] = useState(false)

  const dispatch = useDispatch();

  const pickImage = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images, DocumentPicker.types.video],
      });
      setPicture(res);
      setInput(res);
      setPost({...post, photo: res});
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker, exit any dialogs or menus and move on
      } else {
        throw err;
      }
    }
  };

  // console.log('picture: ', picture);
  // console.log('accountUp: ', account)
  const [submit, setSubmit] = useState(false);
  useEffect(() => {}, [post, submit]);

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
              <Icon name="camera" size={40} color={colors.light.primary} />
              <Text>Click here to choose an image</Text>
            </Box>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => {
              setShowAlert(true);
            }}>
            <Box justifyContent={'center'} alignItems={'center'} height={'1/3'}>
              <IconFA5 name="pen" size={40} color={colors.light.primary} />
              <Text>Click here to write an article</Text>
              <Text>Coming soon...</Text>
            </Box>
          </TouchableOpacity>
        </Box>
      ) : (
        <Modal animationType="slide" transparent={creating}>
          {creating ? (
            <Box flex={1} bg={colors.light.whiteTrans} justifyContent={'center'} alignItems={'center'}>
            <Text fontSize={18} mb={5}>posting...</Text>
            <ActivityIndicator color={colors.light.primary} size={'large'} />
          </Box>
          ): (
            <Box flex={1} p={5}>
              <ScrollView>
            <Text fontSize={18}>Post preview</Text>
            <Image source={{uri: picture.uri}} style={{height: 300}} />
            <FormControl my={5}>
              <Input
                placeholder="Add a post legend"
                onChangeText={text => setForm({...form, description: text})}
                value={form.description}
                mb={3}
              />
              <Input
                placeholder="#hashtags"
                onChangeText={text => setForm({...form, tags: text})}
                value={form.tags}
              />
            </FormControl>
            <HStack justifyContent={'space-between'}>
              <Button w={'1/3'} bg={'red.500'} onPress={() => setPicture('')}>
                Cancel
              </Button>
              <Button
                w={'1/3'}
                bg={colors.light.primary}
                _text={{color: colors.light.white}}
                onPress={() => {
                  // Alert.alert('Post Created');
                  dispatch(
                    createPost({
                      author: account._id,
                      photo: picture,
                      description: form.description,
                      tags: form.tags,
                    }),
                  );
                  // setSubmit(!submit);
                }}>
                Post
              </Button>
            </HStack>
            </ScrollView>
          </Box>
          )}
        </Modal>
      )}
    </>
  );
};

const mapStateToProps = ({usersReducer, postsReducer}: PropsState) => ({
  account: usersReducer.account,
  creating: postsReducer.creating,
  creating_msg: postsReducer.creating_msg,
});

export default connect(mapStateToProps)(Upload);
