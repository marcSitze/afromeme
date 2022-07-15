import React from 'react';
import {View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {IPost} from '../../types/posts';
import Post from '../Post';

type PropTypes = {
  posts: IPost[];
};

const PostsView = ({posts}: PropTypes) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'red'}}>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </ScrollView>
  );
};

export default PostsView;
