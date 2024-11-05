import AsyncStorage from '@react-native-async-storage/async-storage';
import {Base_Url} from '../../utils/Urls';
import {GET_BIBLE_SCHOOL, GET_EVENT} from '../reducer/Holder';
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
      Toast.show('Server side error');
      console.error('Error fetching Bible school data:', error);
    }
  };
};

export const eventApi = load => {
  return async dispatch => {
    load(true);
    const url = `${Base_Url}get/events`;
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
      load(false);
      if (result.status === true) {
        dispatch({type: GET_EVENT, payload: result.data});
      }
    } catch (error) {
      load(false);
      Toast.show('Server side error');
      console.error('Error fetching eventApi data:', error);
    }
  };
};

/*
export const courseApi = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json', // For POST JSON requests
    };

    // Step 1: Fetch initial course data and get the first two course IDs
    const response = await fetch(`${Base_Url}courses`, {headers});
    const json = await response.json();
    const courseData = json.data.slice(0, 2).map(course => course.id);
    console.log('Initial course IDs:', courseData);

    // Step 2: Post each course ID to `user_course` with `course_id` and `status: "incomplete"`
    const userCourseResponses = await Promise.all(
      courseData.map(item => {
        const formData = new FormData();
        formData.append('course_item', item); // Ensure this key matches what the server expects
        formData.append('status', 'incomplete');

        return fetch(`${Base_Url}user_course/${item}`, {
          headers,
          method: 'POST',
          body: formData,
        })
          .then(res => {
            // Log the raw response for debugging
            console.log('Response for course ID:', item, 'Status:', res.status);

            // Check if the response is okay
            if (!res.ok) {
              throw new Error('Network response was not ok: ' + res.statusText);
            }

            // Parse the response
            return res.json();
          })
          .then(data => {
            // Log the parsed data to see its structure
            console.log('Data for course ID:', item, 'Response:', data);

            // Return the appropriate property that contains the ID
            return data.id; // Adjust this line according to the actual response structure
          });
      }),
    );

    // Step 3: Extract IDs from userCourseResponses and (optionally) send them back to the `courses` endpoint
    const finalCourseIds = userCourseResponses.map(course => course.id);
    console.log('Final course IDs from user_course responses:', finalCourseIds);

    // Optionally: Send the finalCourseIds back to the `courses` endpoint
    const finalResponse = await fetch(`${Base_Url}courses`, {
      method: 'POST', // Adjust as per your API requirement
      headers,
      body: JSON.stringify({courseIds: finalCourseIds}),
    });

    const finalData = await finalResponse.json();
    console.log('Final courses response:', finalData);
  } catch (error) {
    console.log('Error in courseApi:', error);
  }
};
*/

export const courseApi = async () => {
  try {
    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');

    headers.append('Authorization', `Bearer ${token}`);

    const hittingCourseAPI = await fetch(`${Base_Url}courses`, {headers});
    // console.log('1) API. json => hittingCourseAPI ', hittingCourseAPI);

    const jsonCourseAPI = await hittingCourseAPI.json();
    const courseData = jsonCourseAPI.data.slice(0, 2).map(course => course.id);
    console.log('1) API. courseData', courseData);

    const hitingStoreAPI = await Promise.all(
      courseData.map(id => {
        const formData = new FormData();
        formData.append('course_id', id);
        formData.append('status', 'incomplete');

        return fetch(`${Base_Url}user_course/store`, {
          headers,
          method: 'POST',
          body: formData,
        });
      }),
    );
    // console.log('2) API. json => hitingStoreAPI ', hitingStoreAPI);
    const jsonStoreAPI = await Promise.all(
      hitingStoreAPI.map(res => res.json()),
    );
    console.log('2) API. jsonStoreAPI', jsonStoreAPI);
    const hittingGetLessonAPI = await Promise.all(
      courseData.map(id => {
        console.log('store api ka id', id);
        return fetch(`${Base_Url}courses/${id}/lessons`, {
          headers,
          method: 'GET',
        });
      }),
    );
    // console.log('3) API. json => hittingGetLessonAPI', hittingGetLessonAPI);
    const jsonGetLessonAPI = await Promise.all(
      hittingGetLessonAPI.map(res => res.json()),
    );
    console.log('3) API. jsonGetLessonAPI', jsonGetLessonAPI);
  } catch (error) {
    console.log('Error in courseAPI:', error);
  }
};
