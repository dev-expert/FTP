import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TodoApp() {
  return (
    <View style={styles.container}>
      <Text>in the Todo app screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
