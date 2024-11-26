import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '../../../../components';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../../../../utils/Color';
import {GlobalStyle} from '../../../../utils/GlobalStyle';
import {style} from './style';
import {end, start} from '../../../../utils/Data';

const TimeService = ({data, onPress, focus}) => {
  const {white, textGrey} = Color;
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={[
          style.TimeCont,
          GlobalStyle.justify,
          {borderColor: focus ? '#3BC77E' : textGrey},
        ]}
        start={start}
        end={end}
        colors={focus ? ['#22E984', '#04D16A'] : [white, white]}>
        <Text
          title={data.title}
          style={[style.switchText, {color: focus ? white : textGrey}]}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default TimeService;
