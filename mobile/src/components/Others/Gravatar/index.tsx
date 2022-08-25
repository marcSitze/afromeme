import React from 'react'
import { View, Text } from 'react-native'
import Gravatar from 'react-native-user-avatar';
import styles from './styles';

type PropsTypes = {
  username: string;
  size?: number;
  style?: any;
}
const index = ({ username, size, style }: PropsTypes) => {
  return (
    <Gravatar size={size ?? 100} name={username} />
  )
}

export default index