import {
  GET_CITY,
  GET_STATE,
  GET_COUNTRY,
  USER_DETAILS,
  API_SUCCESS,
} from '../reducer/Holder';
import moment from 'moment';
import {Base_Url} from '../../utils/Urls';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        await dispatch({
          type: USER_DETAILS,
          payload: res.user_data,
        });
        dispatch({
          type: API_SUCCESS,
          payload: res.user_data.user_game_api_status,
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
    const url = `${Base_Url}logout`;
    await AsyncStorage.removeItem('user_details');
    dispatch({type: USER_DETAILS, payload: null});

    const token = await AsyncStorage.getItem('token');
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `Bearer ${token}`);
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: myHeaders,
      });
      const respons = await res.json();
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
        const us = {
          id: 231,
          shortname: 'US',
          name: 'United States',
          phonecode: 1,
        };
        const countriesWithUS = [us, ...responseData.countries];

        dispatch({
          type: GET_COUNTRY,
          payload: countriesWithUS,
        });
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
  goBack,
  load,
) => {
  return async dispatch => {
    load(true);
    const url = `${Base_Url}user/profile-update/${id}`;

    const myData = new FormData();

    myData.append('first_name', data.f_name);
    myData.append('gender', gender);
    myData.append('date_of_birth', moment(bday).format('MMMM Do YYYY'));
    {
      city && myData.append('city', city.id);
    }
    {
      state && myData.append('state', state.id);
    }
    {
      country && myData.append('country', country.id);
    }

    const myHeaders = new Headers();
    const token = await AsyncStorage.getItem('token');

    myHeaders.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: myHeaders,
        body: myData,
      });
      const res = await response.json();
      load(false);
      if (res.success) {
        goBack();
        console.log('in profile edit api res.user_data', res.user_data);
        dispatch({type: USER_DETAILS, payload: res.user_data});
      }
    } catch (error) {
      load(false);
      console.log('error editProfile', error);
      Toast.show('Server side error');
    }
  };
};

export const updateImage = (id, image, onClose) => {
  return async dispatch => {
    try {
      const url = `${Base_Url}user-profile/image/upload/${id}`;
      // const url = `https://theguide.us/api/v1/profile/image/upload`;
      const token = await AsyncStorage.getItem('token');
      const myData = new FormData();

      myData.append('avatar', image);

      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);

      console.log('image ==>', image);

      const response = await fetch(url, {
        body: myData,
        method: 'POST',
        headers: myHeaders,
      });
      const res = await response.json();
      console.log('res', res);
      if (res.success) {
        onClose();
        Toast.show('Successfuly upload image');
        dispatch({type: USER_DETAILS, payload: res.user_data});
      }
      // else {
      //   // console.log('Upload failed:', res.message);
      //   Toast.show('Failed to upload image');
      // }
    } catch (error) {
      console.log('error updateImage', error);
      Toast.show('Server side error');
    }
  };
};
