import React from "react";
import { Text, Image, View } from 'react-native'

import styles from './styles'

const ChatRoomItem = ({ chatRoom }) => {
  const user = chatRoom.users[1]

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: user.imageUri }} />

      {chatRoom.newMessages && <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
      </View>}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.text}>{chatRoom.lastMessage.content}</Text>
      </View>
    </View>
  )
}



export default ChatRoomItem