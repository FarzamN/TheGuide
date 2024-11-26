import React from 'react';
import {style} from './style';
import {TouchableOpacity} from 'react-native';
import {Text} from '../../../../components';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../../../../utils/Color';
import {end, start} from '../../../../utils/Data';

const TimeChange = ({data, focus, onPress, i}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={[
          style.TimeChangeCont,
          {
            marginLeft: i == 0 ? 10 : 0,
            borderColor: focus ? '#FA8930' : Color.lightgrey,
          },
        ]}
        start={start}
        end={end}
        colors={focus ? ['#FFC03D', Color.orange] : [Color.white, Color.white]}>
        <Text
          style={[
            style.timeChangeText,
            {color: focus ? Color.white : Color.textGrey},
          ]}
          title={`${data.toString()} min`}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default TimeChange;
