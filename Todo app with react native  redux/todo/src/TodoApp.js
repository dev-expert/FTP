import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddTodo from './containers/AddTodo';

export default function TodoApp() {
  state = {
    todo: [],
    visibilityFilter: 'SHOW_ALL_TODOS',
  };

  return (
    <View style={styles.container}>
      {/* taking input for the todo list */}
      <AddTodo />
      {/* for displaying our todo app */}
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
