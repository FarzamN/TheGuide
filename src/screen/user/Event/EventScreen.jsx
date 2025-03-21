import {FlatList} from 'react-native';
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
  EventCard,
  GuestModal,
  Loader,
  RequestModal,
} from '../../../components';

const EventScreen = () => {
  const dispatch = useDispatch();
  const {getParent} = useNavigation();
  const get_event = useSelector(state => state.get_event);
  const userDetail = useSelector(state => state.userDetails);
  const isGuest = userDetail === 'guest';

  const [load, setLoad] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const [showGuest, setShowGuest] = useState(false);
  const [requestModal, setRequestModal] = useState(false);
  const [askRequestModal, setAskRequestModal] = useState(false);
  const [addSponsorModal, setAddSponsorModal] = useState(false);

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
    dispatch(eventApi(setLoad));
    setRefresh(false);
  };

  useEffect(() => {
    dispatch(eventApi(setLoad));
  }, []);

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
  return (
    <Body>
      <DashboardHeader onRequest={onRequest} />
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
