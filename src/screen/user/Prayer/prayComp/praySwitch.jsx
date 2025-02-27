import React from 'react';
import {style} from './style';
import {Text} from '../../../../components';
import {Color} from '../../../../utils/Color';
import {TouchableOpacity} from 'react-native';
import {end, start} from '../../../../utils/Data';
import LinearGradient from 'react-native-linear-gradient';
import {GlobalStyle} from '../../../../utils/GlobalStyle';

const PraySwitch = ({title, onPress, focus}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={[style.switchCont, GlobalStyle.justify]}
        start={start}
        end={end}
        colors={focus ? ['#49BCFF', '#0189FF'] : [Color.white, Color.white]}>
        <Text
          style={[
            style.switchText,
            {color: focus ? Color.white : Color.textGrey},
          ]}
          title={title}
        />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default PraySwitch;
