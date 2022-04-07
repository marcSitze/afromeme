import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Box} from 'native-base';

import BaseWrapper from '../../components/Layout/BaseWrapper';
import Post from '../../components/Post';
import Profile from '../../components/Profile';
import * as data from '../../helpers/defaultData';

const Home = () => {
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
      {data.posts.map((post, index) => <Post key={index} post={post} />)}
      </ScrollView>
    </BaseWrapper>
  );
};

export default Home;
