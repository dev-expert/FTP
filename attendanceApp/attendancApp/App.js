import 'react-native-gesture-handler';
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Touchable,
  AsyncStorage,
  Button,
  ToastAndroid,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ceil} from 'react-native-reanimated';
import GetLocation from 'react-native-get-location';

const axios = require('axios');

function HomeScreen({navigation}) {
  const [email, setEmail] = useState();

  async function emailVerify() {
    let payload = {email: email};
    console.log('payload form check----', payload);
    let res = await axios.post(
      'http://192.168.0.106:3000/checkCredentials',
      payload,
    );

    console.log('>>>>>>>>>>>>>', res.data.status);
    if (res.data.status == true) {
      validation();
    } else if (res.data.status == false) {
      alert('Invalid Email');
    }
  }

  const showToast = () => {
    ToastAndroid.show('Logged In', ToastAndroid.SHORT);
  };

  function validation() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      alert('Enter Valid Email Address');
    } else {
      showToast();
      navigation.navigate('CheckInOut', {
        email: email,
      });
    }
  }

  // -------------------- Clear Data of Local Storage --------------------
  //   const clearAppData = async function() {
  //     try {
  //         const keys = await AsyncStorage.getAllKeys();
  //         await AsyncStorage.multiRemove(keys);
  //     } catch (error) {
  //         console.error('Error clearing app data.');
  //     }
  // }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://image3.mouthshut.com/images/imagesp/925979518s.png',
          }}
          style={{width: 380, height: 100}}
        />
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
            emailVerify();
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Login</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

// Hook
function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef();
  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)
  return ref.current;
}

function CheckInOut({route, navigation}) {
  const [checkInDate, setcheckInDate] = useState();
  const [checkInTime, setCheckInTime] = useState();
  let previousCheckInTime = usePrevious(checkInTime);
  const [lat, setLat] = useState();
  let previousLat = usePrevious(lat);
  const [lng, setLng] = useState();
  let previousLng = usePrevious(lng);
  const [checkOutTime, setCheckOutTime] = useState();
  let previousCheckOutTime = usePrevious(checkOutTime);
  const [checkOutDate, setcheckOutDate] = useState();
  let previousCheckOutDate = usePrevious(checkOutDate);
  const [description, setDescription] = useState();
  let previousDescription = usePrevious(description);
  const [flagCheckIn, setflagCheckIn] = useState(false);
  const [flagCheckOut, setflagCheckOut] = useState(true);
  const checkInBtnColor = flagCheckIn ? '#eb5527' : '#0F59A5';
  const checkOutBtnColor = flagCheckOut ? '#eb5527' : '#0F59A5';
  const descriptionOpacity = flagCheckIn ? 1 : 0;
  const localStorageFlag = 'true';
  const descriptionDisableFlag = flagCheckIn ? true : false;
  const {email} = route.params;
  // console.log('>>>>>>>>>>>>>>>', route.params);

  // checkSession();

  useEffect(async () => {
    if (previousLng != lng) {
      makeGetRequestforEmailCheckinLatlng();
    }
    if (previousCheckOutTime != checkOutTime) {
      makeGetRequestforCheckoutDescription();
    }
    if ((await AsyncStorage.getItem('flag')) == 'true') {
      setflagCheckIn(true);
      setflagCheckOut(false);
    } else {
      setflagCheckIn(false);
      setflagCheckOut(true);
    }
  });

  function saveDataLocally() {
    let localStorageFlagg = localStorageFlag;
    AsyncStorage.setItem('flag', localStorageFlagg);
    // alert('SET VALUE', localStorageFlagg)
  }

  // const displaylocaldata = async () => {
  //   try {
  //     let localStorageFlagg = await AsyncStorage.getItem('flag');
  //     alert(localStorageFlagg);
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  const removeLocalData = async () => {
    try {
      await AsyncStorage.removeItem('flag');
    } catch (error) {
      alert(error);
    }
  };

  async function makeGetRequestforEmailCheckinLatlng() {
    let payload = {
      email: email,
      checkInDate: checkInDate,
      checkInTime: checkInTime,
      lat: lat,
      lng: lng,
    };
    console.log('payload ----', payload);
    let res = await axios.post(
      'http://192.168.0.106:3000/registeruser',
      payload,
    );
    let data = res.data;
    console.log('>>>>>>>>>>>>>', data);
  }

  async function makeGetRequestforCheckoutDescription() {
    let payload = {
      email: email,
      checkOutTime: checkOutTime,
      checkOutDate: checkOutDate,
      description: description,
    };
    console.log('payload ----', payload);
    let res = await axios.post(
      'http://192.168.0.106:3000/checkouttime',
      payload,
    );
    let data = res.data;
    console.log('>>>>>>>>>>>>>', data);
  }

  function checkInTTime() {
    const hours = new Date().getHours(); //Current Hours
    const min = new Date().getMinutes(); //Current Minutes
    const sec = new Date().getSeconds(); //Current Seconds
    const time = hours + ':' + min + ':' + sec;
    setCheckInTime(time);
    console.log('>>>>>>>>>>>>>', checkInTime);
  }

  function checkInDDate() {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const fullDate = year + '-' + month + '-' + date;
    setcheckInDate(fullDate);
    console.log('--------------', checkInDate);
  }

  function getLatLng() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setLat(location.latitude);
        setLng(location.longitude);
        console.log(lat);
        console.log(lng);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }

  function checkInTTimeandgetLatLng() {
    checkInDDate();
    checkInTTime();
    getLatLng();
    saveDataLocally();
  }

  function checkOutTTimeDescRemoveLocalData() {
    checkOutTTime();
    checkOutDDate();
    removeLocalData();
    desc();
    makeGetRequestforCheckoutDescription();
  }

  function checkOutTTime() {
    const hours = new Date().getHours(); //Current Hours
    const min = new Date().getMinutes(); //Current Minutes
    const sec = new Date().getSeconds(); //Current Seconds
    const timee = hours + ':' + min + ':' + sec;

    setCheckOutTime(timee);
    console.log('>>>>>>>>>>>>>', checkOutTime);
  }

  function checkOutDDate() {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const fullDate = year + '-' + month + '-' + date;
    setcheckOutDate(fullDate);
    console.log('--------------', checkOutDate);
  }

  function desc() {
    console.log('<<<<<<<<<<<<<<<<<', description);
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View>
        <TouchableOpacity
          style={styles.myAttendanceBtn}
         >
          <Text style={{fontSize: 20}}>My Attendance</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 100,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: checkInBtnColor,
              width: 120,
              height: 45,
              alignItems: 'center',
              paddingVertical: 7,
            }}
            onPress={() => {
              checkInTTimeandgetLatLng(),
                setflagCheckIn(true),
                setflagCheckOut(false);
            }}
            disabled={flagCheckIn}>
            <Text style={{fontSize: 20, color: 'white'}}>CheckIn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: checkOutBtnColor,
              width: 120,
              height: 45,
              alignItems: 'center',
              paddingVertical: 7,
            }}
            onPress={() => {
              checkOutTTimeDescRemoveLocalData(),
                setflagCheckIn(false),
                setflagCheckOut(true);
            }}
            disabled={flagCheckOut}>
            <Text style={{fontSize: 20, color: 'white'}}>CheckOut</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
          onPress={() => {
            displaylocaldata();
          }}>
          <Text>Remove Item</Text>
        </TouchableOpacity> */}
        </View>
        <View style={{marginTop: '20%', opacity: descriptionOpacity}}>
          <Text style={{textAlign: 'center', fontSize: 20}}>Description</Text>

          <TextInput
            editable={descriptionDisableFlag}
            style={{
              borderColor: 'black',
              borderWidth: 1,
              width: '98%',
              alignSelf: 'center',
              borderRadius: 5,
            }}
            multiline={true}
            numberOfLines={4}
            onChangeText={setDescription}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const Stack = createStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Attendance Manager" component={HomeScreen} />
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
    width: 320,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#0F59A5',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0F59A5',
    paddingVertical: 6,
    marginTop: 10,
    width: 120,
    height: 45,
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
});

export default App;
