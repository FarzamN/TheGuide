import React from 'react';
import {style} from './style';
import {Color} from '../../utils/Color';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';

const crossIcon = ({onPress}) => (
  <TouchableOpacity style={style.closeBTN} onPress={onPress}>
    <Icon name="cross" type={'Entypo'} size={20} color={Color.white} />
  </TouchableOpacity>
);
export default crossIcon;
