import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Text} from '../../../../components';
import {style} from './style';
import LinearGradient from 'react-native-linear-gradient';
import {GlobalStyle} from '../../../../utils/GlobalStyle';
import {Color} from '../../../../utils/Color';
import {end, start} from '../../../../utils/Data';

const PraySwitch = ({title, onPress, focus, styles, notification}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={[style.switchCont, GlobalStyle.justify, GlobalStyle.row, styles]}
        start={start}
        end={end}
        colors={focus ? ['#49BCFF', '#0189FF'] : [Color.white, Color.white]}>
        {notification && (
          <View style={[style.notificationBox, GlobalStyle.justify]}>
            <Text style={style.notificationText} title={1} />
          </View>
        )}
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
