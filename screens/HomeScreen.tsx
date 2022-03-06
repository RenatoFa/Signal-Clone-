import * as React from 'react'
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native'
import { Auth } from 'aws-amplify';

import ChatRoomItem from '../components/ChatRoomItem';

import chatRoomsData from '../assets/dummy-data/ChatRooms'

export default function TabOneScreen() {
  const louOut = () => {
    Auth.signOut()
  }



  return (
    <View style={styles.page}>
      <FlatList
        data={chatRoomsData}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) =>
          <ChatRoomItem chatRoom={item} />}
      />
      {/* <Pressable onPress={louOut} style={styles.button}>
        <Text>Logout</Text>
      </Pressable> */}
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