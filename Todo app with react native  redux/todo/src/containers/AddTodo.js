import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {addTod} from '../actions';

function AddTodo(props) {
  const [text, setText] = useState('');

  addTodo = text => {
    props.dispatch(addTod(text));
    setText('');
  };

  console.log('text is ' + text);
  console.log(text);
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 20,
      }}>
      <TextInput
        onChangeText={text => setText(text)}
        value={text}
        placeholder="Eg. Do code every day"
        style={{
          borderWidth: 1,
          borderColor: '#f2f2e1',
          backgroundColor: '#eaeaea',
          height: 50,
          flex: 1,
          padding: 5,
        }}
      />
      <TouchableOpacity onPress={() => addTodo(text)}>
        <View
          style={{
            height: 50,
            backgroundColor: '#eaeaea',
            flex: 1,
            padding: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon name="plus" size={20} style={{color: '#de9595', padding: 10}} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default connect()(AddTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
