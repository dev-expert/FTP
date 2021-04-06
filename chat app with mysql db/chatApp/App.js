/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
} from 'react-native';

export default function App() {
  const [data, setData] = useState(['akshay sharma ']);
  const [email, setEmail] = useState('');
  const [pass, setpass] = useState('');

  useEffect(() => {
    fetchData();
  }, []);
  console.log('insidae' + JSON.stringify(data));
  fetchData = async () => {
    fetch('http://192.168.1.13:3001/users', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log('errrrrrrrrrrr--', error));

    console.log('response----------', response);
    const users = JSON.stringify(response);
    setData(users);
    console.log('users' + users);
  };

  register = async () => {
    fetch('http://192.168.1.13:3001/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        email: email,
        pass: pass,
      },
    })
      .then(response => response.json())

      .catch(e => console.log(e));
  };

  login = async () => {
    fetch('http://192.168.1.13:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        pass: pass,
      }),
    })
      .then(response => response.json())

      .catch(e => console.log(e));
  };

  return (
    // <View>
    //   <Text>yo ho {JSON.stringify(data[0].akshay)}</Text>

    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{
            uri: 'https://png.icons8.com/message/ultraviolet/50/3498db',
          }}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={password => setpass(password)}
        />
      </View>

      <TouchableHighlight
        style={[styles.buttonContainer, styles.loginButton]}
        onPress={() => login()}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.buttonContainer}
        onPress={() => register()}>
        <Text>Register</Text>
      </TouchableHighlight>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'white',
  },
});
