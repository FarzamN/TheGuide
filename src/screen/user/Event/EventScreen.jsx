import {FlatList, View} from 'react-native';
import EventHead from './eventComp/eventHead';
import EventBottom from './eventComp/eventBottom';
import {useDispatch, useSelector} from 'react-redux';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {
  eventApi,
  get_user_app_total_points,
} from '../../../redux/actions/UserAction';
import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  AddSponsorModal,
  AskRequestModal,
  Body,
  DashboardHeader,
  Empty,
  EventCard,
  GuestModal,
  Loader,
  RequestModal,
} from '../../../components';
import EventHeader from '../../../components/Header/eventHeader';
import PraySwitch from '../Prayer/prayComp/praySwitch';
import {style as switchStyle} from '../style';
import {tab} from '../../../utils/Constants';

const EventScreen = () => {
  const dispatch = useDispatch();
  const {getParent, navigate} = useNavigation();
  const get_event = useSelector(state => state.get_event);
  const userDetail = useSelector(state => state.userDetails);
  const isGuest = userDetail === 'guest';

  const [load, setLoad] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const [showGuest, setShowGuest] = useState(false);
  const [requestModal, setRequestModal] = useState(false);
  const [askRequestModal, setAskRequestModal] = useState(false);
  const [addSponsorModal, setAddSponsorModal] = useState(false);

  const [tabSelect, setTabSelect] = useState('today');

  useEffect(() => {
    if (!isGuest) {
      dispatch(get_user_app_total_points());
    }
  }, [isGuest]);

  const [eventType, setEventType] = useState({
    visible: false,
    value: 'Event Type',
  });
  const [streak, setStreak] = useState({
    visible: false,
    value: 'Streak',
  });

  const handleStreak = () => {
    setStreak(pre => ({
      ...pre,
      visible: true,
    }));
  };
  const handleType = () => {
    setEventType(pre => ({
      ...pre,
      visible: true,
    }));
  };

  const onRefresh = () => {
    setRefresh(true);
    dispatch(eventApi(tabSelect, setLoad));
    setRefresh(false);
  };

  useEffect(() => {
    dispatch(eventApi(tabSelect, setLoad));
  }, [tabSelect]);

  useFocusEffect(
    useCallback(() => {
      getParent().setOptions({
        tabBarStyle: GlobalStyle.showBar,
      });
    }, []),
  );

  const onRequest = () => {
    if (isGuest) {
      setShowGuest(true);
      setTimeout(() => {
        setShowGuest(false);
      }, 2000);
      return;
    }
    dispatch(get_user_app_total_points());
    setRequestModal(true);
  };
  const [City, setCity] = useState({
    name: userDetail.user_city,
    id: userDetail.user_city_id,
  });
  return (
    <Body>
      <EventHeader
        title={City.name || 'City'}
        onPress={() =>
          navigate('city', {
            val: City.name,
            setVal: setCity,
            id: City.id,
            StateID: userDetail.user_state_id,
          })
        }>
        <View
          style={[
            GlobalStyle.between,
            switchStyle.SwitchCont,
            {backgroundColor: '#fff', height: 50},
          ]}>
          {['today', 'monthly', 'special', 'my-events'].map(i => (
            <PraySwitch
              key={i}
              title={i}
              focus={tabSelect === i}
              onPress={() => setTabSelect(i)}
              styles={{height: tab ? 50 : 32}}
            />
          ))}
        </View>
      </EventHeader>
      {/* <EventHead
        page={streak.value}
        type={eventType.value}
        onStreak={handleStreak}
        onTypePress={handleType}
      /> */}
      <FlatList
        data={get_event}
        refreshing={refresh}
        onRefresh={onRefresh}
        style={GlobalStyle.Padding}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        ListEmptyComponent={<Empty title={'No event Found'} />}
        renderItem={({item}) => <EventCard data={item} />}
      />
      {/* <EventBottom /> */}
      <Loader visible={load} />

      <GuestModal visible={showGuest} />
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

export default EventScreen;
