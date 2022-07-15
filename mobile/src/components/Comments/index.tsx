import {
  Modal,
  Pressable,
  Keyboard,
  TextInput,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Box, Text, Button} from 'native-base';
import {connect, useDispatch} from 'react-redux';

import {PropsState} from '../../types';
import {IPost} from '../../types/posts';
import {createComment, clearComments, getComments} from '../../redux/comments/actions';
import {IAccount} from '../../types/users';
import {IComment} from '../../types/comments';

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
      <Box bg={'white'} flex={1}>
        <Text>This is the comments section</Text>
        <Pressable onPress={() => {
          onClose()
          dispatch(clearComments());
          hasCommented(false)
        }}>
          <Text bg="red.500" py={3}>
            close comments
          </Text>
        </Pressable>
        <View style={style.container}>
          <TextInput
            style={style.input}
            placeholder="Click here…"
            autoFocus
            onSubmitEditing={Keyboard.dismiss}
            onChangeText={text => setComment(text)}
            value={comment}
          />
          <Text style={style.status}>{keyboardStatus}</Text>
          <Button
            py={3}
            // bg={'red.500'}
            isLoading={creating_comment}
            h={10}
            color={'white'}
            _text={{color: 'white'}}
            onPress={() => {
              dispatch(
                createComment({
                  author: account._id,
                  post: post._id,
                  message: comment,
                }),
              );
              // dispatch(getComments(post._id));
              hasCommented(true);
              onClose();
            }}>
            comment
          </Button>
          {loading_comments && (
            <ActivityIndicator size={'large'} color="blue" />
          )}
          {comments.map((item, i) => (
            <View style={{backgroundColor: "green"}} key={i}>
              <Text bg={'blue.300'} h={10} mb={2}>{item.message}</Text>
            </View>
          ))}
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
    padding: 36,
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
