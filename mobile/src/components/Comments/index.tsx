import {
  Modal,
  Pressable,
  Keyboard,
  Image,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Box, Text, Button, Input, HStack} from 'native-base';
import {connect, useDispatch} from 'react-redux';

import {PropsState} from '../../types';
import {IPost} from '../../types/posts';
import {createComment, clearComments, getComments} from '../../redux/comments/actions';
import {IAccount} from '../../types/users';
import {IComment} from '../../types/comments';
import colors from '../../constants/colors';
import img from '../../assets/images/profile.png';

type PropTypes = {
  visible: boolean;
  onClose: Function;
  post: IPost;
  account: IAccount;
  creating_comment: boolean;
  comments: IComment[];
  loading_comments: boolean;
  hasCommented: Function;
};

const Comments = ({
  visible,
  onClose,
  post,
  account,
  creating_comment,
  loading_comments,
  comments,
  hasCommented,
}: PropTypes) => {
  const dispatch = useDispatch();
  const [keyboardStatus, setKeyboardStatus] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  useEffect(() => {
    // Keyboard
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus('Keyboard Shown');
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus('Keyboard Hidden');
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [visible]);

  return (
    <Modal animationType="slide" visible={visible}>
      <Box bg={'white'} flex={1} px={4}>
        {/* <Text>This is the comments section</Text> */}
        <HStack justifyContent={'space-between'} alignItems={'center'}>
        <Pressable onPress={() => {
          onClose()
          dispatch(clearComments());
          hasCommented(false)
          setComment('');
        }}>
          <Text fontSize={40}>
            &times;
          </Text>
        </Pressable>
        <Pressable onPress={() => {
              dispatch(
                createComment({
                  author: account._id,
                  post: post._id,
                  message: comment,
                }),
              );
              // dispatch(getComments(post._id));
              setComment('');
              hasCommented(true);
              onClose();
            }}>
          <Text bg={colors.light.primary} borderRadius={20} p={2} color={colors.light.white} fontWeight={'semibold'}>
            Comment
          </Text>
        </Pressable>
        </HStack>
        <View style={style.container}>
          <Input
            width={'full'}
            style={style.input}
            placeholder="Click here…"
            autoFocus
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={text => setComment(text)}
            value={comment}
          />
          {loading_comments && (
            <ActivityIndicator size={'large'} color="blue" />
          )}
          <Box flex={1} mt={5}>
            {comments.map((item, i) => (
                <HStack key={i} alignItems={'center'} borderBottomWidth={1} borderColor={'gray.200'} mb={2} pb={2}>
                  <Image source={img} style={{width: 30, height: 30}} resizeMode={'contain'} />
                  <Text ml={2}>{item.message}</Text>
                </HStack>
            ))}
          </Box>
        </View>
      </Box>
    </Modal>
  );
};

const mapStateToProps = ({usersReducer, commentsReducer}: PropsState) => ({
  account: usersReducer.account,
  creating_comment: commentsReducer.creating_comment,
  comments: commentsReducer.comments,
  loading_comments: commentsReducer.loading_comments,
});
export default connect(mapStateToProps)(Comments);

const style = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 36,
  },
  input: {
    padding: 10,
    borderWidth: 0.5,
    borderRadius: 4,
    color: '#000',
    backgroundColor: 'red',
    height: 40,
  },
  status: {
    padding: 10,
    textAlign: 'center',
    color: 'red',
  },
});
