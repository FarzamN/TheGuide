import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '../../../../components';
import LinearGradient from 'react-native-linear-gradient';
import {Color} from '../../../../utils/Color';
import {GlobalStyle} from '../../../../utils/GlobalStyle';
import {style} from './style';

const TimeService = ({data, onPress, focus}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={[
          style.TimeCont,
          GlobalStyle.justify,
          {borderColor: focus ? '#3BC77E' : Color.textGrey},
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={focus ? ['#22E984', '#04D16A'] : [Color.white, Color.white]}>
        <Text
          style={[
            style.switchText,
            {color: focus ? Color.white : Color.textGrey},
          ]}
          title={data.title}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default TimeService;
