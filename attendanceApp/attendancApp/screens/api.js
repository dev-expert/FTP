const axios = require('axios');
const localhost = 'http://192.168.0.103:3000/';

export const CheckCredentialsApi = async payload => {
  try {
    return await axios.post(`${localhost}login`, payload);
  } catch (err) {
    return err;
  }
};

export const RegisterUserApi = async payload => {
  try {
    return await axios.post(`${localhost}checkintime`, payload);
  } catch (err) {
    return err;
  }
};

export const CheckOutTimeApi = async payload => {
  try {
    return await axios.post(`${localhost}checkouttime`, payload);
  } catch (err) {
    return err;
  }
};

export const PresentandAbsentApi = async payload => {
  try {
    return await axios.post(`${localhost}presentorabsent`, payload);
  } catch (err) {
    return err;
  }
};
