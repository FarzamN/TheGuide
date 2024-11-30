import React from 'react';
import {style} from './style';
import {TouchableOpacity, View} from 'react-native';
import {FullImage, Text} from '../../../../components';
import {GlobalStyle} from '../../../../utils/GlobalStyle';

const TimeBar = ({onMap, onTime, onVideo, onCalender, time}) => {
  return (
    <View style={[style.barCont, GlobalStyle.between]}>
      <Text style={style.time} title={time} fontScaling />
      <View style={GlobalStyle.between}>
        {[
          {
            press: onTime,
            icon: require('../../../../assets/image/timer.png'),
          },
          // {
          //   press: onCalender,
          //   icon: require('../../../../assets/image/pray-calender.png'),
          // },
          {
            press: onMap,
            icon: require('../../../../assets/image/map.png'),
          },
          // {
          //   press: onVideo,
          //   icon: require('../../../../assets/image/play.png'),
          // },
        ].map(({press, icon}, ix) => (
          <TouchableOpacity
            key={ix}
            onPress={press}
            style={[style.iconBox, GlobalStyle.shadow]}>
            <FullImage style={{width: 18, height: 18}} source={icon} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TimeBar;
