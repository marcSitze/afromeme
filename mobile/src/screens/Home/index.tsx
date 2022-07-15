import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {ActivityIndicator, RefreshControl} from 'react-native';
import {Box} from 'native-base';
import {connect, useDispatch} from 'react-redux';

import BaseWrapper from '../../components/Layout/BaseWrapper';
import Post from '../../components/Post';
import Profile from '../../components/Profile';
import * as data from '../../helpers/defaultData';
import {PropsState} from '../../types';
import {IPost} from '../../types/posts';
import {getPosts} from '../../redux/posts/actions';

type PropTypes = {
  posts: IPost[];
  loading: Boolean;
};
const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = ({posts, loading}: PropTypes) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  // console.log('posts: ', posts);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(300).then(() => setRefreshing(false));
  }, []);

  return (
    <BaseWrapper backArrowAction={() => {}}>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Box mb={4}>
          <ScrollView horizontal={true}>
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
            <Profile />
          </ScrollView>
        </Box>
        {loading && <ActivityIndicator />}
        <ScrollView>
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </ScrollView>
      </ScrollView>
    </BaseWrapper>
  );
};

const mapStateToProps = ({postsReducer}: PropsState) => ({
  posts: postsReducer.posts,
  loading: postsReducer.loading,
});

export default connect(mapStateToProps)(Home);
