import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../../utils/GlobalStyle';
import {FullImage, Text} from '../../../../components';
import {style} from './style';

const TimeBar = ({onMap, onTime, onVideo, onCalender, time}) => {
  return (
    <View style={[style.barCont, GlobalStyle.between]}>
      <Text style={style.time} title={time} />
      <View style={GlobalStyle.between}>
        {[
          {
            onPress: onTime,
            icon: require('../../../../assets/image/timer.png'),
          },
          {
            onPress: onCalender,
            icon: require('../../../../assets/image/pray-calender.png'),
          },
          {
            onPress: onMap,
            icon: require('../../../../assets/image/map.png'),
          },
          {
            onPress: onVideo,
            icon: require('../../../../assets/image/play.png'),
          },
        ].map((i, ix) => (
          <TouchableOpacity
            key={ix}
            onPress={i.onPress}
            style={[style.iconBox, GlobalStyle.shadow]}>
            <FullImage style={{width: 20, height: 20}} source={i.icon} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TimeBar;
