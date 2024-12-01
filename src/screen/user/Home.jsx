import {
  Body,
  Empty,
  Loader,
  DashboardHeader,
  HomeAssigmentCard,
} from '../../components';
import moment from 'moment';
import {style} from './style';
import {FlatList} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {
  bassChalo,
  bariWaliAPI,
  bible_streak,
  prayer_streak,
  getBibleSchoolApi,
  prayerGupportGoal,
  complete_assigment,
  inc_and_dec,
} from '../../redux/actions/UserAction';

const Home = () => {
  const dispatch = useDispatch();
  const {navigate, getParent} = useNavigation();

  const [load, setLoad] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const data = useSelector(state => state.get_bible_school);
  const api_success = useSelector(state => state.api_success);
  const [complete, setCompleted] = useState({ids: [], isCompleted: false});

  const checkDate = () => {
    if (!data || data.length === 0) {
      return false; // No data to check
    }

    // Extract and format dates
    const dates = data.map(item =>
      moment(item.completed_on).format('DD-MM-YYYY'),
    );

    // Check if all dates are the same
    const allSameDate = dates.every(date => date === dates[0]);

    // Call the appropriate API based on the result
    if (allSameDate) {
      dispatch(inc_and_dec('increment'));
    } else {
      console.log('Dates are different, checking logic for decrement.');
      if (dates.length > 1 && new Set(dates).size > 1) {
        console.log('Confirmed different dates, hitting decrement API.');
        dispatch(inc_and_dec('decrement'));
      } else {
        console.log(
          'Dates issue identified, avoiding decrement API to prevent negative streaks.',
        );
      }
    }
  };

  useEffect(() => {
    if (api_success == 0) {
      dispatch(bariWaliAPI());
    }
    bassChalo();
    dispatch(getBibleSchoolApi(setLoad));
  }, [api_success]);

  useEffect(() => {
    checkDate();
    checkComplete();
  }, [data]);

  useEffect(() => {
    bassChalo();
    dispatch(getBibleSchoolApi(setLoad));
    dispatch(prayerGupportGoal());
    dispatch(prayer_streak());
    dispatch(bible_streak());
  }, []);

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
    setRefresh(true);
    dispatch(prayer_streak());
    bassChalo();
    dispatch(getBibleSchoolApi(setLoad));
    dispatch(bible_streak());
    setRefresh(false);
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
    }, []),
  );
  return (
    <Body>
      <DashboardHeader />
      <FlatList
        data={data}
        refreshing={refresh}
        onRefresh={onRefresh}
        ListEmptyComponent={<Empty title={emp} />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={style.listContainer}
        renderItem={({item}) => (
          <HomeAssigmentCard
            data={item}
            onPress={() => navigate('game', {item})}
          />
        )}
      />
      <Loader visible={load} />
    </Body>
  );
};

export default Home;
