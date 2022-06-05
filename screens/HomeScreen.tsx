import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native'
import { Auth, DataStore } from 'aws-amplify';
import { ChatRoom, ChatRoomUser } from '../src/models'

import ChatRoomItem from '../components/ChatRoomItem';

export default function TabOneScreen() {
  const [chatRooms, setChatRooms] = useState<ChatRoom[]>([])

  useEffect(() => {
    const fetchChatRooms = async () => {
      const userData = await Auth.currentAuthenticatedUser()
      const chatRooms = (await DataStore.query(ChatRoomUser)).filter(chatRoomUser => chatRoomUser.user.id === userData.attributes.sub)
        .map(chatRoomUser => chatRoomUser.chatRoom)
      setChatRooms(chatRooms)
    }
    fetchChatRooms()
  })

  const louOut = () => {
    Auth.signOut()
  }

  return (
    <View style={styles.page}>
      <FlatList
        data={chatRooms}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) =>
          <ChatRoomItem chatRoom={item} />}
      />
      <Pressable onPress={louOut} style={styles.button}>
        <Text>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  },

  button: {
    backgroundColor: 'red',
    height: 50,
    margin: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})