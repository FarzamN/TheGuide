import React from 'react';
import moment from 'moment';
import {style} from './style';
import {FullImage} from '../../../../components';
import {GlobalStyle} from '../../../../utils/GlobalStyle';
import {View, Text, TouchableOpacity} from 'react-native';
import {defaultProfileImage} from '../../../../utils/Constants';

const TopicCard = ({data, index, onPress}) => {
  console.log('data', data);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        GlobalStyle.row,
        style.inboxCont,
        {marginTop: index === 0 ? 15 : 0, marginBottom: 15},
      ]}>
      <FullImage
        radius={50}
        sizeMode={'cover'}
        style={style.inboxDP}
        // source={{uri: data.image}}
        source={{uri: defaultProfileImage}}
      />
      <View style={{width: '100%'}}>
        <View style={[GlobalStyle.between, {width: '80%'}]}>
          <Text style={style.title}>{data.topic_name}</Text>
          <Text style={style.createdAt}>
            {moment(data.createdAt).format('DD/MM/YYYY')}
          </Text>
        </View>
        <Text style={style.lastMsg}>{data.topic_message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TopicCard;
