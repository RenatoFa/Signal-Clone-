import React, { useState, useEffect } from 'react'
import { DataStore } from 'aws-amplify';
import { View, StyleSheet, FlatList } from 'react-native'
import { User } from '../src/models'

import UserItem from '../components/UserItem';


export default function UsersScreen() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    DataStore.query(User).then(setUsers)
  }, [])

  // useEffect(() => {
  //   // query users
  //   const fetchUsers = async () => {
  //     const fetchedUsers = await DataStore.query(User);
  //     setUsers(fetchedUsers)
  //   }
  //   fetchUsers()
  // })

  return (
    <View style={styles.page}>
      <FlatList
        data={users}
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