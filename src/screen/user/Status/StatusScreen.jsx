import React from 'react';
import {Body, DashboardHeader, Empty, StatusCard} from '../../../components';
import {FlatList} from 'react-native';
import {GlobalStyle} from '../../../utils/GlobalStyle';

const StatusScreen = () => {
  const data = [
    {first: 'l1', title: '60', days: 30, progress: '20%'},
    {first: 'l2', title: '30', days: 14, progress: '60%'},
    {first: 'l2', title: '30', days: 14, progress: '60%'},
    {first: 'l2', title: '30', days: 14, progress: '60%'},
    {first: 'l2', title: '30', days: 14, progress: '60%'},
    {first: 'l2', title: '30', days: 14, progress: '60%'},
    {first: 'l2', title: '30', days: 14, progress: '60%'},
    {first: 'l2', title: '30', days: 14, progress: '60%'},
    {first: 'l2', title: '30', days: 14, progress: '60%'},
  ];
  return (
    <Body>
      <DashboardHeader />
      <FlatList
        data={data}
        style={GlobalStyle.Padding}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Empty title="No Status Found" />}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item, index}) => <StatusCard data={item} />}
      />
    </Body>
  );
};

export default StatusScreen;
