import React, { useState, useEffect} from 'react'
import { View, Text, Pressable } from 'react-native'

import socket from '../../helpers/socket.io';

const Notifications = () => {
  const [response, setResponse] = useState(false);

  useEffect(() => {

    socket.emit('connected', {id: 1, name: 'marc'})

      console.log('response: ', response)
      // socket.emit('soya', "hello soya")

      socket.emit('like', { userId: 'likedevent', name: 'jorel'})

      socket.on('likedevent', data => {
        console.log('Liked by: ', data);
      })
  }, [response])
  return (
    <View>
      <Pressable onPress={() => setResponse(!response)}>
      <Text>Notifications</Text>
      </Pressable>
    </View>
  )
}

export default Notifications