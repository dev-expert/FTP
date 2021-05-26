import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  AsyncStorage,
  StyleSheet
} from 'react-native';
import NewHeader from '../common/header';
const logo = require('../images/appwrklogo.png');
import styles from './styles';
import {CheckCredentialsApi} from './api';

//-----------------------------------------------Login Screen--------------------------------------------------------
function HomeScreen({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let user_id;

//-----------------------------------------------Checking Credentials-------------------------------------------------
  async function emailVerify() {
    let payload = {email: email, password: password};
    console.log('payload form check----', payload);
    let res = await CheckCredentialsApi(payload)
    console.log('response----', res.data);

    if (res.data.status == true) {
      user_id = res.data.result[0].user_id;
      console.log(user_id)
      AsyncStorage.setItem('userid', JSON.stringify(user_id));
      AsyncStorage.setItem('token', res.data.token);
      validation();
    } else if (res.data.status == false) {
      alert('Enter Valid Email and Password');
    }
  }

  const showToast = () => {
    ToastAndroid.show('Logged In', ToastAndroid.SHORT);
  };

//---------------------------------------------Email Validation---------------------------------------------
  function validation() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      alert('Enter Valid Email Address and Password');
    } else {
      showToast();
      navigation.navigate('CheckInOut');
    }
  }


  return (
    <>
      <NewHeader
        accessibilityLabel="menu"
        icon={'ios-menu'}
        centerText={'Attendance Manager'}
      />

      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>

        <View style={styles.container}>
          <Image source={logo} style={{width: 380, height: 100}} />

          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            onChangeText={value => {
              setEmail(value);
            }}
          />

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Enter Password"
            onChangeText={value => {
              setPassword(value);
            }}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              emailVerify();
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Login</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

export default HomeScreen;
