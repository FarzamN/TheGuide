import AsyncStorage from '@react-native-async-storage/async-storage';
import {Base_Url} from '../../utils/Urls';
import {GET_BIBLE_SCHOOL} from '../reducer/Holder';
import Toast from 'react-native-simple-toast';

/*
export const getBibleSchoolApi = load => {
  return async dispatch => {
    load(true);
    try {
      //   const url = `${Base_Url}bible-school-app`;
      const url = 'https://theguide.us/api/v1/bible-school-app';


      // `Bearer ${token}`
      myHeaders.append(
        'Authorization',
        `Bearer ${'eyJpdiI6Iiswci9rR1d3dENBcDVpaFdoWHZWN0E9PSIsInZhbHVlIjoiQzJwRDRUMkw4WDBUV21iTlFPVU1vMnN4QVU0YjBPM3dNcERrV3h0Ujg5VGZMZmZzM3pNK1BjZE9zSjl3Ti92ZSIsIm1hYyI6Ijc4ZWM2NzA5Y2M1YWQ4YWMzOTRhN2YyZjlkYTUwZmJlZjM5NDA3YWNkMWNkODFkZjcyMmM5OWE1NjZmZjQwNzIiLCJ0YWciOiIifQ=='}`,
      );
      const response = await fetch(url, {
        method: 'GET',
        headers: myHeaders,
      });
      console.log('response', response);
      const res = await response.json();
      console.log('res', res);
      load(false);
      if (res.status == 'success') {
        dispatch({type: GET_BIBLE_SCHOOL, payload: res.states});
      }
    } catch (error) {
      load(false);
      console.log('error getBibleSchoolApi', error);
      Toast.show('Server side error');
    }
  };
};
 */
export const getBibleSchoolApi = load => {
  return async dispatch => {
    const url = `${Base_Url}bible-school-app`;
    const myHeaders = new Headers();
    const token = await AsyncStorage.getItem('token');

    myHeaders.append('Authorization', `Bearer ${token}`);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      });
      const result = await response.json();
      console.log({result});
    } catch (error) {
      console.error('Error fetching Bible school data:', error);
    }
  };
};
