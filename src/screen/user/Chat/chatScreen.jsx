import {View, Text} from 'react-native';
import React from 'react';
import Header from './comp/header';
import {Body} from '../../../components';

const ChatScreen = ({route}) => {
  const {item} = route.params
  return (
    <Body>
      <Header title={item.title} onFilter={() => setShowSort(true)} isChat source={{uri: item.image}}/>
    </Body>
  );
};

export default ChatScreen;
