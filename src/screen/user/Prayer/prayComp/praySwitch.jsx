import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from '../../../../components';
import {style} from './style';
import LinearGradient from 'react-native-linear-gradient';
import {GlobalStyle} from '../../../../utils/GlobalStyle';
import {Color} from '../../../../utils/Color';

const PraySwitch = ({data, onPress, focus}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={[style.switchCont, GlobalStyle.justify]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={focus ? ['#49BCFF', '#0189FF'] : [Color.white, Color.white]}>
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

export default PraySwitch;
