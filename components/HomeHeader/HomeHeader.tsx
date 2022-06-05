import React from 'react';
import { Text, View, Image, StyleSheet, useWindowDimensions, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const HomeHeader = (props) => {

  const { width } = useWindowDimensions()
  const navigation = useNavigation()

  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      width,
      padding: 10,
      alignItems: 'center'
    }}>
      <Image
        source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png' }}
        style={styles.image}
      />
      <Text style={styles.text}>Signal</Text>
      <Feather name="camera" size={24} color="black" style={styles.icon} />
      <Pressable onPress={() => navigation.navigate('UsersScreen')}>
        <Feather name="edit-2" size={24} color="black" style={styles.icon} />
      </Pressable>
    </View >
  )
}

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
    borderRadius: 30
  },

  text: {
    flex: 1,
    textAlign: 'center',
    marginLeft: 50,
    fontWeight: 'bold'
  },

  icon: {
    marginHorizontal: 10
  }
})

export default HomeHeader