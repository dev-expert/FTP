import rest from '@feathersjs/rest-client';
import feathers from '@feathersjs/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Api_url} from './utils/config';
import {Toast} from 'native-base';
import {heightPercentageToDP} from 'react-native-responsive-screen';
import * as NavigationService from './routes/NavigationService';

const axiosInstance = axios.create({
  timeout: 30000,
});

const showErrorToast = message => {
  Toast.show({
    text: message,
    duration: 6000,
    position: 'top',
    style: {
      backgroundColor: '#FF0000',
      height: heightPercentageToDP(10),
      borderWidth: 2,
      borderColor: '#FF0000',
      marginTop: heightPercentageToDP(-2),
      borderRadius: 15,
      marginLeft:10,
      marginRight:10
    },
    textStyle: {
      color: '#FFFFFF',
      textAlign: 'center',
    },
  });
};

const onErrorResponseInterceptor = async error => {
  const {response} = error;
  const statusMessage =
    response && response.status !== 408
      ? `Error ${response.status}`
      : 'Cannot connect to the server';

  if (!response) {
    
  }
  else if (response.status === 408) {
    console.warn(statusMessage);
    showErrorToast(statusMessage);
  } else if (response.status === 401) {
    console.warn(statusMessage, response.data.message);
    NavigationService.navigateReset('Login');
  } else if (response.status === 429 || response.status === 404) {
    console.warn(statusMessage, response.data.message);
  } else if (response.status === 500) {
    console.warn(statusMessage, JSON.stringify(response, null, 2));
    showErrorToast('Internal server error');
  } else if (response.status !== 400) {
    console.warn(statusMessage, JSON.stringify(response, null, 2));
    showErrorToast(response.data.message || statusMessage);
  }

  return await Promise.reject(error);
};

axiosInstance.interceptors.response.use(
  response => response,
  onErrorResponseInterceptor,
);

const client = feathers()
  .configure(rest(Api_url).axios(axiosInstance))
  .configure(
    feathers.authentication({
      storage: AsyncStorage,
    }),
  );

export default client;
