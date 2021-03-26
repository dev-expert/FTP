import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TodoApp from './src/TodoApp';
import store from './src/store/index';
import {Provider} from 'react-redux';
// Provider component makes the Redux store available to any nested components that
// need to access the Redux store.Since any React component in a React Redux
// app can be connected to the store, most applications will render a < Provider >
// at the top level, with the entire app's component tree inside of it.

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}
