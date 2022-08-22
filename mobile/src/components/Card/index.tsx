import React, { useState, useEffect } from "react";
import { Image } from 'react-native';
import { Center, Container, Heading, Text, } from 'native-base';
import { connect, useDispatch } from "react-redux";
import styles from './styles';
import * as types from "../../redux/posts/types";
import { IPost } from '../../types/posts';
import { PropsState, HomeTabParamList } from '../../types';
import config from '../../config';

type Props = {
  text?: string,
  style?: any,
  posts: IPost[],
  navigation: HomeTabParamList
}
const Card = ({ text = 'Hello Text', style, posts, navigation }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: types.GET_POSTS_REQUEST, payload: []});
  }, []);

  return (
    <Center>
    <Container>
      <Heading>
          A component library for the
          <Text color="emerald.500"> React Ecosystem</Text>
        </Heading>
        <Text mt="3" fontWeight="medium">
          NativeBase is a simple, modular and accessible component library that
          gives you building blocks to build you React applications.
        </Text>
        {posts[0]?.media && <Image style={{width: 100, height: 100, marginBottom: 10}} source={{uri: `${config.API}/api/media/${posts[0].media}`}} />}
        {posts[0]?.media && <Image style={{width: 100, height: 100}} source={{uri: `${config.API}/api/media/${posts[0].media}`}} />}
    </Container>
    </Center>
  )
}

const mapStateToProps = ({ postsReducer }: PropsState) => ({
  posts: postsReducer.posts,
});

export default connect(mapStateToProps)(Card);