import React from 'react';
import {FlatList} from 'react-native';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {Body, DashboardHeader, EventCard} from '../../../components';

const EventScreen = () => {
  return (
    <Body>
      <DashboardHeader />
      <FlatList
        data={[1, 1, 1]}
        style={GlobalStyle.Padding}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item}) => <EventCard data={item} />}
      />
    </Body>
  );
};

export default EventScreen;
