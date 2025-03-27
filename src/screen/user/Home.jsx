import {
  Body,
  Empty,
  Loader,
  GuestModal,
  StreakModal,
  RequestModal,
  AskRequestModal,
  AddSponsorModal,
  DashboardHeader,
  HomeAssigmentCard,
} from '../../components';
import moment from 'moment';
import {style} from './style';
import {FlatList} from 'react-native';
import Toast from 'react-native-simple-toast';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {BIBLE_TIME} from '../../redux/reducer/Holder';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {
  bassChalo,
  bariWaliAPI,
  bible_streak,
  prayer_streak,
  bible_streak_dec,
  bible_streak_inc,
  getBibleSchoolApi,
  prayerSupportGoal,
  complete_assigment,
  studentRoleGivenAPI,
  getBibleSchoolApiUpdate,
  save_user_prayer_streak,
  get_user_app_total_points,
  get_sponsor_dropdown,
} from '../../redux/actions/UserAction';
import {defaultData} from '../../utils/Data';

const Home = () => {
  const dispatch = useDispatch();
  const {navigate, getParent} = useNavigation();

  const data = useSelector(state => state.get_bible_school);
  const api_success = useSelector(state => state.api_success);
  const student_role_given = useSelector(state => state.student_role_givens);
  const userDetail = useSelector(state => state.userDetails);

  const pray_time = useSelector(state => state.pray_time);
  const bible_time = useSelector(state => state.bible_time);

  const isGuest = userDetail === 'guest';

  const [load, setLoad] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [showGuest, setShowGuest] = useState(false);
  const [showStreak, setShowStreak] = useState(false);
  const [requestModal, setRequestModal] = useState(false);
  const [addSponsorModal, setAddSponsorModal] = useState(false);
  const [askRequestModal, setAskRequestModal] = useState(false);
  const [complete, setCompleted] = useState({ids: [], isCompleted: false});

  const isBibleStreakRunning = useRef(false); // Prevents multiple executions

  const handleBibleStreak = async () => {
    if (isBibleStreakRunning.current) return; // Skip if already running
    isBibleStreakRunning.current = true;

    try {
      const savedDate = await AsyncStorage.getItem('lastAPICallDate');
      const today = moment().format('DD-MM-YYYY');

      if (savedDate === today) {
        Toast.show('Todays Bible Streak is complete!');
        console.log('API already hit today. Skipping...');
        dispatch({type: BIBLE_TIME, payload: 'done'});
        isBibleStreakRunning.current = false;
        return;
      }

      if (savedDate && savedDate !== today) {
        console.log('removing last call');
        await AsyncStorage.removeItem('lastAPICallDate');
        dispatch({type: BIBLE_TIME, payload: 'Due'});
      }

      if (!data || data.length === 0) {
        isBibleStreakRunning.current = false;
        return false;
      }

      const dates = data.map(item =>
        moment(item.completed_on).format('DD-MM-YYYY'),
      );
      const allSameDate = dates.every(date => date === today);

      if (allSameDate) {
        dispatch(bible_streak_inc(setShowStreak));
        dispatch({type: BIBLE_TIME, payload: 'done'});
        await AsyncStorage.setItem('lastAPICallDate', today);
        console.log("API called and today's date saved.");
      }
    } catch (error) {
      console.error('Error checking date or hitting API:', error);
    } finally {
      isBibleStreakRunning.current = false; // Reset lock
    }
  };

  const updateBiblenPrayer = async () => {
    try {
      const lastUpdateDate = await AsyncStorage.getItem('lastUpdateDate');
      const today = moment().format('DD-MM-YYYY');

      const Pray_is_done = pray_time == 0;
      const bible_is_done = bible_time === 'done';

      if (Pray_is_done && bible_is_done) {
        // Ensure the function is only executed once per day
        if (lastUpdateDate === today) {
          return;
        }

        // Call the function to update the streak
        save_user_prayer_streak();

        // Save today's date to prevent multiple updates
        await AsyncStorage.setItem('lastUpdateDate', today);
        console.log('User prayer streak updated.');
      }
    } catch (error) {
      console.error('Error updating prayer streak:', error);
    }
  };

  const handleStreak = () => {
    setShowStreak(false);
    dispatch(getBibleSchoolApiUpdate());
  };

  useEffect(() => {
    if (!isGuest) {
      if (api_success == 0) {
        dispatch(bariWaliAPI());
      }
      if (student_role_given == 0) {
        studentRoleGivenAPI();
      }
      bassChalo();
      dispatch(getBibleSchoolApi(setLoad));
    }
  }, [api_success, isGuest]);

  useEffect(() => {
    if (!isGuest) {
      handleBibleStreak();
      checkComplete();
      updateBiblenPrayer();
    }
  }, [data, isGuest]);

  useEffect(() => {
    if (!isGuest) {
      updateBiblenPrayer();
    }
  }, [handleBibleStreak, isGuest]);

  useEffect(() => {
    if (!isGuest) {
      bassChalo();
      dispatch(get_sponsor_dropdown());
      dispatch(prayerSupportGoal());
      dispatch(prayer_streak());
      dispatch(bible_streak());
      dispatch(get_user_app_total_points());
    }
  }, [isGuest]);

  const checkComplete = () => {
    if (!data || data.length === 0) {
      setCompleted({ids: [], isCompleted: false}); // No data means not all are completed
      return;
    }

    // Filter out completed items
    const completedItems = data.filter(
      item => item.game_status === 'COMPLETED',
    );

    // Check if all items are completed
    const allCompleted = completedItems.length === data.length;
    // Extract assignment IDs of completed items
    const completedIds = completedItems.map(item => item.assignment_id);

    setCompleted({ids: completedIds, isCompleted: allCompleted});
  };

  const onRefresh = () => {
    if (!isGuest) {
      setRefresh(true);
      dispatch(get_sponsor_dropdown());
      dispatch(prayer_streak());
      bassChalo();
      dispatch(getBibleSchoolApi(setLoad));
      dispatch(bible_streak());
      setRefresh(false);
    }
  };

  const emp = "You don't have any game";

  useEffect(() => {
    if (complete.isCompleted) {
      complete_assigment(complete.ids);
    }
  }, [complete.isCompleted]);

  useFocusEffect(
    useCallback(() => {
      getParent().setOptions({
        tabBarStyle: GlobalStyle.showBar,
      });
      if (!isGuest) {
        dispatch(getBibleSchoolApi(setLoad));
      }
    }, [isGuest]),
  );

  const handleGameNav = item => {
    if (isGuest) {
      setShowGuest(true);
      setTimeout(() => {
        setShowGuest(false);
      }, 2000);
    } else {
      dispatch(get_user_app_total_points());
      navigate('game', {item});
    }
  };

  const onRequest = () => {
    if (isGuest) {
      setShowGuest(true);
      setTimeout(() => {
        setShowGuest(false);
      }, 2000);
      return;
    }
    dispatch(get_user_app_total_points());
    dispatch(get_sponsor_dropdown());

    setRequestModal(true);
  };

  return (
    <Body>
      <DashboardHeader onRequest={onRequest} />
      <FlatList
        refreshing={refresh}
        onRefresh={onRefresh}
        data={isGuest ? defaultData : data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        ListEmptyComponent={<Empty title={emp} />}
        contentContainerStyle={style.listContainer}
        ListFooterComponent={() => (
          <HomeAssigmentCard
            data={{
              course_name: 'Daily Review',
              game_status: 'INCOMPLETE',
              game_title: 'Your Daily game review',
              image_guest:
                'https://images.unsplash.com/photo-1555935288-ad7bad5d006b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            onPress={() => navigate('dailyReview')}
          />
        )}
        renderItem={({item}) => (
          <HomeAssigmentCard data={item} onPress={() => handleGameNav(item)} />
        )}
      />
      <Loader visible={load} />
      <GuestModal visible={showGuest} />
      <StreakModal visible={showStreak} onPress={handleStreak} />

      <RequestModal
        onask={() => {
          setRequestModal(false);
          setTimeout(() => {
            setAskRequestModal(true);
          }, 500);
        }}
        onadd={() => {
          setRequestModal(false);
          setTimeout(() => {
            setAddSponsorModal(true);
          }, 1000);
        }}
        visible={requestModal}
        onClose={() => setRequestModal(false)}
      />

      <AskRequestModal
        visible={askRequestModal}
        onClose={() => setAskRequestModal(false)}
      />

      <AddSponsorModal
        visible={addSponsorModal}
        onClose={() => setAddSponsorModal(false)}
      />
    </Body>
  );
};

export default Home;
