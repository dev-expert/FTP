import React, { useState } from 'react';
import {saveEmployeeDetails} from "../Action/saveEmployeeDetailsAction"
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableHighlight,
} from 'react-native';
//connect() function connects a React component to a Redux store.
import {connect} from 'react-redux';
function EmployeeDetails() {
  const [name, setName] = useState('');
  const [schoolName, setschoolName] = useState('');
  const [companyName, setcompanyName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainView}>
        <Text style={styles.mainTextStyle}>Submit Employee Details</Text>
        <Text style={styles.textStyle}>Enter Your Name</Text>
        <TextInput
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
          placeholderTextColor="#cccccc"
          placeholder="Enter Your Name"
          // onChangeText={name => {
          //   this.setState({name: name}, () => {});
          // }
          onChangeText={name => {
            console.log('****', name);
            setName(name);
          }}
          // value={name}
        />
        <Text style={styles.textStyle}>Enter Your School Name</Text>
        <TextInput
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
          placeholderTextColor="#cccccc"
          placeholder="Enter Your School Name"
          onChangeText={schoolName => {
            setschoolName(setschoolName);
          }}
        />
        <Text style={styles.textStyle}>Enter Your Company Name</Text>
        <TextInput
          style={styles.textInputStyle}
          underlineColorAndroid="transparent"
          placeholderTextColor="#cccccc"
          placeholder="Enter Your Company Name"
          onChangeText={companyName => {
            setcompanyName(companyName);
          }}
        />
        <TouchableHighlight
          underlayColor="transparent"
          style={styles.buttonStyle}
          onPress={() => {
            //Here we will call our Action
          }}>
          <Text style={styles.buttonTextStyle}>Submit</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    //   paddingHorizontal:10,
    paddingBottom: 50,
  },
  mainView: {
    width: '100%',
    height: '50%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    marginBottom: 10,
    marginTop: 10,
  },
  textStyle: {
    width: '100%',
    height: 20,
    //paddingHorizontal:15,
    textAlign: 'left',
    marginTop: 10,
    fontSize: 15,
  },
  mainTextStyle: {
    width: '100%',
    height: 40,
    //paddingHorizontal:15,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  buttonStyle: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 20,
  },
  buttonTextStyle: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
  },
});
export default EmployeeDetails;
