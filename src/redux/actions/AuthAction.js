import {Base_Url} from '../../utils/Urls';
import {USER_DETAILS} from '../reducer/Holder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

export const LoginApi = (data, setLoader, err) => {
  return async dispatch => {
    try {
      setLoader(true);
      const url = `${Base_Url}login`;
      const myData = new FormData();

      myData.append('email', data.email);
      myData.append('password', data.password);

      const response = await fetch(url, {
        method: 'POST',
        body: myData,
      });

      const responseData = await response.json();
      if (responseData.success == true) {
        await AsyncStorage.setItem('user_details', 'true');
        dispatch({type: USER_DETAILS, payload: true});
        setLoader(false);
      } else {
        setLoader(false);
        err({visible: true, mag: responseData.message});
        setTimeout(() => {
          err({visible: false, mag: ''});
        }, 2000);
      }
    } catch (error) {
      setLoader(false);
      Toast.show('Server side error');
      console.log('error LoginApi', error);
    }
  };
};

export const RegisterApi = (data, setLoader, setError, setMsg) => {
  return async dispatch => {
    try {
      setLoader(true);
      const url = `${Base_Url}registration`;

      const myData = new FormData();

      myData.append('email', data.email);
      myData.append('password', data.password);
      myData.append('password_confirm', data.c_password);
      myData.append('email_check', 1);

      const response = await fetch(url, {
        method: 'POST',
        body: myData,
      });
      const responseData = await response.json();
      console.log('responseData', responseData);
      if (responseData.success == true) {
        await AsyncStorage.setItem('user_details', 'true');
        dispatch({type: USER_DETAILS, payload: true});
        setLoader(false);
      } else {
        setLoader(false);
        setMsg(responseData.message);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2000);
      }
    } catch (error) {
      setLoader(false);
      console.log('error RegisterApi', error);
      Toast.show('Server side error');
    }
  };
};

export const LogOutApi = () => {
  return async dispatch => {
    try {
      await AsyncStorage.removeItem('user_details');
      dispatch({type: USER_DETAILS, payload: null});

      const url = `${Base_Url}logout`;

      const response = await fetch(url);

      const responseData = await response.json();
      console.log(responseData);

      if (responseData.ok) {
        await AsyncStorage.removeItem('user_details');
        dispatch({type: USER_DETAILS, payload: false});
      }
    } catch (error) {
      console.log('error LogOutApi', error);
      Toast.show('Server side error');
    }
  };
};
