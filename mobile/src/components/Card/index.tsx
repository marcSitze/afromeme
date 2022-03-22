import React from "react";
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import styles from './styles';
import { IPost } from '../../types/posts';
import { PropsState } from '../../types';

type Props = {
  text?: string,
  style?: any,
  posts?: Array<IPost>,
}
const Card = ({ text = 'Hello Text', style, posts }: Props) => {
  console.log('posts: ', posts);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const mapStateToProps = ({ postsReducer }: PropsState) => ({
  posts: postsReducer.posts,
});

export default connect(mapStateToProps)(Card);