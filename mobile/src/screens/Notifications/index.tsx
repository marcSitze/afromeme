import React, { useState, useEffect} from 'react'
import { View, Text, Pressable } from 'react-native'

import socket from '../../helpers/socket.io';

const Notifications = () => {
  const [response, setResponse] = useState(false);
  const [current] = useState({
    userId: 'asdas987da9sda9sdasd',
    name: 'jorel'
  })

  useEffect(() => {

    socket.emit('connected', {id: 1, name: 'marc'})

    socket.on('connected', data => {
      console.log('User connected: ', data);
    })

      console.log('response: ', response)
      // socket.emit('soya', "hello soya")

      socket.emit('like', current)

      socket.on(current.userId, data => {
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