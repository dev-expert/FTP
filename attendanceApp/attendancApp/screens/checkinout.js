import 'react-native-gesture-handler';
import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  ToastAndroid,
  TouchableWithoutFeedback,
  Keyboard,
  Picker,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import GetLocation from 'react-native-get-location';
import LinearGradient from 'react-native-linear-gradient';
import NewHeader from '../common/header';
const axios = require('axios');
import styles from './styles';
import {RegisterUserApi, CheckOutTimeApi} from './api';
import { showNotification, handleScheduleNotification, handleCancel } from '../notification/notification_sound';


function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

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
  const [description, setDescription] = useState('');
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
  const pickerDisabledFlag = flagCheckIn ? true : false;
  const localStorageFlag = 'true';
  const descriptionDisableFlag = flagCheckIn ? true : false;
  // const {user_id} = navigation.state.params;

  const datahour = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
  const datamin = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
  ];

  //-------------------------------Setting the useEffect and use the Previous Valye in useState Hooks-------------------------------------------
  useEffect(async () => {
    const user_id = await AsyncStorage.getItem('userid')
    if (previousLng != lng) {
      makeGetRequestforEmailCheckinLatlng(user_id);
    }
    if (previousCheckOutTime != checkOutTime) {
      makeGetRequestforCheckoutDescription(user_id);
    }
    if ((await AsyncStorage.getItem('flag')) == 'true') {
      setflagCheckIn(true);
      setflagCheckOut(false);
    } else {
      setflagCheckIn(false);
      setflagCheckOut(true);
    }
  });

  //-------------------------------Save Data Locally for Session---------------------------------------------------------------------------------
  function saveDataLocally() {
    let localStorageFlagg = localStorageFlag;
    AsyncStorage.setItem('flag', localStorageFlagg);
    // alert('SET VALUE', localStorageFlagg)
  }
  //-------------------------------Remove Data from Local Storage to Remove the Session----------------------------------------------------------
  const removeLocalData = async () => {
    try {
      await AsyncStorage.removeItem('flag');
    } catch (error) {
      alert(error);
    }
  };
  //-------------------------------Calling the end point and send the data for checkin to backend by payload-------------------------------------
  async function makeGetRequestforEmailCheckinLatlng(user_id) {
    let payload = {
      user_id: user_id,
      checkInDate: checkInDate,
      checkInTime: checkInTime,
      checkindateandtime: checkindateandtime,
      lat: lat,
      lng: lng,
    };
    console.log('payload ----', payload);
    let res = await RegisterUserApi(payload);
    let data = res.data;
    console.log('>>>>>>>>>>>>>', data);
  }

  //-------------------------------Calling the end point and send the data for checkout to backend by payload------------------------------------
  async function makeGetRequestforCheckoutDescription(user_id) {
    let payload = {
      user_id: user_id,
      checkOutTime: checkOutTime,
      checkOutDate: checkOutDate,
      checkoutdateandtime: checkoutdateandtime,
      description: description,
      breakTime: breakTime,
    };

    console.log('payload ----', payload);
    let res = await CheckOutTimeApi(payload);

    if (res && res.data) {
      setDescription('');
    }
  }

  //--------------------------------Get the CheckIn Date and Time and setState to checkindateandtime Hook----------------------------------------
  function checkinddateandtime() {
    const date = new Date();
    setcheckindateandtime(date);
  }

  //--------------------------------Get the CheckOut Date and Time and setState to checkoutdateandtime Hook--------------------------------------
  function checkoutddateandtime() {
    const date = new Date();
    setcheckoutdateandtime(date);
  }

  //--------------------------------Get the checkintime and setState to checkintime Hook----------------------------------------------------------
  function checkInTTime() {
    const hours = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    const time = hours + ':' + min + ':' + sec;
    setCheckInTime(time);
  }

  //--------------------------------Get the checkindate and setState to checkindate Hook----------------------------------------------------------
  function checkInDDate() {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const fullDate = year + '-' + month + '-' + date;
    setcheckInDate(fullDate);
  }

  //--------------------------------Get the Lat and Long and setState to lat and lng Hook----------------------------------------------------------
  function getLatLng() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        setLat(location.latitude);
        setLng(location.longitude);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  }

  //--------------------------------Calling this Function on CheckIn Button Click------------------------------------------------------------------
  function checkInTTimeandgetLatLng() {
    checkInDDate();
    checkInTTime();
    getLatLng();
    saveDataLocally();
    checkinddateandtime();
    showToastInCheckIn();
    handleScheduleNotification('Checkout Reminder', 'Please do Checkout! If Already Done Ignore this Notification.')
  }

  //--------------------------------Calling this Function on CheckOut Button Click------------------------------------------------------------------
  function checkOutTTimeDescRemoveLocalData() {
    checkOutTTime();
    checkOutDDate();
    removeLocalData();
    checkoutddateandtime();
    makeGetRequestforCheckoutDescription();
    showToastInCheckOut();
    milisecondsbreak(selectedHourValue, selectedMinuteValue);
  }

  //--------------------------------Get the checkouttime and setState to checkouttime Hook----------------------------------------------------------
  function checkOutTTime() {
    const hours = new Date().getHours();
    const min = new Date().getMinutes();
    const sec = new Date().getSeconds();
    const timee = hours + ':' + min + ':' + sec;
    setCheckOutTime(timee);
  }

  //--------------------------------Get the checkoutdate and setState to checkoutdate Hook-----------------------------------------------------------
  function checkOutDDate() {
    const date = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const year = new Date().getFullYear();
    const fullDate = year + '-' + month + '-' + date;
    setcheckOutDate(fullDate);
  }

  //--------------------------------Show Toast on CheckedIn--------------------------------------------------------------------------------------------
  const showToastInCheckIn = () => {
    ToastAndroid.show(
      'Checked In Successfully',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  //--------------------------------Show Toast on CheckedOut--------------------------------------------------------------------------------------------
  const showToastInCheckOut = () => {
    ToastAndroid.show(
      'Checked Out Successfully',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  //--------------------------------Set the Break Time in Miliseconds-----------------------------------------------------------------------------------
  function milisecondsbreak(hrs, min) {
    var milisecondsbreaktime = (hrs * 60 * 60 + min * 60) * 1000;
    setBreakTime(milisecondsbreaktime);
    console.log('miliseconds ', milisecondsbreaktime);
  }

  //--------------------------------Map the Hour Array with Picker.Item---------------------------------------------------------------------------------------
  const hourdata = datahour.map(value => (
    <Picker.Item label={value} value={value} />
  ));

  //--------------------------------Map the Minute Array with Picker.Item---------------------------------------------------------------------------------------
  const mindata = datamin.map(value => (
    <Picker.Item label={value} value={value} />
  ));

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('userid');
      navigation.navigate('HomeScreen')
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <NewHeader
        accessibilityLabel="menu"
        icon={'ios-menu'}
        centerText={'Check In Out'}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View>
            <View style={{ flexDirection: 'row' , justifyContent: 'space-around', marginTop: 20 }}>
              <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => removeToken() }>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableOpacity>
              <LinearGradient
                colors={['#833ab4', '#fd1d1d', '#fcb045']}
                style={styles.myAttendanceBtn}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('checkDetails');
                  }}>
                  <Text style={{fontSize: 20, color: 'white'}}>
                    My Attendance
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
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
                activeOpacity={0.6}
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
                activeOpacity={0.6}
                onPress={() => {
                  checkOutTTimeDescRemoveLocalData(),
                    setflagCheckIn(false),
                    setflagCheckOut(true);
                }}
                disabled={flagCheckOut}>
                <Text style={{fontSize: 20, color: 'white'}}>CheckOut</Text>
              </TouchableOpacity>
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
                    enabled={pickerDisabledFlag}
                    style={{height: 50, width: 150}}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedHourValue(itemValue)
                    }>
                    {hourdata}
                  </Picker>
                </View>
                <View>
                  <Text style={{fontSize: 18}}>Select Mins</Text>
                  <Picker
                    selectedValue={selectedMinuteValue}
                    enabled={pickerDisabledFlag}
                    style={{height: 50, width: 150}}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedMinuteValue(itemValue)
                    }>
                    {mindata}
                  </Picker>
                </View>
              </View>
            </View>
            <View style={{marginTop: 10, opacity: descriptionOpacity}}>
              <Text style={{textAlign: 'center', fontSize: 20}}>
                Description
              </Text>

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
    </>
  );
}

export default CheckInOut;
