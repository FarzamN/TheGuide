import {
  Body,
  Empty,
  Loader,
  StreakModal,
  DashboardHeader,
  HomeAssigmentCard,
  GuestModal,
} from '../../components';
import moment from 'moment';
import {style} from './style';
import {FlatList} from 'react-native';
import Toast from 'react-native-simple-toast';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {BIBLE_TIME} from '../../redux/reducer/Holder';
import React, {useCallback, useEffect, useState} from 'react';
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
  getBibleSchoolApiUpdate,
} from '../../redux/actions/UserAction';
import {defaultData} from '../../utils/Data';

const Home = () => {
  const dispatch = useDispatch();
  const {navigate, getParent} = useNavigation();

  const userDetail = useSelector(state => state.userDetails);
  const isGuest = userDetail === 'guest'
  const [showStreak, setShowStreak] = useState(false);
  const [load, setLoad] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const data = useSelector(state => state.get_bible_school);
  const api_success = useSelector(state => state.api_success);
  const [complete, setCompleted] = useState({ids: [], isCompleted: false});
const [showGuest,setShowGuest] = useState(false)

  const checkDate = async () => {
    try {
      // Get the saved date from AsyncStorage
      const savedDate = await AsyncStorage.getItem('lastAPICallDate');
      const today = moment().format('DD-MM-YYYY');
      if (savedDate === today) {
        Toast.show('Todays Bible Streak is complete!');
        console.log('API already hit today. Skipping...');
        dispatch({type: BIBLE_TIME, payload: 'done'});
        return; // API already hit today
      }

      // Clear the saved date if it's not today
      if (savedDate && savedDate !== today) {
        console.log('removing last call');
        await AsyncStorage.removeItem('lastAPICallDate');
        dispatch({type: BIBLE_TIME, payload: 'Due'});
      }

      if (!data || data.length === 0) {
        return false; // No data to check
      }

      // Extract and format dates
      const dates = data.map(item =>
        moment(item.completed_on).format('DD-MM-YYYY'),
      );

      // Check if all dates are the same
      const allSameDate = dates.every(date => date === today);
      if (allSameDate) {
        // Call the API
        dispatch(bible_streak_inc(setShowStreak));
        dispatch(bible_streak_dec());
        dispatch({type: BIBLE_TIME, payload: 'done'});

        // Save today's date in AsyncStorage
        await AsyncStorage.setItem('lastAPICallDate', today);

        console.log("API called and today's date saved.");
      }
    } catch (error) {
      console.error('Error checking date or hitting API:', error);
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
      bassChalo();
      dispatch(getBibleSchoolApi(setLoad));
    }
  }, [api_success, isGuest]);
  
  useEffect(() => {
    if (!isGuest) {
      checkDate();
      checkComplete();
    }
  }, [data, isGuest]);
  
  useEffect(() => {
    if (!isGuest) {
      bassChalo();
      dispatch(prayerSupportGoal());
      dispatch(prayer_streak());
      dispatch(bible_streak());
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
  const handleGameNav = (item) => {
    if (isGuest) {
      setShowGuest(true);
      setTimeout(() => {
        setShowGuest(false);
      }, 2000);
    } else {
      navigate('game', { item });
    }
  };
    return (
    <Body>
      <DashboardHeader />
      <FlatList
        refreshing={refresh}
        onRefresh={onRefresh}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        ListEmptyComponent={<Empty title={emp} />}
        contentContainerStyle={style.listContainer}
        data={isGuest ? defaultData : data}
        renderItem={({item}) => (
          <HomeAssigmentCard data={item} onPress={() => handleGameNav(item)} />
        )}
      />
      <Loader visible={load} />
      <GuestModal visible={showGuest}/>
      <StreakModal visible={showStreak} onPress={handleStreak} />
    </Body>
  );
};

export default Home;
