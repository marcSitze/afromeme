import React, {useState, useEffect} from 'react';
import {Pressable} from 'react-native';
import {Text, Input, Box, HStack, VStack} from 'native-base';
import {connect, useDispatch} from 'react-redux';

import {searchByTerm} from '../../redux/search/actions';
import {PropsState} from '../../types';
import {IUser} from '../../types/users';
import {IPost} from '../../types/posts';
import SearchTopTabs from '../../components/SearchTopTabs';
import colors from '../../constants/colors';

type PropTypes = {
  searching: boolean;
  searchData: {
    users: IUser[];
    posts: IPost[];
  };
};

const Search = ({searching, searchData}: PropTypes) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  // console.log('SearchDAta: ', searchData)
  // console.log('Searching: ', searching)

  useEffect(() => {
    console.log('Searching: ', searching);
  }, [searching]);
  return (
    <Box flex={1} px={3} bg={colors.light.white} py={4}>
      <HStack alignItems={'center'}>
        <Input
          bg={colors.light.lightGray}
          mr={2}
          flex={1}
          value={text}
          onChangeText={text => setText(text)}
        />
        <Pressable
        onPress={() => {
          dispatch(searchByTerm(text));
        }}>
        <Text>Search</Text>
      </Pressable>
      </HStack>
      {/* <Pressable
        onPress={() => {
          dispatch(searchByTerm(text));
        }}>
        <Text>Search</Text>
      </Pressable> */}
      <SearchTopTabs searchData={searchData} searching={searching} />
    </Box>
  );
};

const mapStateToProps = ({searchReducer}: PropsState) => ({
  searching: searchReducer.searching,
  searchData: searchReducer.searchData,
});

export default connect(mapStateToProps)(Search);
