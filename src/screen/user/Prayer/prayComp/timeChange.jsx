import React from 'react';
import {style} from './style';
import {TouchableOpacity} from 'react-native';
import {Text} from '../../../../components';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../../../../utils/Color';

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
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
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
