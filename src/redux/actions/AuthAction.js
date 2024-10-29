import moment from 'moment';
import {Base_Url} from '../../utils/Urls';
import {
  USER_DETAILS,
  GET_COUNTRY,
  GET_CITY,
  GET_STATE,
} from '../reducer/Holder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

export const LoginApi = (data, load, err) => {
  return async dispatch => {
    try {
      load(true);
      const url = `${Base_Url}login`;
      const myData = new FormData();

      myData.append('email', data.email);
      myData.append('password', data.password);

      const response = await fetch(url, {
        method: 'POST',
        body: myData,
      });

      const res = await response.json();
      if (res.success == true) {
        await AsyncStorage.setItem(
          'user_details',
          JSON.stringify(res.user_data),
        );
        await AsyncStorage.setItem('token', res.user_data.access_token);
        console.log('res.user_data.access_token', res.user_data.access_token);
        await dispatch({
          type: USER_DETAILS,
          payload: res.user_data,
        });
        load(false);
      } else {
        load(false);
        err({visible: true, msg: res.message});
        setTimeout(() => {
          err({visible: false, msg: ''});
        }, 2000);
      }
    } catch (error) {
      load(false);
      Toast.show('Server side error');
      console.log('error LoginApi', error);
    }
  };
};

export const registerApi = async (
  data,
  bday,
  gender,
  city,
  state,
  country,
  back,
  load,
  setError,
) => {
  try {
    load(true);
    const url = `${Base_Url}register`;
    const myData = new FormData();

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    myData.append('first_name', data.f_name);
    myData.append('last_name', data.l_name);
    myData.append('email', data.email);
    myData.append('phone', data.number);
    // myData.append('address', data.address);
    myData.append('password', data.password);
    myData.append('confirm_password', data.password);
    myData.append('gender', gender);
    myData.append('date_of_birth', moment(bday).format('MMMM Do YYYY'));
    myData.append('city', city);
    myData.append('state', state);
    myData.append('country', country);
    myData.append('type', 'father');
    myData.append('time_zone', timeZone);
    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'multipart/form-data');

    const response = await fetch(url, {
      method: 'POST',
      headers: myHeaders,
      body: myData,
    });

    const responseData = await response.json();

    if (responseData.success == true) {
      back();
      load(false);
    } else {
      load(false);
      const errorMessages = [];
      if (responseData.errors) {
        for (const [field, messages] of Object.entries(responseData.errors)) {
          errorMessages.push(`${field}: ${messages.join(', ')}`);
        }
      }
      setError({
        visible: true,
        msg: errorMessages.join('\n'),
      });

      setTimeout(() => {
        setError({visible: false, msg: ''});
      }, 2000);
    }
  } catch (error) {
    load(false);
    console.log('Network or other error in RegisterApi:', error);
    Toast.show('Server side error');
  }
};

export const checkApi = () => {
  return async dispatch => {
    try {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log('Simple GET Request error:', error));
    } catch (error) {
      console.log('error checkApi', error);
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

export const getCoutry = () => {
  return async dispatch => {
    try {
      const url = `${Base_Url}countries/list`;
      const response = await fetch(url);

      const responseData = await response.json();

      if (responseData.status == true) {
        dispatch({type: GET_COUNTRY, payload: responseData.countries});
      }
    } catch (error) {
      console.log('error getCoutry', error);
      Toast.show('Server side error');
    }
  };
};

export const getCity = () => {
  return async dispatch => {
    try {
      const url = `${Base_Url}cities/list`;

      const response = await fetch(url);

      const responseData = await response.json();

      if (responseData.status == true) {
        dispatch({type: GET_CITY, payload: responseData.cities});
      }
    } catch (error) {
      console.log('error getCity', error);
      Toast.show('Server side error');
    }
  };
};

export const getState = () => {
  return async dispatch => {
    try {
      const url = `${Base_Url}states/list`;

      const response = await fetch(url);

      const responseData = await response.json();

      if (responseData.status == true) {
        dispatch({type: GET_STATE, payload: responseData.states});
      }
    } catch (error) {
      console.log('error getState', error);
      Toast.show('Server side error');
    }
  };
};

export const getStateByCountry = async (countryID, load, data) => {
  load(true);
  try {
    const url = `${Base_Url}get-state-by-country/${countryID}`;

    const response = await fetch(url);

    const responseData = await response.json();
    if (responseData.status == true) {
      load(false);
      data(responseData.states);
    } else {
      load(false);
    }
  } catch (error) {
    load(false);
    console.log('error getStateByCountry', error);
    Toast.show('Server side error');
  }
};

export const getCityByState = async (stateID, load, data) => {
  load(true);
  try {
    const url = `${Base_Url}get-city-by-state/${stateID}`;

    const response = await fetch(url);

    const responseData = await response.json();
    if (responseData.status == true) {
      load(false);
      data(responseData.cities);
    } else {
      load(false);
    }
  } catch (error) {
    load(false);
    console.log('error getCityByState', error);
    Toast.show('Server side error');
  }
};

export const editProfile = (
  id,
  data,
  bday,
  gender,
  city,
  state,
  country,
  back,
  load,
) => {
  return async dispatch => {
    try {
      load(true);
      const url = `${Base_Url}user/profile-update/${id}`;

      const myData = new FormData();

      myData.append('first_name', data.f_name);
      myData.append('email', data.email);
      myData.append('phone', data.number);
      myData.append('gender', gender);
      myData.append('date_of_birth', moment(bday).format('MMMM Do YYYY'));
      myData.append('city', city);
      myData.append('state', state);
      myData.append('country', country);
      const myHeaders = new Headers();
      myHeaders.append('Accept', 'application/json');
      myHeaders.append('Content-Type', 'multipart/form-data');

      const response = await fetch(url, {
        method: 'POST',
        headers: myHeaders,
        body: myData,
      });
      const responseData = await response.json();
      load(true);
      if (responseData.status == true) {
        back();
        dispatch({type: USER_DETAILS, payload: responseData.user_data});
      }
    } catch (error) {
      load(true);
      console.log('error editProfile', error);
      Toast.show('Server side error');
    }
  };
};
