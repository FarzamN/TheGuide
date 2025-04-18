import React from 'react';
import moment from 'moment';
import {style} from './style';
import {FullImage} from '../../../../components';
import {GlobalStyle} from '../../../../utils/GlobalStyle';
import {View, Text, TouchableOpacity} from 'react-native';

const InboxCard = ({data, index, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
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
          <Text style={style.title}>{data.contact_name}</Text>
          <Text style={style.createdAt}>
            {moment(data.createdAt).format('DD/MM/YYYY')}
          </Text>
        </View>
        <Text style={style.lastMsg}>{data.message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default InboxCard;
