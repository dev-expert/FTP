import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  textbox: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
});

const ToDoList = ({todos, toggleTodo}) => (
  <View>
    <ScrollView>
      {todos.map(todo => (
        <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
          {console.log(todo.text)}
          <View style={styles.textbox}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: 'black',
                textDecorationLine: todo.completed ? 'line-through' : 'none',
              }}>
              {todo.text}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);
export default ToDoList;
