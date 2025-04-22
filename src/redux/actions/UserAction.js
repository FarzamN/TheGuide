import {
  GET_GAME,
  GET_EVENT,
  BIBLE_TIME,
  PRAYER_TIME,
  PRAY_STATUS,
  API_SUCCESS,
  BIBLE_STREAK,
  PRAYER_STREAK,
  GET_BIBLE_SCHOOL,
  USER_TOTAL_POINTS,
  PRAYER_SUPPORT_GOAL,
  IS_SPONSOR,
  MINISTRY_PROJECT,
  SPONSOR_DATA,
  PUBLIC_POOL_POINT,
  GET_NOTE,
  GET_REVIEW_GAME,
  GET_CALENDAR_DATA,
  RECIEVED_CARD,
  CHAT_CONTACTS_DATA,
  CHAT_GROUP_DATA,
  CHAT_TOPIC_DATA,
} from '../reducer/Holder';
import {Base_Url} from '../../utils/Urls';
import Toast from 'react-native-simple-toast';
import {playSound} from '../../utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getBibleSchoolApi = load => {
  return async dispatch => {
    load(true);
    const url = `${Base_Url}get-incomplete-game`;

    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');

    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {headers});
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
      // Toast.show('Server side error');
    }
  };
};

export const bassChalo = async () => {
  const url = `${Base_Url}user-course-lesson-assignment-game`;
  const myHeaders = new Headers();
  const token = await AsyncStorage.getItem('token');
  myHeaders.append('Authorization', `Bearer ${token}`);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: myHeaders,
    });
    const res = await response.json();
  } catch (error) {
    console.log('error bassChalo', error);
    // Toast.show('Server side error');
  }
};

export const getBibleSchoolApiUpdate = () => {
  return async dispatch => {
    const url = `${Base_Url}get-incomplete-game`;

    const myHeaders = new Headers();
    const token = await AsyncStorage.getItem('token');

    myHeaders.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: myHeaders,
      });
      const res = await response.json();
      if (res.status == 'success') {
        dispatch({type: GET_BIBLE_SCHOOL, payload: res.data});
      } else {
        console.log('Please Try again later');
      }
    } catch (error) {
      console.log('error getBibleSchoolApi', error);
      // Toast.show('Server side error');
    }
  };
};

export const complete_assigment = ids => {
  ids.map(async id => {
    const url = `${Base_Url}user_assignment/update?assignment_id=${id}`;
    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {
        headers,
        method: 'POST',
      });
      const res = await response.json();
      if (res.status) {
        console.log('res', res);
      }
    } catch (error) {
      // Toast.show('Server side error');
      console.log('error complete_assigment', error);
    }
  });
};

export const eventApi = (tabName, load) => {
  return async dispatch => {
    load(true);
    const url = `${Base_Url}get-events/${tabName}`;
    const myHeaders = new Headers();
    try {
      const response = await fetch(url);
      const result = await response.json();
      load(false);
      if (result.status) {
        dispatch({type: GET_EVENT, payload: result.data});
      }
    } catch (error) {
      load(false);
      // Toast.show('Server side error');
      console.error('Error fetching eventApi data:', error);
    }
  };
};

export const bariWaliAPI = () => {
  return async dispatch => {
    try {
      console.log('kya meri api hit hwi');
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

      // when all api will hit successfully this api will hit
      // dispatch(bigApiSuccess());

      const hittingCompletedApi = await fetch(
        `${Base_Url}user-game-api-success`,
        {
          headers,
          method: 'POST',
        },
      );

      const resOfComplete = await hittingCompletedApi.json();
      if (resOfComplete.success) {
        dispatch({type: API_SUCCESS, payload: 1});
      }
    } catch (error) {
      console.log('Error in courseAPI:', error);
    }
  };
};

export const studentRoleGivenAPI = async () => {
  const url = `${Base_Url}assign-student-role-user`;
  const headers = new Headers();
  const token = await AsyncStorage.getItem('token');

  headers.append('Authorization', `Bearer ${token}`);

  try {
    const response = await fetch(url, {headers});
    const result = await response.json();
  } catch (error) {
    console.error('Error fetching studentRoleGivenAPI data:', error);
  }
};

export const getGameApi = (load, id) => {
  return async dispatch => {
    load(true);
    const url = `${Base_Url}get-game-data/${id}`;
    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');

    headers.append('Authorization', `Bearer ${token}`);

    try {
      const response = await fetch(url, {headers});
      const result = await response.json();
      if (result.success) {
        load(false);
        dispatch({type: GET_GAME, payload: result.data[0]});
      } else {
        load(false);
      }
    } catch (error) {
      load(false);
      // Toast.show('Server side error');
      console.error('Error fetching getGameApi data:', error);
    }
  };
};

export const getReviewGameApi = load => {
  return async dispatch => {
    load(true);
    const url = `${Base_Url}get-reviewable-questions-game`;
    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');

    headers.append('Authorization', `Bearer ${token}`);

    try {
      const response = await fetch(url, {headers});
      const result = await response.json();
      if (result.success) {
        load(false);
        dispatch({type: GET_REVIEW_GAME, payload: result.data});
      } else {
        load(false);
      }
    } catch (error) {
      load(false);
      // Toast.show('Server side error');
      console.error('Error fetching getReviewGameApi data:', error);
    }
  };
};

export const getGameIdAPI = async (id, load) => {
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
    }
  } catch (error) {
    load(false);
    // Toast.show('Server side error');
    console.log('Error in getGameIdAPI:', error);
  }
};

export const gameQuestionAPI = (
  item,
  question_ids,
  goBack,
  load,
  completed,
) => {
  return async dispatch => {
    load(true);

    // Helper function to handle individual requests
    const handleQuestionRequest = async id => {
      const url = `${Base_Url}user_game_question/store`;

      const myData = new FormData();
      myData.append('game_id', item.id);
      myData.append('assignment_id', item.assignment_id);
      myData.append('lesson_id', item.lesson_id);
      myData.append('course_id', item.course_id);
      myData.append('question_id', id);
      myData.append('status', 'COMPLETED');
      myData.append('completed_on', new Date().toISOString());
      myData.append('is_correct', 1);

      try {
        const token = await AsyncStorage.getItem('token');
        const headers = {Authorization: `Bearer ${token}`};

        const response = await fetch(url, {
          method: 'POST',
          headers,
          body: myData,
        });

        const res = await response.json();

        if (res.success) {
          console.log(`Success for question_id: ${id}`, res);
          return true;
        } else {
          console.error(`Failed for question_id: ${id}`, res);
          return false;
        }
      } catch (error) {
        console.error(`Error for question_id ${id}:`, error.message);
        return false;
      }
    };

    try {
      const results = await Promise.all(
        question_ids.map(id => handleQuestionRequest(id)),
      );

      const allSuccessful = results.every(result => result);
      load(false);
      if (allSuccessful) {
        completed(false);
        goBack();
        dispatch(getBibleSchoolApiUpdate());
      }
    } catch (error) {
      load(false);
      console.error('Error while processing questions:', error.message);
    } finally {
      load(false);
    }
  };
};

export const prayerCreate = async (data, setData) => {
  const url = `${Base_Url}prayer-create-update/${null}?`;
  const myData = new FormData();
  const ud = await AsyncStorage.getItem('user_details');
  const userData = JSON.parse(ud);
  myData.append('user_id', userData.user_id);
  myData.append('type', 'Personal');
  myData.append('prayer_type', 'Pray');
  myData.append('status', 'Countdown');
  myData.append('timer', 0);
  myData.append('count_down', 0);
  myData.append('number', 0);
  myData.append('lat', data.lat);
  myData.append('long', data.long);
  myData.append('start_time', data.startTime);
  myData.append('goal', 0);
  myData.append('video_id', 0);

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
    if (res.status) {
      setData(res.prayer);
      // Toast.show('Prayer created successfully');
    }
  } catch (error) {
    // Toast.show('Server side error');
    console.log('Error in prayerCreateUpdate:', error);
  }
};

export const prayerUpdate = (data, val) => {
  return async dispatch => {
    const url = `${Base_Url}prayer-update/${data.id}`;
    const myData = new FormData();

    const ud = await AsyncStorage.getItem('user_details');
    const userData = JSON.parse(ud);
    myData.append('goal', data.goal);
    myData.append('end_time', data.end_time);

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
      dispatch(prayer_streak());
      if (res.status) {
        if (val === 'show') {
          Toast.show('Prayer created successfully');
          playSound('notification');
        }
      }
    } catch (error) {
      // Toast.show('Server side error');
      console.log('Error in prayerCreateUpdate:', error);
    }
  };
};

export const TimerCreate = async (data, setData) => {
  const url = `${Base_Url}prayer-create-update/${null}?`;
  const myData = new FormData();
  const ud = await AsyncStorage.getItem('user_details');
  const userData = JSON.parse(ud);
  myData.append('user_id', userData.user_id);
  myData.append('type', 'Personal');
  myData.append('prayer_type', 'Pray');
  myData.append('status', 'Timer');
  myData.append('timer', 0);
  myData.append('count_down', 0);
  myData.append('number', 0);
  myData.append('lat', data.lat);
  myData.append('long', data.long);
  myData.append('start_time', data.startTime);
  myData.append('goal', 0);
  myData.append('video_id', 0);

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
    if (res.status) {
      setData(res.prayer);
      // Toast.show('Prayer created successfully');
    }
  } catch (error) {
    // Toast.show('Server side error');
    console.log('Error in TimerCreate:', error);
  }
};

export const TimerUpdate = (data, val) => {
  return async dispatch => {
    const url = `${Base_Url}prayer-update/${data.id}`;
    const myData = new FormData();

    myData.append('goal', data.goal);
    myData.append('end_time', data.end_time);

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
      dispatch(prayer_streak());
      if (res.status) {
        if (val === 'show') {
          Toast.show('Prayer created successfully');
          playSound('notification');
        }
      }
    } catch (error) {
      // Toast.show('Server side error');
      console.log('Error in TimerUpdate:', error);
    }
  };
};

export const NumberCreate = async data => {
  const url = `${Base_Url}prayer-create-update/${data.id}?`;
  const myData = new FormData();
  try {
    const ud = await AsyncStorage.getItem('user_details');
    const userData = JSON.parse(ud);

    myData.append('user_id', userData.user_id);
    myData.append('type', 'Personal');
    myData.append('prayer_type', 'Pray');
    myData.append('status', 'Number');
    myData.append('timer', 0);
    myData.append('count_down', 0);
    myData.append('number', 0);
    myData.append('lat', data.lat);
    myData.append('long', data.long);
    myData.append('start_time', data.startTime);
    myData.append('goal', 0);
    myData.append('video_id', 0);

    // Set headers with token
    const token = await AsyncStorage.getItem('token');
    const myHeaders = new Headers({
      Authorization: `Bearer ${token}`,
    });

    // Make POST request
    const response = await fetch(url, {
      body: myData,
      method: 'POST',
      headers: myHeaders,
    });
    const res = await response.json();

    // Handle successful response
    if (res.status) {
      return res.prayer; // Return the response for further use
    } else {
      throw new Error('NumberCreate failed: ' + res.message);
    }
  } catch (error) {
    console.error('Error in NumberCreate:', error);
    throw error; // Ensure error propagates to the calling function
  }
};

export const NumberUpdate = async (data, setAdd) => {
  if (!data.id || !data.goal || !data.end_time) {
    console.error('Invalid data passed to NumberUpdate:');
    console.log(data);
    return;
  }

  const url = `${Base_Url}prayer-update/${data.id}`;
  const myData = new FormData();

  try {
    // Append necessary fields to FormData
    myData.append('goal', data.goal);
    myData.append('end_time', data.end_time);

    // Set headers with token
    const token = await AsyncStorage.getItem('token');
    const myHeaders = new Headers({
      Authorization: `Bearer ${token}`,
    });

    // Make POST request
    const response = await fetch(url, {
      body: myData,
      method: 'POST',
      headers: myHeaders,
    });
    const res = await response.json();

    // Handle successful response
    if (res.status) {
      setAdd(true);
      setTimeout(() => {
        setAdd(false);
      }, 2000);
      Toast.show('Prayer updated successfully');
    } else {
      throw new Error('NumberUpdate failed: ' + res.message);
    }
  } catch (error) {
    console.error('Error in NumberUpdate:', error);
    // Toast.show('Server side error');
  }
};

export const prayerSupportGoal = () => {
  return async dispatch => {
    const url = `${Base_Url}prayer-support-goal`;
    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {headers});
      const res = await response.json();
      if (res.status === 'success') {
        dispatch({type: PRAYER_SUPPORT_GOAL, payload: res.data});
      }
    } catch (error) {
      // Toast.show('Server side error');
      console.log('Error in prayerSupportGoal:', error);
    }
  };
};

export const pray_status = load => {
  return async dispatch => {
    load(true);
    const url = `${Base_Url}app-prayer-levels`;
    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {headers});
      const res = await response.json();
      load(false);
      if (res.status) {
        dispatch({type: PRAY_STATUS, payload: res.levels.reverse()});
      }
    } catch (error) {
      load(false);
      // Toast.show('Server side error');
      console.log('Error in pray_status:', error);
    }
  };
};

export const prayer_streak = () => {
  return async dispatch => {
    const url = `${Base_Url}app-user-streak-level`;
    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {headers});
      const res = await response.json();
      if (res.status) {
        dispatch({type: PRAYER_TIME, payload: res.levels.remaining_goal});
        dispatch({type: PRAYER_STREAK, payload: res.levels.current_streak});
      }
    } catch (error) {
      // Toast.show('Server side error');
      console.log('Error in prayer_streak:', error);
    }
  };
};

export const bible_streak = () => {
  return async dispatch => {
    const url = `${Base_Url}user-current-bible-streak`;
    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {headers});
      const res = await response.json();
      if (res.status) {
        dispatch({type: BIBLE_STREAK, payload: res.streak});
      }
    } catch (error) {
      // Toast.show('Server side error');
      console.log('Error in bible_streak:', error);
    }
  };
};

export const bible_streak_inc = setShowStreak => {
  return async dispatch => {
    const url = `${Base_Url}bible-streak/increment`;
    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');
    headers.append('Authorization', `Bearer ${token}`);

    try {
      const response = await fetch(url, {method: 'POST', headers});
      const {status} = await response.json();
      if (status) {
        dispatch(prayer_streak());
        dispatch(bible_streak());
        setShowStreak(true);
      }
    } catch (error) {
      Toast.show('Server side error');
      console.log('Error in bible_streak_inc:', error);
    }
  };
};

export const bible_streak_dec = () => {
  return async dispatch => {
    const url = `${Base_Url}update/bible/decrement/room`;
    const body = new FormData();
    body.append(
      'last_bible_streak ',
      moment().format('YYYY-MM-DD , h:mm:ss a'),
    );

    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');
    headers.append('Authorization', `Bearer ${token}`);

    try {
      const response = await fetch(url, {method: 'POST', body, headers});
      const res = await response.json();
      console.log('bible_streak_dec => res =>', res);
    } catch (error) {
      // Toast.show('Server side error');
      console.log('Error in bible_streak_dec:', error);
    }
  };
};

export const save_user_prayer_streak = async () => {
  const url = `${Base_Url}save-user-prayer-played-data`;

  const formData = new FormData();
  formData.append('prayed_for_the_day', 1);
  formData.append('played_for_the_day', 1);

  const headers = new Headers();
  const token = await AsyncStorage.getItem('token');
  headers.append('Authorization', `Bearer ${token}`);

  try {
    const response = await fetch(url, {
      headers,
      method: 'POST',
      body: formData,
    });
    const {status} = await response.json();
    if (status === 'success') {
      console.log('save_user_prayer_streak is success');
    }
  } catch (error) {
    Toast.show('Server side error');
    console.log('Error in save_user_prayer_streak:', error);
  }
};

export const update_user_app_total_points = points => {
  return async dispatch => {
    const url = `${Base_Url}update-user-app-total-points`;
    const myData = new FormData();
    myData.append('user_app_total_points', Math.round(points));

    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {
        headers,
        body: myData,
        method: 'POST',
      });
      const res = await response.json();
      if (res.status === 'success') {
        dispatch(get_user_app_total_points());
        // dispatch({type: USER_TOTAL_POINTS, payload: res.user_app_total_points});
      } else {
        console.log('error in user 70 %');
      }
    } catch (error) {
      Toast.show('Server side error');
      console.log('Error in update_user_app_total_points:', error);
    }
  };
};

export const get_user_app_total_points = () => {
  return async dispatch => {
    const url = `${Base_Url}get-user-app-total-points`;
    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {headers});
      const res = await response.json();
      if (res.status === 'success') {
        dispatch({type: USER_TOTAL_POINTS, payload: res.user_app_total_points});
        dispatch({type: IS_SPONSOR, payload: res.ever_been_sponsored});
        dispatch({type: PUBLIC_POOL_POINT, payload: res.actual_public_points});
      }
    } catch (error) {
      // Toast.show('Server side error');
      console.log('Error in update_user_app_total_points:', error);
    }
  };
};

export const get_rendom_ministry_project_to_donate = () => {
  return async dispatch => {
    const url = `${Base_Url}get-random-ministry-project-to-donate`;
    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {headers});
      const res = await response.json();
      if (res.status === 'success') {
        dispatch({type: MINISTRY_PROJECT, payload: res.project});
      }
    } catch (error) {
      // Toast.show('Server side error');
      console.log('Error in get_rendom_ministry_project_to_donate:', error);
    }
  };
};

export const get_sponsor_dropdown = () => {
  return async dispatch => {
    const url = `${Base_Url}get-user-sponsors-list`;
    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {headers});
      const res = await response.json();

      if (res.status === 'success') {
        const updated_sponsor = res.sponsors.map(item => ({
          // ...item,
          key: item.id,
          value: item.name,
        }));
        dispatch({type: SPONSOR_DATA, payload: updated_sponsor});
      }
    } catch (error) {
      // Toast.show('Server side error');
      console.log('Error in get_sponsor_dropdown:', error);
    }
  };
};

export const donate_to_ministory = async (points, id) => {
  const url = `${Base_Url}donate-percentage-to-ministry-project`;
  const headers = new Headers();
  const myData = new FormData();
  myData.append('points', Math.round(points));
  myData.append('ministry_project_id', id);
  const token = await AsyncStorage.getItem('token');
  headers.append('Authorization', `Bearer ${token}`);

  try {
    const response = await fetch(url, {method: 'POST', body: myData, headers});
    const res = await response.json();
    if (res.status === 'success') {
      Toast.show('Thank you for donating to the ministry project');
    }
  } catch (error) {
    console.log('Error in donate_to_ministory:', error);
  }
};

export const getNoteApi = load => {
  return async dispatch => {
    load(true);
    const url = `${Base_Url}get-user-notes`;

    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');

    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {headers});
      const res = await response.json();
      load(false);
      if (res.status == 'success') {
        dispatch({type: GET_NOTE, payload: res.notes.reverse()});
      }
    } catch (error) {
      load(false);
      console.log('error getNoteApi', error);
    }
  };
};

export const save_note = (data, link, load, onClose, reset) => {
  return async dispatch => {
    load(true);
    const url = Base_Url + link;
    const body = new FormData();
    body.append('note', data.note.trim());

    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {
        body,
        headers,
        method: 'POST',
      });
      const res = await response.json();
      load(false);
      if (res.status == 'success') {
        dispatch(getNoteApi(load));
        onClose();
        reset();
      }
    } catch (error) {
      load(false);
      console.log('Error in save_note:', error);
    }
  };
};

export const delete_note = (id, load, onClose) => {
  return async dispatch => {
    load(true);
    const url = `${Base_Url}delete-user-note/${id}`;

    const headers = new Headers();
    const token = await AsyncStorage.getItem('token');
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {
        headers,
        method: 'POST',
      });
      const res = await response.json();
      load(false);
      if (res.status == 'success') {
        dispatch(getNoteApi(load));
        onClose();
      }
    } catch (error) {
      load(false);
      console.log('Error in delete_note:', error);
    }
  };
};

export const fetchSearchUsers = async (search, setLoad, setFilteredCards) => {
  try {
    setLoad(true);
    const token = await AsyncStorage.getItem('token');
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);

    const response = await fetch(
      `${Base_Url}search-user-chat-app?name=${search}`,
      {headers},
    );
    const data = await response.json();
    setFilteredCards(data?.users || []);
  } catch (error) {
    console.error('Error fetching users:', error);
    setFilteredCards([]);
  } finally {
    setLoad(false);
  }
};

export const fetchSentUsers = async (setLoad, setFilteredCards) => {
  try {
    setLoad(true);
    const url = `${Base_Url}get-contacts-sent-requests`;
    const token = await AsyncStorage.getItem('token');
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);

    const response = await fetch(url, {headers});
    const data = await response.json();
    setFilteredCards(data?.users || []);
  } catch (error) {
    console.error('Error fetching users:', error);
    setFilteredCards([]);
  } finally {
    setLoad(false);
  }
};

export const fetchRecievedUsers = (setLoad, setFilteredCards) => {
  return async dispatch => {
    try {
      setLoad(true);
      const url = `${Base_Url}get-contacts-recieved-requests`;
      const token = await AsyncStorage.getItem('token');
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
      const response = await fetch(url, {headers});
      const data = await response.json();
      dispatch({type: RECIEVED_CARD, payload: data?.users});
    } catch (error) {
      console.error('Error fetching users:', error);
      setFilteredCards([]);
    } finally {
      setLoad(false);
    }
  };
};

export const addContact = async (id, load, setSearch, userData) => {
  load(true);
  const url = `${Base_Url}create-contact`;
  const body = new FormData();
  body.append('user_id', id);
  body.append('contact_id', userData.user_id);
  body.append('role_id', 0);

  const headers = new Headers();
  const token = await AsyncStorage.getItem('token');
  headers.append('Authorization', `Bearer ${token}`);
  try {
    const response = await fetch(url, {
      body,
      headers,
      method: 'POST',
    });
    const res = await response.json();
    load(false);
    if (res.success === true) {
      setSearch('');
      Toast.show('Contact added successfully');
    }
  } catch (error) {
    load(false);
    console.log('Error in addContact:', error);
  }
};

export const cancelSend = async (cancelID, setLoadSend, setSendCards) => {
  const url = `${Base_Url}contact-popup-sent-rejected-accepted/${cancelID}/Rejected`;
  const headers = new Headers();
  const token = await AsyncStorage.getItem('token');
  headers.append('Authorization', `Bearer ${token}`);
  try {
    const response = await fetch(url, {headers});
    const res = await response.json();
    if (res.success === true) {
      fetchSentUsers(setLoadSend, setSendCards);
      Toast.show('Requets Canceled successfully');
    }
  } catch (error) {
    console.log('Error in cancelSend:', error);
  }
};

export const getCalendarData = () => {
  return async dispatch => {
    try {
      const url = `${Base_Url}user-app-calendar-prayer-progress`;
      const token = await AsyncStorage.getItem('token');
      const headers = new Headers();
      headers.append('Authorization', `Bearer ${token}`);
      const response = await fetch(url, {headers});

      const res = await response.json();
      if (res.status === 'success') {
        dispatch({type: GET_CALENDAR_DATA, payload: res.data});
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
};

export const sendCode = code => {
  return async dispatch => {
    const url = `${Base_Url}search-user-code-app?code=${code}`;
    const token = await AsyncStorage.getItem('token');
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {headers});
      const res = await response.json();

      if (res.status === 'success') {
        // dispatch({type: GET_CALENDAR_DATA, payload: res.data});
        return res.users;
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
};

export const rejected_accepted = async (id, close) => {
  const url = `${Base_Url}contact-popup-sent-rejected-accepted/${id}/Accepted`;
  const headers = new Headers();
  const token = await AsyncStorage.getItem('token');
  headers.append('Authorization', `Bearer ${token}`);
  try {
    const response = await fetch(url, {headers});
    const res = await response.json();
    console.log('res', res);
    if (res.success === true) {
      close();
      Toast.show('Requets Accepted successfully');
    }
  } catch (error) {
    console.log('Error in rejected_accepted:', error);
  }
};

export const get_contacts = () => {
  return async dispatch => {
    const url = `${Base_Url}contacts/listing`;
    const token = await AsyncStorage.getItem('token');
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {headers});
      const res = await response.json();
      console.log('res', res.contacts);
      if (res.status === 'success') {
        dispatch({type: CHAT_CONTACTS_DATA, payload: res.contacts});
      }
    } catch (error) {
      console.log('Error in get_contacts:', error);
    }
  };
};

export const get_group = () => {
  return async dispatch => {
    const url = `${Base_Url}groups/listing`;
    const token = await AsyncStorage.getItem('token');
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {headers});
      const res = await response.json();
      if (res.status === 'success') {
        dispatch({type: CHAT_GROUP_DATA, payload: res.groups});
      }
    } catch (error) {
      console.log('Error in get_group:', error);
    }
  };
};

export const create_group = (data, image, setLoad, onClose) => {
  return async dispatch => {
    setLoad(true);
    const url = `${Base_Url}create/group/chat`;
    const body = new FormData();
    body.append('name', data.name);
    body.append('icon', {
      uri: image.uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    // body.append('description', date.description);
    const token = await AsyncStorage.getItem('token');
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {
        body,
        headers,
        method: 'POST',
      });
      const res = await response.json();
      console.log('res of create_group', res);
      setLoad(false);
      if (res.status === 'success') {
        onClose();
        dispatch(get_group());
        Toast.show('Group created successfully');
      }
    } catch (error) {
      setLoad(false);
      console.log('Error in create_group:', error);
    }
  };
};

export const get_topic = () => {
  return async dispatch => {
    const url = `${Base_Url}topics/listing`;
    const token = await AsyncStorage.getItem('token');
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {headers});

      const res = await response.json();
      console.log('res get_topic', res);
      if (res.status === 'success') {
        dispatch({type: CHAT_TOPIC_DATA, payload: res.topics});
      }
    } catch (error) {
      console.log('Error in get_topic:', error);
    }
  };
};

export const create_topic = (data, image, prayer, setLoad, onClose) => {
  return async dispatch => {
    setLoad(true);
    const url = `${Base_Url}create/topic/chat`;
    const body = new FormData();
    body.append('name', data.name);
    body.append('prayer_checkbox', prayer ? 1 : 0);
    body.append('thumbnail', {
      uri: image.uri,
      type: 'image/jpeg',
      name: 'image.jpg',
    });
    const token = await AsyncStorage.getItem('token');
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${token}`);
    try {
      const response = await fetch(url, {
        body,
        headers,
        method: 'POST',
      });
      const res = await response.json();
      setLoad(false);
      if (res.status === 'success') {
        onClose();
        dispatch(get_topic());
        Toast.show('Topic created successfully');
      }
    } catch (error) {
      setLoad(false);
      console.log('Error in create_topic:', error);
    }
  };
};
