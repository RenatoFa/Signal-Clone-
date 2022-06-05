import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, Image, View, Pressable, ActivityIndicator } from 'react-native'

import styles from './styles'
import { Auth, DataStore } from "aws-amplify";
import { ChatRoomUser, User } from '../../src/models'

const ChatRoomItem = ({ chatRoom }) => {
  const [user, setUser] = useState<User | null>(null) // the display user]

  const navigation = useNavigation()

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = (await DataStore.query(ChatRoomUser))
        .filter(chatRoomUser => chatRoomUser.chatRoom.id === chatRoom.id)
        .map(chatRoomUser => chatRoomUser.user)
      const authUser = await Auth.currentAuthenticatedUser()
      setUser(fetchedUsers.find(user => user.id !== authUser.attributes.sub) || null)
    }
    fetchUsers()
  }, [])
  const onPress = () => {
    console.warn('pressed on', user.name)
    navigation.navigate('ChatRoom', { id: chatRoom.id })
  }

  if (!user) {
    return <ActivityIndicator />
  }

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{ uri: user.imageUri }} />

      {!!chatRoom.newMessages && <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
      </View>}

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{chatRoom.lastMessage?.createdAt}</Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.text}>{chatRoom.lastMessage?.content}</Text>
      </View>
    </Pressable>
  )
}



export default ChatRoomItem