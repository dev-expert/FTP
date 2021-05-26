import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import * as NavigationService from './routes/NavigationService';
import Routes from './routes/routes';
import {AsyncStorage} from 'react-native';
import CheckInOut from './screens/checkinout'

function App() {
  useEffect(async () => {
      NavigationService.setNavigator(navigator);
      if ((await AsyncStorage.getItem('token')) && (await AsyncStorage.getItem('user_id') != 0) ) {
         
        alert('Present in local')
        NavigationService.navigate('CheckInOut', {user_id: await AsyncStorage.getItem('user_id')})
      } else{
        alert("not present in local")
      }
    })
  return (
        <Routes
          ref={nav => {
            navigator = nav;
          }}
        />
        
  );
}
export default App;
