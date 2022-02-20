import React from 'react'
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native'

import Message from '../components/Message/Message';
import chatRoomData from '../assets/dummy-data/Chats'
import MessageInput from '../components/MessageInput/MessageInput';

const ChatRoomScreen = () => {
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
  }
})

export default ChatRoomScreen