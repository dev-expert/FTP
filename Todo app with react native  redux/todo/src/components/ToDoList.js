import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const styles = StyleSheet.create({
  textbox: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    borderRadius: 20,
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
              <TouchableOpacity style={{alignItems: 'flex-end'}}>
                <Icon
                  name="trash"
                  size={25}
                  style={{color: '#de9595', paddingLeft: 30}}
                />
              </TouchableOpacity>
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);
export default ToDoList;
