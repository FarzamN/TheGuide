import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {Body, DashboardHeader, EventCard} from '../../../components';
import EventHead from './eventComp/eventHead';
import EventBottom from './eventComp/eventBottom';

const EventScreen = () => {
  const [eventType, setEventType] = useState({
    visible: false,
    value: '',
  });
  const [pageType, setPageType] = useState({
    visible: false,
    value: '',
  });

  const onPagePress = () => {
    setPageType({
      ...pageType,
      visible: !pageType.visible,
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
  return (
    <Body>
      <DashboardHeader />
      <EventHead
        onPagePress={onPagePress}
        onTypePress={onTypePress}
        page={'All Pages'}
        type={'Event Type'}
      />
      <FlatList
        data={data}
        style={GlobalStyle.Padding}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item}) => <EventCard data={item} />}
      />
      <EventBottom />
    </Body>
  );
};

export default EventScreen;
