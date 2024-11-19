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
    value: '',
  });
  const [ageType, setAgeType] = useState({
    visible: false,
    value: '',
  });

  const onAgePress = () => {
    setAgeType({
      ...ageType,
      visible: !ageType.visible,
    });
  };
  const onTypePress = () => {
    setEventType({
      ...eventType,
      visible: !eventType.visible,
    });
  };

  const data = [
    {
      image:
        'https://images.unsplash.com/photo-1513569771920-c9e1d31714af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Family fun, Music, speakers',
    },
  ];

  useEffect(() => {
    dispatch(eventApi(setLoad));
  }, []);
  console.log('get_event', get_event);
  return (
    <Body>
      <DashboardHeader />
      <EventHead
        onAgePress={onAgePress}
        onTypePress={onTypePress}
        page={'All Aages'}
        type={'Event Type'}
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
