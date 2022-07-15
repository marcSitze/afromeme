import React, {useState} from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {Box, HStack, Text, VStack} from 'native-base';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {connect, useDispatch} from 'react-redux';

import Camera from '../../assets/images/camera.svg';
// import Picture from '../../assets/images/image.png';
import Picture from '../../assets/images/meme1.jpg';
import Profile from '../../assets/images/profile.png';
import BaseWrapper from '../Layout/BaseWrapper';
import {height} from '../../constants/layout';
import * as SCREENS from '../../constants/screens';
import {IPost} from '../../types/posts';
import config from '../../config';
import {PropsState} from '../../types';
import {IAccount} from '../../types/users';
import {likePost} from '../../redux/posts/actions';
import Comments from '../Comments';
import {getComments} from '../../redux/comments/actions';
import {IComment} from '../../types/comments';
import { viewProfile } from '../../redux/users/actions';
import colors from '../../constants/colors';

type PostProps = {
  post: IPost;
  liking: Boolean;
  liking_msg: string;
  account: IAccount;
  comments: IComment[];
};

const Post = ({post, liking, liking_msg, account, comments}: PostProps) => {
  const dispatch = useDispatch();
  const hasliked = (data: Array<string>) => {
    const find = data.find(item => String(item) === String(account._id));
    if (find) {
      // console.log('findTrue: ', find)
      return true;
    }
    if (!find) {
      // console.log('findFalse: ', find)
      return false;
    }
  };
  const [onShow, setOnShow] = useState(false);
  const [showAnim, setShowAnim] = useState(true);
  const [toggleLike, setToggleLike] = useState(hasliked(post.likes));
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);
  const [commentsNum, setCommentsNum] = useState<any>(post.comments);

  const navigation: any = useNavigation();
  const changeScreen = () => {
    dispatch(viewProfile(post.author._id))
    console.log('post.author._id: ', post.author._id);
    navigation.navigate(SCREENS.VIEW_PROFILE);
  };

  const handleToggleLike = () => {
    if (!hasliked(post.likes)) {
      setLikes([...likes, new Date().getTime()]);
      setToggleLike(true);
    }
    if(hasliked(post.likes)) {
      let newLikes = [...likes];
      newLikes.pop();
      setLikes(newLikes);
      setToggleLike(false);
    }
  };

  return (
    <Box
      width="100%"
      bg="white"
      borderWidth={1}
      borderColor="coolGray.100"
      borderRadius={6}
      p={4}
      mb="4">
      <Comments
        post={post}
        visible={showComments}
        onClose={() => {
          setShowComments(false);
        }}
        hasCommented={(data: boolean) => {
          if (data) setCommentsNum([...comments, new Date().getTime()]);
        }}
      />
      <HStack alignItems={'center'} mb="4">
        <Box bg={'blue.500'} borderRadius={20} mr={2}>
          {/* <Camera width={30} height={30} /> */}
          <TouchableOpacity onPress={changeScreen}>
            <Image style={{width: 40, height: 40}} source={Profile} />
          </TouchableOpacity>
        </Box>
        <TouchableOpacity onPress={changeScreen}>
          <VStack>
            <Text>{post?.author?.user?.username || 'John Doe'}</Text>
            <Text fontSize={10} color={'gray.500'}>
              {'yesterday at 20:30'}
            </Text>
          </VStack>
        </TouchableOpacity>
      </HStack>
      <VStack>
        <Box width="full" mb="3" bg={'gray.100'} height={height / 2.4}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={
              post?.media
                ? {uri: config.API + '/api/media/' + post.media}
                : Picture
            }
            resizeMode="contain"
            // source={post.media ? {uri: post.media} : Picture}
          />
        </Box>
        <HStack width="full" justifyContent="space-around">
          <HStack alignItems={'center'}>
            {/* <LottieView style={{width: 50, height: 50}} source={require('../../assets/lottie/like.json')} autoPlay /> */}
            <TouchableOpacity
              onPress={() => {
                setOnShow(!onShow);
                setTimeout(() => {
                  setShowAnim(false);
                }, 1000);
                console.log('post.id: ', post._id);
                dispatch(likePost({post: post._id}));
                handleToggleLike();
              }}>
              {toggleLike ? (
                <Icon name="heart" color={'red'} size={16} />
              ) : (
                <Icon name="heart-o" color={'#000'} size={16} />
              )}
            </TouchableOpacity>
            <Text ml={2}>
              {likes.length}
            </Text>
          </HStack>
          <TouchableOpacity
            onPress={() => {
              setShowComments(true);
              dispatch(getComments(post._id));
            }}>
            <HStack alignItems={'center'}>
            <Icon name='comments' size={18} />
            <TextInput
              editable={false}
              style={{color: colors.light.black}}
              value={` ${commentsNum.length}`}
              onPressIn={() => setShowComments(true)}
            />
            </HStack>
            {/* <Text>comments({post.comments.length})</Text> */}
          </TouchableOpacity>
        </HStack>
      </VStack>
    </Box>
  );
};

const mapStateToProps = ({
  postsReducer,
  usersReducer,
  commentsReducer,
}: PropsState) => ({
  liking: postsReducer.liking,
  liking_msg: postsReducer.liking_msg,
  account: usersReducer.account,
  comments: commentsReducer.comments,
});

export default connect(mapStateToProps)(Post);
