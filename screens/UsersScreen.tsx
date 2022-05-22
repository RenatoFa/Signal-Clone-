import * as React from 'react'
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native'
import { Auth } from 'aws-amplify';

import UserItem from '../components/UserItem';

import Users from '../assets/dummy-data/Users'

export default function UsersScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={Users}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <UserItem user={item} />}
      />
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