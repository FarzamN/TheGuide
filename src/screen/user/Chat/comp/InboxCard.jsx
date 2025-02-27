import {View, Text} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../../utils/GlobalStyle';
import {FullImage} from '../../../../components';
import {style} from './style';
import moment from 'moment';

const InboxCard = ({data, index}) => {
  return (
    <View
      style={[
        GlobalStyle.row,
        style.inboxCont,
        {marginTop: index === 0 ? 15 : 0, marginBottom: 15},
      ]}>
      <FullImage
        source={{uri: data.image}}
        sizeMode={'cover'}
        style={style.inboxDP}
        radius={50}
      />
      <View style={{width: '100%'}}>
        <View style={[GlobalStyle.between, {width: '80%'}]}>
          <Text style={style.title}>{data.title}</Text>
          <Text style={style.createdAt}>
            {moment(data.createdAt).format('DD/MM/YYYY')}
          </Text>
        </View>
        <Text style={style.lastMsg}>{data.lastMsg}</Text>
      </View>
    </View>
  );
};

export default InboxCard;
