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
import {ceil, diff} from 'react-native-reanimated';
import GetLocation from 'react-native-get-location';
import {Calendar} from 'react-native-calendars';
import LinearGradient from 'react-native-linear-gradient';
const axios = require('axios');
const logo = require('./images/appwrklogo.png');
function HomeScreen({navigation}) {
  const [email, setEmail] = useState();

  async function emailVerify() {
    let payload = {email: email};
    console.log('payload form check----', payload);
    let res = await axios.post(
      'http://192.168.0.106:3000/checkCredentials',
      payload,
    );

    // console.log('>>>>>>>>>>>>>', res.data.status);
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
        <Image source={logo} style={{width: 380, height: 100}} />

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
  const [checkindateandtime, setcheckindateandtime] = useState();
  const [checkoutdateandtime, setcheckoutdateandtime] = useState();

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
      checkindateandtime: checkindateandtime,
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
      checkoutdateandtime: checkoutdateandtime,
      description: description,
    };

    console.log('payload ----', payload);
    let res = await axios.post(
      'http://192.168.0.106:3000/checkouttime',
      payload,
    );

    if (res && res.data) {
      setDescription('');
    }
    // let data = res.data;
    // console.log('reponse>>>>>>>>>>>>>', data);
  }

  function checkinddateandtime() {
    const date = new Date();
    setcheckindateandtime(date);
  }

  function checkoutddateandtime() {
    const date = new Date();
    setcheckoutdateandtime(date);
  }

  function checkInTTime() {
    const hours = new Date().getHours(); //Current Hours
    const min = new Date().getMinutes(); //Current Minutes
    const sec = new Date().getSeconds(); //Current Seconds
    const time = hours + ':' + min + ':' + sec;
    setCheckInTime(time);
    // console.log('>>>>>>>>>>>>>', checkInTime);
  }

  function checkInDDate() {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const fullDate = year + '-' + month + '-' + date;
    setcheckInDate(fullDate);
    // console.log('--------------', checkInDate);
  }

  function getLatLng() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setLat(location.latitude);
        setLng(location.longitude);
        // console.log(lat);
        // console.log(lng);
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
    checkinddateandtime();
    showToastInCheckIn();
  }

  function checkOutTTimeDescRemoveLocalData() {
    checkOutTTime();
    checkOutDDate();
    removeLocalData();
    checkoutddateandtime();
    makeGetRequestforCheckoutDescription();
    showToastInCheckOut();
  }

  function checkOutTTime() {
    const hours = new Date().getHours(); //Current Hours
    const min = new Date().getMinutes(); //Current Minutes
    const sec = new Date().getSeconds(); //Current Seconds
    const timee = hours + ':' + min + ':' + sec;

    setCheckOutTime(timee);
    // console.log('>>>>>>>>>>>>>', checkOutTime);
  }

  function checkOutDDate() {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const fullDate = year + '-' + month + '-' + date;
    setcheckOutDate(fullDate);
    // console.log('--------------', checkOutDate);
  }

  const showToastInCheckIn = () => {
    ToastAndroid.show(
      'Checked In Successfully',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const showToastInCheckOut = () => {
    ToastAndroid.show(
      'Checked Out Successfully',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View>
        <LinearGradient
          colors={['#833ab4', '#fd1d1d', '#fcb045']}
          style={styles.myAttendanceBtn}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('checkDetails', {
                email: email,
              });
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>My Attendance</Text>
          </TouchableOpacity>
        </LinearGradient>
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
            value={description}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

function checkDetails({route, navigation}) {
  const [greendate, setgreendate] = useState([]);
  const [orangedate, setOrangedate] = useState([]);
  const [reddate, setReddate] = useState([]);
  const [greenorange, setgreenorange] = useState([]);

  const [time, settime] = useState([]);
  const [color, setColor] = useState();
  const {email} = route.params;

  const currentDATE = new Date();
  // console.log('currentDate', currentDATE);

  useEffect(async () => {
    // async function checkPresentOrNot() {
    let payload = {
      email: email,
    };
    console.log('payload ----', payload);
    let res = await axios.post(
      'http://192.168.0.106:3000/presentorabsent',
      payload,
    );
    let data = res.data;
    // console.log('>>>>>>>>>>>>>', data);
    let len = data.length;
    console.log('length', len);
    for (let i = 0; i < len; i++) {
      let data = res.data[i];
      // console.log('>>>>>>>>>>>>>', data);

      const checkInTIME = data.checkInTime.slice(0, 8);
      const checkOutTIME = data.checkOutTime.slice(0, 8);
      const checkInDATE = data.checkindateandtime.slice(0, 10);
      const checkOutDATE = data.checkindateandtime.slice(0, 10);

      const replacedCheckInDATE = checkInDATE.replace(/-/g, '/');
      const replacedCheckOUTDATE = checkOutDATE.replace(/-/g, '/');

      const combineInDateAndTime = `${replacedCheckInDATE} ${checkInTIME}`;
      const combineOutDateAndTime = `${replacedCheckOUTDATE} ${checkOutTIME}`;

      const start = new Date(`${combineInDateAndTime}`).getTime();
      const end = new Date(`${combineOutDateAndTime}`).getTime();
      const difference = end - start;
      console.log('difference----', difference);

      const seconds = Math.floor((difference / 1000) % 60),
        minutes = Math.floor((difference / (1000 * 60)) % 60),
        hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      const totaltime = hours + ':' + minutes + ':' + seconds;
      console.log('total', totaltime);

      settime(time => [...time, totaltime]);

      if (difference >= 34200000) {
        setgreendate(greendate => [...greendate, checkInDATE]);
        setColor('green');
      } else if (difference < 34200000) {
        setOrangedate(orangedate => [...orangedate, checkInDATE]);
        setColor('orange');
      }

      setgreenorange(greenorange => [...greenorange, checkInDATE]);
    }
  }, []);

  let dates = [];
  let x = 0;
  greenorange.forEach(value => {
    dates[x] = new Date(value);
    x++;
  });

  var missingDates = [];
  for (var k = 1; k < dates.length; k++) {
    var daysDiff = (dates[k] - dates[k - 1]) / 86400000 - 1;
    for (var l = 1; l <= daysDiff; l++) {
      var missingDate = new Date(dates[k - 1]);
      missingDate.setDate(dates[k - 1].getDate() + l);
      var month = missingDate.getMonth() + 1;
      var day = missingDate.getDate();
      var year = missingDate.getFullYear();
      if (month.toString().length < 2) month = '0' + month;
      if (day.toString().length < 2) day = '0' + day;
      var yyyymmdd = `${year}-${month}-${day}`;
      missingDates.push(yyyymmdd);
    }
  }
  console.log('missing dates - ', missingDates);

  let missingDatesobj = {};
  missingDates.forEach(val => {
    missingDatesobj[val] = {selected: true, selectedColor: 'red'};
  });

  console.log('missingobject', missingDatesobj);

  let greendateobj = {};
  greendate.forEach(val => {
    greendateobj[val] = {selected: true, selectedColor: 'green'};
  });

  let orangedateobj = {};
  orangedate.forEach(val => {
    orangedateobj[val] = {selected: true, selectedColor: 'orange'};
  });

  let presentandlesstime = {...greendateobj, ...orangedateobj};
  console.log('new aray', presentandlesstime);
  let presentandlesstimeandabsent = {...presentandlesstime, ...missingDatesobj};
  console.log('fulllll -----------', presentandlesstimeandabsent);
  console.log('GREEN DATE', greendate);
  console.log('ORANGE DATE', orangedate);
  console.log('full date------', greenorange);
  console.log('full time----', time);

  var map = new Map();

  for (var i = 0; i < greenorange.length; i++) {
    map.set(greenorange[i], time[i]);
  }

  for (const key of map.keys()) {
    console.log(key + ' => ' + map.get(key));
  }

  function toastTotalTime(day) {
    for (const key of map.keys()) {
      if (day.dateString == key) {
        ToastAndroid.show('Total Time : ' + map.get(key), ToastAndroid.SHORT);
      }
    }
  }

  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 40,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: 'green',
              width: 34,
              height: 34,
              borderRadius: 50,
            }}></View>
          <Text style={{fontSize: 18, marginTop: 3, marginLeft: 5}}>
            9.5 Hrs
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: 'orange',
              width: 34,
              height: 34,
              borderRadius: 50,
            }}></View>
          <Text style={{fontSize: 18, marginTop: 3, marginLeft: 5}}>
            Less Hrs
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              backgroundColor: 'red',
              width: 34,
              height: 34,
              borderRadius: 50,
            }}></View>
          <Text style={{fontSize: 18, marginTop: 3, marginLeft: 5}}>
            Absent
          </Text>
        </View>
      </View>
      {/* <Button
        title="clickme"
        onPress={() => {
          checkPresentOrNot();
        }}></Button> */}
      <Calendar
        current={`${currentDATE}`} // Current Time and Display here Current System Date
        markedDates={presentandlesstimeandabsent}
        onDayPress={day => {
          toastTotalTime(day);
        }} // Gives the DATE MONTH YEAR AND TIMESTAMP
      />
    </View>
  );
}
const Stack = createStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Attendance Manager" component={HomeScreen} />
        <Stack.Screen
          name="CheckInOut"
          options={{title: 'Check In Out'}}
          component={CheckInOut}
        />
        <Stack.Screen
          name="checkDetails"
          options={{title: 'Attendance Details'}}
          component={checkDetails}
        />
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

    width: 160,
    height: 40,
    padding: 5,
    borderRadius: 10,
  },
});

export default App;
