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
import {courseApi, getBibleSchoolApi} from '../../redux/actions/UserAction';

const Home = () => {
  const dispatch = useDispatch();
  const {navigate, getParent} = useNavigation();
  const [load, setLoad] = useState(false);
  const data = useSelector(state => state.get_bible_school);

  useFocusEffect(
    useCallback(() => {
      getParent().setOptions({
        tabBarStyle: GlobalStyle.showBar,
      });
    }, []),
  );
  useEffect(() => {
    courseApi();
    dispatch(getBibleSchoolApi(setLoad));
  }, []);

  return (
    <Body>
      <DashboardHeader />
      <FlatList
        data={data}
        ListEmptyComponent={<Empty />}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={style.listContainer}
        renderItem={({item}) => {
          return (
            <HomeAssigmentCard
              data={item}
              onPress={() => navigate('game', {item})}
            />
          );
        }}
      />
      <Loader visible={load} />
    </Body>
  );
};

export default Home;
