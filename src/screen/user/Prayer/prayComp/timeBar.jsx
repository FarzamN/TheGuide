import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../../utils/GlobalStyle';
import {Text} from '../../../../components';
import {style} from './style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Color} from '../../../../utils/Color';

const TimeBar = () => {
  return (
    <View style={[style.barCont, GlobalStyle.between]}>
      <Text style={style.time} title={'1hr 23min 10sec'} />
      <View style={GlobalStyle.between}>
        {[
          {name: 'stopwatch', type: IconType.Entypo},
          {name: 'stopwatch', type: IconType.Entypo},
          {name: 'stopwatch', type: IconType.Entypo},
          {name: 'stopwatch', type: IconType.Entypo},
        ].map((i, ix) => (
          <TouchableOpacity key={ix} style={style.iconBox}>
            <Icon name={i.name} color={Color.orange} size={20} type={i.type} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TimeBar;
