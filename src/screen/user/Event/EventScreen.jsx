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

  useEffect(() => {
    dispatch(eventApi(setLoad));
  }, []);
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
