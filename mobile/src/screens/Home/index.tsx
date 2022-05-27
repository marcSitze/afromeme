import React, { useState, useEffect } from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Box} from 'native-base';
import { connect, useDispatch } from 'react-redux';

import BaseWrapper from '../../components/Layout/BaseWrapper';
import Post from '../../components/Post';
import Profile from '../../components/Profile';
import * as data from '../../helpers/defaultData';
import { PropsState } from '../../types';
import { IPost } from '../../types/posts';
import { getPosts } from '../../redux/posts/actions';

type PropTypes = {
  posts: IPost[]
};

const Home = ({ posts }: PropTypes) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  console.log('posts: ', posts);
  return (
    <BaseWrapper>
      <ScrollView>
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
      {posts.map((post, index) => <Post key={index} post={post} />)}
      </ScrollView>
    </BaseWrapper>
  );
};

const mapStateToProps = ({ postsReducer }: PropsState) => ({
  posts: postsReducer.posts,
});

export default connect(mapStateToProps)(Home);
