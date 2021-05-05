import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ceil} from 'react-native-reanimated';
import GetLocation from 'react-native-get-location'
const axios = require('axios');

function HomeScreen({navigation}) {
  
  const [email, setEmail] = useState();
  



  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        onChangeText={value => {
          setEmail(value);
        }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('CheckInOut', {
            email: email,
          })
        }}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

function CheckInOut({route, navigation}) {
  const [checkInTime, setCheckInTime] = useState();
  const [lat, setLat] = useState();
  const [lng, setLng] = useState();
  const [checkOutTime, setCheckOutTime] = useState();
  const [description, setDescription] = useState();

  const {email} = route.params;
  // console.log('>>>>>>>>>>>>>>>', route.params);


  async function makeGetRequest() {
    let payload = {email: email, checkInTime: checkInTime, lat: lat, lng: lng};

    let res = await axios.post(
      'http://192.168.0.103:3000/registeruser',
      payload,
    );
    let data = res.data;
    console.log(">>>>>>>>>>>>>",data);
  }

  function checkInTTime() {
    const hours = new Date().getHours(); //Current Hours
    const min = new Date().getMinutes(); //Current Minutes
    const sec = new Date().getSeconds(); //Current Seconds
    const time = hours + ':' + min + ':' + sec;
    setCheckInTime(time)

  }

  console.log('>>>>>>>>>>>>>', checkInTime);
  function getLatLng() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
  })
  .then(location => {
    setLat(location.latitude)
    setLng(location.longitude)
      console.log(lat);
      console.log(lng);

  })
  .catch(error => {
      const { code, message } = error;
      console.warn(code, message);
  })
  }

 function checkInTTimeandgetLatLng() {
   checkInTTime();
   getLatLng();
   makeGetRequest();
   
   
 }

  function checkOutTTime() {
    const hours = new Date().getHours(); //Current Hours
    const min = new Date().getMinutes(); //Current Minutes
    const sec = new Date().getSeconds(); //Current Seconds
    const timee = hours + ':' + min + ':' + sec;
debugger
    setCheckOutTime(timee)
    
  }
  console.log('>>>>>>>>>>>>>', checkOutTime);
  return (
    <View>
      <TouchableOpacity style={styles.myAttendanceBtn}>
        <Text style={{fontSize: 20}}>My Attendance</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 100,
        }}>
        <TouchableOpacity style={styles.checkInOutBtn} onPress={checkInTTimeandgetLatLng}>
          <Text style={{fontSize: 20}}>CheckIn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkInOutBtn} onPress={checkOutTTime}>
          <Text style={{fontSize: 20}}>CheckOut</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: '20%'}}>
        <Text style={{textAlign: 'center', fontSize: 20}}>Description</Text>
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 1,
            width: '98%',
            alignSelf: 'center',
          }}
          multiline={true}
          numberOfLines={4}
        />
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CheckInOut" component={CheckInOut} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 10,
    width: 100,
    height: 40,
  },
  myAttendanceBtn: {
    margin: 10,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: 160,
    height: 40,
    padding: 5,
  },
  checkInOutBtn: {
    backgroundColor: '#DDDDDD',
    width: 120,
    height: 40,
    alignItems: 'center',
    padding: 5,
  },
});

export default App;
