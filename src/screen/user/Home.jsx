import {
  Body,
  Empty,
  Loader,
  DashboardHeader,
  HomeAssigmentCard,
} from '../../components';
import {style} from './style';
import {FlatList} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  bassChalo,
  bariWaliAPI,
  getBibleSchoolApi,
  prayerGupportGoal,
  prayer_streak,
} from '../../redux/actions/UserAction';

const Home = () => {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState(false);
  const {navigate, getParent} = useNavigation();
  const [load, setLoad] = useState(false);
  const data = useSelector(state => state.get_bible_school);
  const api_success = useSelector(state => state.api_success);

  useEffect(() => {
    if (api_success == 0) {
      dispatch(bariWaliAPI());
    }
    bassChalo();
    dispatch(getBibleSchoolApi(setLoad));
  }, [api_success]);

  useEffect(() => {
    bassChalo();
    dispatch(getBibleSchoolApi(setLoad));
    dispatch(prayerGupportGoal());
    dispatch(prayer_streak());
  }, []);

  const onRefresh = () => {
    setRefresh(true);
    dispatch(prayer_streak());
    bassChalo();
    dispatch(getBibleSchoolApi(setLoad));
    setRefresh(false);
  };

  const emp = "You don't have any game";

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
