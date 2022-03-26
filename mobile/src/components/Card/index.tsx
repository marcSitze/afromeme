import React from "react";
// import { View, Text, TouchableOpacity } from 'react-native';
import { Center, Container, Heading, Text } from 'native-base';
import { connect } from "react-redux";
import styles from './styles';
import { IPost } from '../../types/posts';
import { PropsState, HomeTabParamList } from '../../types';

type Props = {
  text?: string,
  style?: any,
  posts?: Array<IPost>,
  navigation: HomeTabParamList
}
const Card = ({ text = 'Hello Text', style, posts, navigation }: Props) => {
  console.log('posts: ', posts);

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
    </Container>
    </Center>
  )
}

const mapStateToProps = ({ postsReducer }: PropsState) => ({
  posts: postsReducer.posts,
});

export default connect(mapStateToProps)(Card);