import React from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions } from 'react-native'
import { Feather } from '@expo/vector-icons'


const ChatRoomHeader = (props) => {

  const { width } = useWindowDimensions()

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: width - 50,
      alignItems: 'center',
    }}>
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' }}
        style={styles.image}
      />
      <Text style={styles.text}>{props.children}</Text>
      <Feather name="camera" size={24} color="black" style={styles.icon} />
      <Feather name="edit-2" size={24} color="black" style={styles.icon} />
    </View >
  )
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 30,
  },

  text: {
    flex: 1,
    marginLeft: 10,
    fontWeight: 'bold'
  },

  icon: {
    marginHorizontal: 10
  }
})

export default ChatRoomHeader