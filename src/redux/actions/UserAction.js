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
      console.log('token', token);

      myHeaders.append('Authorization', `Bearer ${token}`);
      const response = await fetch(url, {
        method: 'GET',
        headers: myHeaders,
      });
      const res = await response.json();
      load(false);
      if (res.status == 'success') {
        dispatch({type: GET_BIBLE_SCHOOL, payload: res.data});
        console.log('res.data', res.data);
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

export const getBibleSchoolApiUpdate = () => {
  return async dispatch => {
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
      if (res.status == 'success') {
        dispatch({type: GET_BIBLE_SCHOOL, payload: res.data});
      } else {
        Toast.show('Please Try again later');
      }
    } catch (error) {
      console.log('error getBibleSchoolApi', error);
      Toast.show('Server side error');
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

export const courseApi = async () => {
  try {
    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');

    headers.append('Authorization', `Bearer ${token}`);
    const mainUrl = `${Base_Url}courses`;
    const hittingCourseAPI = await fetch(mainUrl, {headers});
    // console.log('1) API. json => hittingCourseAPI ', hittingCourseAPI);

    const jsonCourseAPI = await hittingCourseAPI.json();
    const courseData = jsonCourseAPI.data.map(course => course.id);
    // slice(0, 2).
    // console.log('1) API. courseData', courseData);

    const hitingStoreAPI = await Promise.all(
      courseData.map(id => {
        const formData = new FormData();
        formData.append('course_id', id);
        formData.append('status', 'INCOMPLETE');

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
          formData.append('status', 'INCOMPLETE');

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
          formData.append('status', 'INCOMPLETE');

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
          formData.append('status', 'INCOMPLETE');
          console.log('user_game store wali api ka data', formData);
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
        dispatch({type: GET_GAME, payload: result.data[0]});
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

export const getGameIdAPI = async (id, gameID, load) => {
  load(true);
  const url = `${Base_Url}game-questions-ids/${id}`;
  const token = await AsyncStorage.getItem('token');
  const myHeaders = new Headers({Authorization: `Bearer ${token}`});
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    });
    const res = await response.json();
    load(false);
    if (res.success) {
      const getID = res.gameQuestionsIds.map(item => item.id);
      gameID(getID);
    }
  } catch (error) {
    load(false);
    Toast.show('Server side error');
    console.log('Error in getGameIdAPI:', error);
  }
};

export const gameQuestionAPI = async (item, question_id) => {
  const url = `${Base_Url}user_game_question/store`;
  const myData = new FormData();
  myData.append('game_id', item.id);
  myData.append('assignment_id', item.assignment_id);
  myData.append('lesson_id', item.lesson_id);
  myData.append('course_id', item.course_id);
  myData.append('course_id', item.course_id);
  myData.append('question_id', question_id);

  // question_id.forEach(id => myData.append('question_id', id));
  myData.append('status', 'COMPLETED');
  myData.append('is_correct', 1);

  const myHeaders = new Headers();
  const token = await AsyncStorage.getItem('token');
  myHeaders.append('Authorization', `Bearer ${token}`);
  try {
    const response = await fetch(url, {
      body: myData,
      method: 'POST',
      headers: myHeaders,
    });
    const res = await response.json();
    // console.log('gameQuestionAPI res', res);
  } catch (error) {
    Toast.show('Server side error');
    console.log('Error in gameQuestionAPI:', error);
  }
};
