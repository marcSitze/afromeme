import React, {useEffect} from 'react';
import {Text, Box, HStack, VStack, View} from 'native-base';
import {Image, TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {connect, useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

import Card from '../Card';
import WhiteSpace from '../Others/WhiteSpace';
import Gravatar from '../Others/Gravatar';
import {ISearchState} from '../../types/search';
import {PropsState} from '../../types';
import {IUser} from '../../types/users';
import {IPost} from '../../types/posts';
import {height, width} from '../../constants/layout';
import config from '../../config';
import Picture from '../../assets/images/meme1.jpg';
import Post from '../Post';

const Tab: any = createMaterialTopTabNavigator();

const Users = ({searching}: {searching: boolean}) => {
  const users: any = useSelector<PropsState>(
    state => state.searchReducer.searchData.users,
  );
  // console.log('Users: ', users);

  return (
    <ScrollView>
      {users.map((item: IUser, index: number) => (
        <HStack key={index} alignItems={'center'} mb={2}>
          <Gravatar username={item.username} size={60} />
          <VStack ml={4}>
            <Text>{item.username}</Text>
          </VStack>
        </HStack>
      ))}
    </ScrollView>
  );
};

const Posts = ({searching}: {searching: boolean}) => {
  const posts: any = useSelector<PropsState>(
    state => state.searchReducer.searchData.posts,
  );
  // console.log('Posts: ', posts);

  return (
    <ScrollView>
      {posts.map((post: IPost, index: number) => (
        <Post post={post} key={index} />
      ))}
    </ScrollView>
  );
};

function SearchTopTab({searchData}: ISearchState) {
  // console.log('SearchDataProp: ', searchData);

  return (
    <Box flex={1}>
      <Tab.Navigator>
        <Tab.Screen name="users" component={Users} />
        <Tab.Screen name="posts" component={Posts} />
      </Tab.Navigator>
    </Box>
  );
}

export default SearchTopTab;
