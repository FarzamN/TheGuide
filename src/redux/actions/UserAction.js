import AsyncStorage from '@react-native-async-storage/async-storage';
import {Base_Url} from '../../utils/Urls';
import {GET_BIBLE_SCHOOL, GET_EVENT, GET_GAME} from '../reducer/Holder';
import Toast from 'react-native-simple-toast';

export const getBibleSchoolApi = load => {
  return async dispatch => {
    load(true);
    try {
      const url = `${Base_Url}get-incomplete-game`;

      const myHeaders = new Headers();
      const token = await AsyncStorage.getItem('token');

      myHeaders.append('Authorization', `Bearer ${token}`);
      const response = await fetch(url, {
        method: 'GET',
        headers: myHeaders,
      });
      const res = await response.json();
      load(false);
      if (res.status == 'success') {
        dispatch({type: GET_BIBLE_SCHOOL, payload: res.data});
      } else {
        Toast.show('Please Try again later');
      }
    } catch (error) {
      load(false);
      console.log('error getBibleSchoolApi', error);
      Toast.show('Server side error');
    }
  };
};

/*
export const getBibleSchoolApi = load => {
  return async dispatch => {
    const url = `${Base_Url}get-incomplete-game`;
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
*/

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
    // console.log('1) API. courseData', courseData);

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
    // console.log('2) API. jsonStoreAPI', jsonStoreAPI);
    const hittingGetLessonAPI = await Promise.all(
      courseData.map(id => {
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
    // console.log('3) API. jsonGetLessonAPI', jsonGetLessonAPI);

    const hittingLessonStoreAPI = await Promise.all(
      jsonGetLessonAPI.map(lesson => {
        const getLessonData = lesson.data.map(data => {
          const formData = new FormData();
          formData.append('lesson_id', data.id);
          formData.append('course_id', data.course_id);
          formData.append('status', 'incomplete');

          return fetch(`${Base_Url}user_lesson/store`, {
            headers,
            method: 'POST',
            body: formData,
          });
        });
        return Promise.all(getLessonData);
      }),
    );
    // console.log('4) API. json => hittingLessonStoreAPI', hittingLessonStoreAPI);
    const jsonLessonGetStore = await Promise.all(
      hittingLessonStoreAPI.flat().map(async res => await res.json()),
    );
    // console.log('4) API. jsonLessonGetStore', jsonLessonGetStore);

    const hittingLessonAssigmentAPI = await Promise.all(
      jsonGetLessonAPI.map(lesson => {
        const getLessonStoreData = lesson.data.map(data => {
          return fetch(`${Base_Url}lessons/${data.id}/assignments`, {
            headers,
            method: 'GET',
          });
        });
        return Promise.all(getLessonStoreData);
      }),
    );
    // console.log(
    //   '5) API. json => hittingLessonAssigmentAPI',
    //   hittingLessonAssigmentAPI,
    // );
    const jsonLessonAssigmentAPI = await Promise.all(
      hittingLessonAssigmentAPI.flat().map(async res => await res.json()),
    );
    // console.log('5) API. jsonLessonAssigmentAPI', jsonLessonAssigmentAPI);

    const hittingAssigmentStore = await Promise.all(
      jsonLessonAssigmentAPI.map(assigment => {
        const getAssigmentData = assigment.data.map(data => {
          const formData = new FormData();
          formData.append('assignment_id', data.id);
          formData.append('lesson_id', data.lesson_id);
          formData.append('course_id', data.course_id);
          formData.append('status', 'incomplete');

          return fetch(`${Base_Url}user_assignment/store`, {
            headers,
            method: 'POST',
            body: formData,
          });
        });
        return Promise.all(getAssigmentData);
      }),
    );

    // console.log('6) API. json => hittingAssigmentStore', hittingAssigmentStore);
    const jsonAssigmentStore = await Promise.all(
      hittingAssigmentStore.flat().map(async res => await res.json()),
    );
    // console.log('6) API. jsonAssigmentStore', jsonAssigmentStore);

    const hittingGetGameApi = await Promise.all(
      jsonLessonAssigmentAPI.map(assigment => {
        // Return the array of fetch promises from the inner map
        return Promise.all(
          assigment.data.map(data => {
            return fetch(`${Base_Url}assignment/${data.id}/get-game`, {
              headers,
              method: 'GET',
            });
          }),
        );
      }),
    );
    // console.log('7 API. json => hittingGetGameApi', hittingGetGameApi);
    const jsonGetGame = await Promise.all(
      hittingGetGameApi.flat().map(res => res.json()),
    );
    // console.log('7) API. jsonGetGame', jsonGetGame);

    const hittingUserGameStore = await Promise.all(
      jsonGetGame.map(game => {
        const getGameData = game.data.map(data => {
          const formData = new FormData();
          formData.append('game_id', data.id);
          formData.append('assignment_id', data.assignment_id);
          formData.append('lesson_id', data.lesson_id);
          formData.append('course_id', data.course_id);
          formData.append('status', 'incomplete');

          return fetch(`${Base_Url}user_game/store`, {
            headers,
            method: 'POST',
            body: formData,
          });
        });
        return Promise.all(getGameData);
      }),
    );
    // console.log('8 API. json => hittingUserGameStore', hittingUserGameStore);
    const jsonStoreGame = await Promise.all(
      hittingUserGameStore.flat().map(res => res.json()),
    );
    // console.log('8) API. jsonStoreGame', jsonStoreGame);
  } catch (error) {
    console.log('Error in courseAPI:', error);
  }
};

export const getGameApi = (load, id) => {
  return async dispatch => {
    load(true);
    const url = `${Base_Url}get-game-data/${id}`;
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
      if (result.success === true) {
        load(false);
        dispatch({type: GET_GAME, payload: result.data});
      } else {
        load(false);
      }
    } catch (error) {
      load(false);
      Toast.show('Server side error');
      console.error('Error fetching getGameApi data:', error);
    }
  };
};
