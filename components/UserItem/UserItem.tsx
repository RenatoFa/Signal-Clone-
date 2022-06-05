import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Auth, DataStore } from 'aws-amplify';
import { ChatRoom, User, ChatRoomUser } from "../../src/models";
import { Text, Image, View, Pressable } from 'react-native'


import styles from './styles'

const UserItem = ({ user }) => {
  const navigation = useNavigation()

  const onPress = async () => {
    // TODO if there is already a chat room between these 2 users
    // the redirect to the existing chat room
    // oherwise, create a new chatroom with these users

    
    // Create a chat room
    const newChatroom = await DataStore.save(new ChatRoom({ newMessages: 0 }))

    // connect authenticated user with the chat room
    const authUser = await Auth.currentAuthenticatedUser()
    const dbUser = await DataStore.query(User, authUser.attributes.sub)
    await DataStore.save(new ChatRoomUser({
      user: dbUser,
      chatRoom: newChatroom
    }))

    // connect clicked user with the chat roo
    await DataStore.save(new ChatRoomUser({
      user,
      chatRoom: newChatroom
    }))

    navigation.navigate('ChatRoom', { id: newChatroom.id })
  }

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{ uri: user.imageUri }} />

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
        </View>
      </View>
    </Pressable>
  )
}



export default UserItem