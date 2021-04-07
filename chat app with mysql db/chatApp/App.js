/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//import 'react-native-gesture-handler';
import {useState, useEffect} from 'react';
import * as React from 'react';
import personalroomScreen from './personalroomScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

function loginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [pass, setpass] = useState('');

  // useEffect(() => {
  //   fetchData();
  // }, []);
  // console.log('insidae' + JSON.stringify(data));
  // fetchData = async () => {
  //   const userlist = await fetch('http://192.168.1.28:3001/users', {
  //     method: 'GET',
  //   })
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.log('errrrrrrrrrrr--', error));

  //   console.log('response----------', response);
  //   const users = JSON.stringify(response);
  //   setData(users);
  //   console.log('users' + users);

  //   const userLists = await userlist.json();
  //   console.log('userlist', userLists);
  // };

  register = async () => {
    fetch('http://192.168.1.28:3001/register', {
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
    const data = await fetch('http://192.168.1.28:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        pass: pass,
      }),
    });
    // .then(response => alert(response))

    // .catch(e => console.log(e));
    const checkdata = await data.json();
    console.log(checkdata);
    if (checkdata.saved === true) {
      navigation.navigate('Chat Room');
    } else {
      alert('Login not done ');
    }
  };

  return (
    // <View>
    //   <Text>yo ho {JSON.stringify(data[0].akshay)}</Text>

    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputContainer}>
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
        onPress={
          () => login()
          // () => {
          //   navigation.navigate('Chat Room');
          // })
        }>
        <Text style={styles.loginText}>Login</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.buttonContainer}
        onPress={() => register()}>
        <Text style={styles.loginText}>Register</Text>
      </TouchableHighlight>
    </View>
    // </View>
  );
}
function chatroomScreen({navigation}) {
  const [data, setData] = useState([' ']);

  useEffect(() => {
    fetchData();
  }, []);
  console.log('insidae' + JSON.stringify(data));

  fetchData = async () => {
    fetch('http://192.168.1.28:3001/users', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log('errrrrrrrrrrr--', error));

    console.log('response----------', response);
    const users = JSON.stringify(response);
    setData(users);
    console.log('users' + users);

    const userLists = await userlist.json();
    console.log('userlist', userLists);
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: 'lightblue',
              padding: 10,
              margin: 10,
              height: 50,
              borderRadius: 20,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Personal Room')}>
              <View>
                <Text
                  style={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: 20,
                    alignContent: 'center',
                  }}>
                  {item.emailId}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontSize: 25,
            fontStyle: 'italic',
            fontWeight: 'bold',
          },
          headerTitleAlign: {
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}>
        <Stack.Screen name="Login-Register" component={loginScreen} />
        <Stack.Screen name="Chat Room" component={chatroomScreen} />
        <Stack.Screen name="Personal Room" component={personalroomScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  container1: {
    margin: 20,

    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: '80%',
    height: 45,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,

    marginLeft: 10,
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
    backgroundColor: '#00b5ec',
  },
  loginButton: {
    backgroundColor: '#00b5ec',
  },
  loginText: {
    color: 'black',
    fontSize: 25,
  },
});
