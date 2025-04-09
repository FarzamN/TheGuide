import React from 'react';
import {style} from './style';
import {Color} from '../../utils/Color';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';

const crossIcon = ({onPress, styles}) => (
  <TouchableOpacity style={[style.closeBTN, styles]} onPress={onPress}>
    <Icon name="cross" type={'Entypo'} size={20} color={Color.white} />
  </TouchableOpacity>
);
export default crossIcon;
