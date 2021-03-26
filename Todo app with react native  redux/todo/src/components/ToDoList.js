import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ToDoList = ({todos, toggleTodo}) => (
  <View>
    {todos.map(todo => (
      <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
        <Text
          style={{
            fontSize: 25,
            textDecorationLine: todo.completed ? 'line-through' : 'none',
          }}>
          {todo.Text}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);
export default ToDoList;
