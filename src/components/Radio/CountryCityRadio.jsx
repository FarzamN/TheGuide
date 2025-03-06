import {Text} from '..';
import React from 'react';
import {styles} from './style';
import {Color} from '../../utils/Color';
import {tab} from '../../utils/Constants';
import {TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const CountryCityRadio = ({onPress, name, focus}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.row, GlobalStyle.between]}>
      <Text style={styles.Heading} title={name} />
      <Icon
        size={tab ? 25 : 20}
        type={IconType.Fontisto}
        color={focus ? Color.Sky : Color.grey}
        name={focus ? 'radio-btn-active' : 'radio-btn-passive'}
      />
    </TouchableOpacity>
  );
};

export default CountryCityRadio;
