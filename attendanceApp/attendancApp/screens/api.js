export const CheckCredentialsApi = async () => {
  try {
    return await axios.post(
      'http://192.168.0.103:3000/checkCredentials',
      payload,
    );
  } catch (err) {
    return err;
  }
};

export const RegisterUserApi = async () => {
  try {
    return await axios.post('http://192.168.0.103:3000/registeruser', payload);
  } catch (err) {
    return err;
  }
};

export const CheckOutTimeApi = async () => {
  try {
    return await axios.post('http://192.168.0.103:3000/checkouttime', payload);
  } catch (err) {
    return err;
  }
};

export const CheckOutTimeApi = async () => {
  try {
    return await axios.post(
      'http://192.168.0.103:3000/presentorabsent',
      payload,
    );
  } catch (err) {
    return err;
  }
};
