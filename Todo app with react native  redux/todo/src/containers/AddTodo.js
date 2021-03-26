import React, {Component} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddTodo() {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 20,
      }}>
      <TextInput
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
      <TouchableOpacity onPress={() => alert('added todo')}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
