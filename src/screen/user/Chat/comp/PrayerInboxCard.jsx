import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {style} from './style';
import {FullImage} from '../../../../components';
import {GlobalStyle} from '../../../../utils/GlobalStyle';

const PrayerInboxCard = ({data, index, onPress}) => {
  return (
    <View
      style={[
        GlobalStyle.row,
        style.inboxCont,
        {
          marginBottom: 15,
          marginTop: index === 0 ? 15 : 0,
        },
      ]}>
      <FullImage
        source={{uri: data.image}}
        sizeMode={'cover'}
        style={style.inboxDP}
        radius={50}
      />
      <View style={{marginLeft: 15, flex: 1}}>
        <Text style={style.title}>{data.title}</Text>
        <View style={[GlobalStyle.between, {marginVertical: 8}]}>
          <Text style={style.lastMsg}>People: 23</Text>
          <Text style={style.lastMsg}>Prayed: 232</Text>
        </View>
        <View style={[GlobalStyle.row, {gap: 10}]}>
          <TouchableOpacity style={style.prayBtn}>
            <Text style={style.btnText}>Pray</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.shareBtn}>
            <Text style={style.btnText}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.deleteBtn}>
            <Text style={style.btnText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PrayerInboxCard;
