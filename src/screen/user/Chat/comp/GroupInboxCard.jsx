import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {style} from './style';
import {FullImage} from '../../../../components';
import {GlobalStyle} from '../../../../utils/GlobalStyle';

const GroupInboxCard = ({data, index, onPress}) => {
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
        radius={50}
        sizeMode={'cover'}
        style={style.inboxDP}
        source={{uri: data.image}}
      />
      <View style={{marginLeft: 15, flex: 1}}>
        <Text style={style.title}>{data.title}</Text>
        <Text style={style.lastMsg}>Prayed Streak: 23</Text>
      </View>
      <TouchableOpacity style={style.prayBtn}>
        <Text style={style.btnText}>Pray</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GroupInboxCard;
