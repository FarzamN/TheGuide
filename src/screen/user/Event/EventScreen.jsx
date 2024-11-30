import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {Body, DashboardHeader, EventCard, Loader} from '../../../components';
import EventHead from './eventComp/eventHead';
import EventBottom from './eventComp/eventBottom';
import {useDispatch, useSelector} from 'react-redux';
import {eventApi} from '../../../redux/actions/UserAction';

const EventScreen = () => {
  const dispatch = useDispatch();
  const get_event = useSelector(state => state.get_event);
  const [load, setLoad] = useState(false);

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

  useEffect(() => {
    dispatch(eventApi(setLoad));
  }, []);
  return (
    <Body>
      <DashboardHeader />
      <EventHead
        page={streak.value}
        type={eventType.value}
        onStreak={handleStreak}
        onTypePress={handleType}
      />
      <FlatList
        data={get_event}
        style={GlobalStyle.Padding}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item}) => <EventCard data={item} />}
      />
      {/* <EventBottom /> */}
      <Loader visible={load} />
    </Body>
  );
};

export default EventScreen;
