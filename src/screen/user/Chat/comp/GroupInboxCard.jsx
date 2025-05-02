import React from 'react';
import {style} from './style';
import {FullImage} from '../../../../components';
import {View, Text, TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../../../../utils/GlobalStyle';
import {defaultProfileImage} from '../../../../utils/Constants';

const GroupInboxCard = ({data, index, onPress, onPrayPress}) => {
  const disable = data.prayed_for_today !== 0;
  return (
    <TouchableOpacity
      onPress={onPress}
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
        // source={{uri: data.image}}
        source={{uri: defaultProfileImage}}
      />
      <View style={{marginLeft: 15, flex: 1}}>
        <Text style={style.title}>{data.group_name}</Text>
        <Text style={style.lastMsg}>Prayed Streak: 23</Text>
      </View>
      <TouchableOpacity
        disabled={disable}
        onPress={onPrayPress}
        style={[
          style.prayBtn,
          {
            backgroundColor: disable ? '#FFD785' : '#FFD700',
          },
        ]}>
        <Text style={style.btnText}>{disable ? 'Prayed' : 'Pray'}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default GroupInboxCard;
