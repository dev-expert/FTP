import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ToDoList = ({todos, toggleTodo}) => (
  <View>
    {todos.map(todo => (
      <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
        {console.log(todo.text)}
        <Text
          style={{
            fontSize: 25,
            flexDirection: 'column',

            backgroundColor: 'yellow',
            alignItems: 'center',
            justifyContent: 'center',
            textDecorationLine: todo.completed ? 'line-through' : 'none',
          }}>
          {todo.text}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);
export default ToDoList;
