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
  Picker,
  KeyboardAvoidingView,
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
  const [password, setPassword] = useState();

  async function emailVerify() {
    let payload = {email: email, password: password};
    console.log('payload form check----', payload);
    let res = await axios.post(
      'http://192.168.0.102:3000/checkCredentials',
      payload,
    );

    // console.log('>>>>>>>>>>>>>', res.data.status);
    if (res.data.status == true) {
      validation();
    } else if (res.data.status == false) {
      alert('Enter Valid Email and Password');
    }
  }

  const showToast = () => {
    ToastAndroid.show('Logged In', ToastAndroid.SHORT);
  };

  function validation() {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      alert('Enter Valid Email Address and Password');
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
  const [breakTime, setBreakTime] = useState();
  let previousBreakTime = usePrevious(breakTime);
  const [description, setDescription] = useState();
  let previousDescription = usePrevious(description);
  const [checkindateandtime, setcheckindateandtime] = useState();
  const [checkoutdateandtime, setcheckoutdateandtime] = useState();

  const [selectedHourValue, setSelectedHourValue] = useState('01');
  const [selectedMinuteValue, setSelectedMinuteValue] = useState('01');

  const [flagCheckIn, setflagCheckIn] = useState(false);
  const [flagCheckOut, setflagCheckOut] = useState(true);
  const checkInBtnColor = flagCheckIn ? '#eb5527' : '#0F59A5';
  const checkOutBtnColor = flagCheckOut ? '#eb5527' : '#0F59A5';
  const descriptionOpacity = flagCheckIn ? 1 : 0;
  const breaktimeOpacity = flagCheckIn ? 1 : 0;

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
      'http://192.168.0.102:3000/registeruser',
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
      breakTime: breakTime,
    };

    console.log('payload ----', payload);
    let res = await axios.post(
      'http://192.168.0.102:3000/checkouttime',
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

    // const hrs = breakTime.slice(0, 2);
    // const min = breakTime.slice(3, 5);

    // const hrsmin = (hrs, ':', min);

    console.log('Hour :', selectedHourValue);
    console.log('Minute : ', selectedMinuteValue);

    milisecondsbreak(selectedHourValue, selectedMinuteValue);
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

  function milisecondsbreak(hrs, min) {
    var milisecondsbreaktime = (hrs * 60 * 60 + min * 60) * 1000;
    setBreakTime(milisecondsbreaktime);
    console.log('miliseconds ', milisecondsbreaktime);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
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
          <View style={{opacity: breaktimeOpacity}}>
            <Text style={{fontSize: 18, textAlign: 'center', marginTop: 30}}>
              Break Time
            </Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                width: '80%',
                alignSelf: 'center',
              }}
            />
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <View>
                <Text style={{fontSize: 18}}>Select Hrs</Text>
                <Picker
                  selectedValue={selectedHourValue}
                  style={{height: 50, width: 150}}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedHourValue(itemValue)
                  }>
                  <Picker.Item label="00" value="00" />
                  <Picker.Item label="01" value="01" />
                  <Picker.Item label="02" value="02" />
                  <Picker.Item label="03" value="03" />
                  <Picker.Item label="04" value="04" />
                  <Picker.Item label="05" value="05" />
                  <Picker.Item label="06" value="06" />
                  <Picker.Item label="07" value="07" />
                  <Picker.Item label="08" value="08" />
                </Picker>
              </View>
              <View>
                <Text style={{fontSize: 18}}>Select Mins</Text>
                <Picker
                  selectedValue={selectedMinuteValue}
                  style={{height: 50, width: 150}}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedMinuteValue(itemValue)
                  }>
                  <Picker.Item label="00" value="00" />
                  <Picker.Item label="01" value="01" />
                  <Picker.Item label="02" value="02" />
                  <Picker.Item label="03" value="03" />
                  <Picker.Item label="04" value="04" />
                  <Picker.Item label="05" value="05" />
                  <Picker.Item label="06" value="06" />
                  <Picker.Item label="07" value="07" />
                  <Picker.Item label="08" value="08" />
                  <Picker.Item label="09" value="09" />
                  <Picker.Item label="10" value="10" />
                  <Picker.Item label="11" value="11" />
                  <Picker.Item label="12" value="12" />
                  <Picker.Item label="13" value="13" />
                  <Picker.Item label="14" value="14" />
                  <Picker.Item label="15" value="15" />
                  <Picker.Item label="16" value="16" />
                  <Picker.Item label="17" value="17" />
                  <Picker.Item label="18" value="18" />
                  <Picker.Item label="19" value="19" />
                  <Picker.Item label="20" value="20" />
                  <Picker.Item label="21" value="21" />
                  <Picker.Item label="22" value="22" />
                  <Picker.Item label="23" value="23" />
                  <Picker.Item label="24" value="24" />
                  <Picker.Item label="25" value="25" />
                  <Picker.Item label="26" value="26" />
                  <Picker.Item label="27" value="27" />
                  <Picker.Item label="28" value="28" />
                  <Picker.Item label="29" value="29" />
                  <Picker.Item label="30" value="30" />
                  <Picker.Item label="31" value="31" />
                  <Picker.Item label="32" value="32" />
                  <Picker.Item label="33" value="33" />
                  <Picker.Item label="34" value="34" />
                  <Picker.Item label="35" value="35" />
                  <Picker.Item label="36" value="36" />
                  <Picker.Item label="37" value="37" />
                  <Picker.Item label="38" value="38" />
                  <Picker.Item label="39" value="39" />
                  <Picker.Item label="40" value="40" />
                  <Picker.Item label="41" value="41" />
                  <Picker.Item label="42" value="42" />
                  <Picker.Item label="43" value="43" />
                  <Picker.Item label="44" value="44" />
                  <Picker.Item label="45" value="45" />
                  <Picker.Item label="46" value="46" />
                  <Picker.Item label="47" value="47" />
                  <Picker.Item label="48" value="48" />
                  <Picker.Item label="49" value="49" />
                  <Picker.Item label="50" value="50" />
                  <Picker.Item label="51" value="51" />
                  <Picker.Item label="52" value="52" />
                  <Picker.Item label="53" value="53" />
                  <Picker.Item label="54" value="54" />
                  <Picker.Item label="55" value="55" />
                  <Picker.Item label="56" value="56" />
                  <Picker.Item label="57" value="57" />
                  <Picker.Item label="58" value="58" />
                  <Picker.Item label="59" value="59" />
                  <Picker.Item label="60" value="60" />
                </Picker>
              </View>
            </View>
          </View>
          <View style={{marginTop: 10, opacity: descriptionOpacity}}>
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
    </KeyboardAvoidingView>
  );
}

function checkDetails({route, navigation}) {
  const [greendate, setgreendate] = useState([]);
  const [orangedate, setOrangedate] = useState([]);
  const [reddate, setReddate] = useState([]);
  const [greenorange, setgreenorange] = useState([]);

  const [time, settime] = useState([]);
  const [breakTime, setBreakTime] = useState([]);
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
      'http://192.168.0.102:3000/presentorabsent',
      payload,
    );
    let data = res.data;
    console.log('>>>>>>>>>>>>>', data);
    let len = data.length;
    console.log('length', len);
    for (let i = 0; i < len; i++) {
      let data = res.data[i];
      // console.log('>>>>>>>>>>>>>', data);
      let timestamp = new Date(data.checkInDate).getTime();
      let obj = new Date(timestamp);
      let month = obj.getMonth() + 1;
      let year = obj.getFullYear();
      let date = obj.getDate();
      // console.log(timestamp)
      if (month.toString().length < 2) {
        month = '0' + month;
      }
      let checkInDate = year + '/' + month + '/' + date;
      let checkinDateForColor = year + '-' + month + '-' + date;

      let timestampcheckOut = new Date(data.checkOutDate).getTime();
      let obj2 = new Date(timestampcheckOut);
      let monthh = obj2.getMonth() + 1;
      let yearr = obj2.getFullYear();
      let datee = obj2.getDate();
      // console.log(timestamp)
      if (monthh.toString().length < 2) {
        monthh = '0' + monthh;
      }
      let checkOutDate = yearr + '/' + monthh + '/' + datee;
      let checkOutDateForColor = year + '/' + month + '/' + date;

      const checkInTIME = data.checkInTime.slice(0, 8);
      const checkOutTIME = data.checkOutTime.slice(0, 8);
      const checkInDATE = checkInDate;
      const checkOutDATE = checkOutDate;
      console.log(
        'date:--------------------------------------------------------------',
        checkInDATE,
      );
      // const replacedCheckInDATE = checkInDATE.replace(/-/g, '/');
      // const replacedCheckOUTDATE = checkOutDATE.replace(/-/g, '/');

      const combineInDateAndTime = `${checkInDATE} ${checkInTIME}`;
      const combineOutDateAndTime = `${checkOutDATE} ${checkOutTIME}`;

      const start = new Date(`${combineInDateAndTime}`).getTime();
      const end = new Date(`${combineOutDateAndTime}`).getTime();
      console.log(start + '--------------------' + end);
      const difference = end - start;
      console.log('difference----', difference);
      // difference = difference+data.breakTime

      // const diffminusbreak = difference - data.breakTime;

      const seconds = Math.floor((difference / 1000) % 60),
        minutes = Math.floor((difference / (1000 * 60)) % 60),
        hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

      hours = hours < 10 ? '0' + hours + 'hr' : hours + 'hrs';
      minutes = minutes < 10 ? '0' + minutes + 'min' : minutes + 'mins';
      seconds = seconds < 10 ? '0' + seconds + 'sec' : seconds + 'secs';

      const totaltime = hours + ' : ' + minutes;
      console.log('total', totaltime);

      settime(time => [...time, totaltime]);

      if (difference >= 34200000) {
        setgreendate(greendate => [...greendate, checkinDateForColor]);
        setColor('green');
      } else if (difference < 34200000) {
        setOrangedate(orangedate => [...orangedate, checkinDateForColor]);
        setColor('orange');
      }

      setgreenorange(greenorange => [...greenorange, checkinDateForColor]);

      const milisecondss = data.breakTime;
      const minu = Math.floor((milisecondss / 1000 / 60) % 60);
      const hou = Math.floor((milisecondss / 1000 / 3600) % 24);
      if (minu.toString().length < 2) {
        minu = '0' + minu;
      }

      if (hou.toString().length < 2) {
        hou = '0' + hou;
      }
      console.log('-----------', hou, ':', minu);
      const finalBreak = ' Break Time ' + hou + 'hr' + ' : ' + minu + 'min';
      setBreakTime(breakTime => [...breakTime, finalBreak]);
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
  console.log('breaktime--------------', breakTime);

  var map = new Map();

  for (var i = 0; i < greenorange.length; i++) {
    map.set(greenorange[i], [[time[i], breakTime[i]]]);
  }

  for (const key of map.keys()) {
    console.log(key + ' => ' + map.get(key));
  }

  function toastTotalTime(day) {
    for (const key of map.keys()) {
      if (day.dateString == key) {
        ToastAndroid.show(
          'Total Time : ' + map.get(key),
          ToastAndroid.LONG,
          ToastAndroid.SHORT,
        );
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
    marginTop: 10,
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
