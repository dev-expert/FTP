import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AddTodo from './containers/AddTodo';
import VisibleTodos from './containers/VisibleTodos';

export default function TodoApp(state) {
  state = {
    todo: [],
    visibilityFilter: 'SHOW_ALL_TODOS',
  };

  return (
    <View style={styles.container}>
      {/* taking input for the todo list */}
      <AddTodo />
      {/* for displaying our todo app */}
      <View>
        <VisibleTodos />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});
