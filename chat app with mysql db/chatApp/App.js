/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default function App() {
  const [data, setData] = useState(['akshay sharma ']);
  useEffect(() => {
    fetchData();
  }, []);
  console.log('insidae' + JSON.stringify(data));
  fetchData = async () => {
    fetch('http://192.168.1.118:3001/users', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log('errrrrrrrrrrr--', error));

    console.log('response----------', response);
    const users = JSON.stringify(response);
    setData(users);
    console.log('users' + users);
  };
  return (
    <View>
      <Text>yo ho {JSON.stringify(data[0].akshay)}</Text>
    </View>
  );
}
