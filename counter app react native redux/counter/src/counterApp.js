import React, {useState} from 'react';
import {connect} from 'react-redux';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

function mapStateToProps(state) {
  return {counter: state.counter};
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
  };
}

function CounterApp(props) {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          width: 400,
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity onPress={() => props.increaseCounter()}>
          <Text style={styles.text}>Increase</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{props.counter}</Text>
        <TouchableOpacity onPress={() => props.decreaseCounter()}>
          <Text style={styles.text}>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
