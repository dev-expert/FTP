import 'react-native-gesture-handler';
import React, {useEffect, useState, useRef} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import {Calendar} from 'react-native-calendars';
import NewHeader from '../common/header';
import styled from 'styled-components/native';
import {FontFamily} from '../../common/colors';
const axios = require('axios');

function checkDetails({route, navigation}) {
  const [greendate, setgreendate] = useState([]);
  const [orangedate, setOrangedate] = useState([]);
  const [reddate, setReddate] = useState([]);
  const [greenorange, setgreenorange] = useState([]);

  const [time, settime] = useState([]);
  const [breakTime, setBreakTime] = useState([]);
  const [color, setColor] = useState();
  const {user_id} = navigation.state.params;

  const currentDATE = new Date();

  useEffect(async () => {
    let payload = {
      user_id: user_id,
    };
    console.log('payload ----', payload);
    let res = await axios.post(
      'http://192.168.0.103:3000/presentorabsent',
      payload,
    );
    let data = res.data;
    console.log('>>>>>>>>>>>>>', data);
    let len = data.length;

    for (let i = 0; i < len; i++) {
      let data = res.data[i];

      let timestamp = new Date(data.checkInDate).getTime();
      let obj = new Date(timestamp);
      let month = obj.getMonth() + 1;
      let year = obj.getFullYear();
      let date = obj.getDate();

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

      if (monthh.toString().length < 2) {
        monthh = '0' + monthh;
      }
      let checkOutDate = yearr + '/' + monthh + '/' + datee;
      let checkOutDateForColor = year + '/' + month + '/' + date;

      const checkInTIME = data.checkInTime.slice(0, 8);
      const checkOutTIME = data.checkOutTime.slice(0, 8);
      const checkInDATE = checkInDate;
      const checkOutDATE = checkOutDate;

      const combineInDateAndTime = `${checkInDATE} ${checkInTIME}`;
      const combineOutDateAndTime = `${checkOutDATE} ${checkOutTIME}`;

      const start = new Date(`${combineInDateAndTime}`).getTime();
      const end = new Date(`${combineOutDateAndTime}`).getTime();

      const difference = end - start;

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
  console.log('Less Time-', presentandlesstime);
  let presentandlesstimeandabsent = {...presentandlesstime, ...missingDatesobj};

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
      <>
      <NewHeader
        accessibilityLabel="menu"
        icon={'ios-menu'}
        centerText={'Attendance Details'}
        // Navigation={() => props.navigation.dispatch(DrawerActions.openDrawer())}
      />
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

      <Calendar
        current={`${currentDATE}`}
        markedDates={presentandlesstimeandabsent}
        onDayPress={day => {
          toastTotalTime(day);
        }}
      />
    </View>
    </>
  );
}

export default checkDetails;
