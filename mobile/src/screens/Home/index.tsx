import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {ActivityIndicator, RefreshControl, View, Button} from 'react-native';
import {Box} from 'native-base';
import {connect, useDispatch} from 'react-redux';
// import Video from 'react-native-video'

import BaseWrapper from '../../components/Layout/BaseWrapper';
import Post from '../../components/Post';
import Profile from '../../components/Profile';
import Video from '../../components/Video';

import * as data from '../../helpers/defaultData';
import {PropsState} from '../../types';
import {IPost} from '../../types/posts';
import {IAccount} from '../../types/users';
import {getPosts} from '../../redux/posts/actions';
import {getUsersAccounts} from '../../redux/users/actions';
import {sortAccounts} from '../../helpers/helper';
import config from '../../config';
import { height, width } from '../../constants/layout';

type PropTypes = {
  posts: IPost[];
  loading: Boolean;
  accounts: IAccount[];
};
const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = ({posts, loading, accounts}: PropTypes) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsersAccounts());
  }, []);
  // console.log('posts: ', posts);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(300).then(() => setRefreshing(false));
  }, []);

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);

  return (
    <BaseWrapper backArrowAction={() => {}}>
      <ScrollView>
        <Box mb={4}>
          <ScrollView horizontal={true}>
            {/* <Profile account={{_id: '', followers: [], posts: [], user: {}}} /> */}
            {sortAccounts(accounts).map((account: IAccount, key: number) => (
              <Profile key={key} account={account} />
            ))}
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

const mapStateToProps = ({postsReducer, usersReducer}: PropsState) => ({
  posts: postsReducer.posts,
  loading: postsReducer.loading,
  accounts: usersReducer.accounts,
});

export default connect(mapStateToProps)(Home);
