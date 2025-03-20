import React from 'react';
import {style} from './style';
import {Color} from '../../utils/Color';
import {TouchableOpacity} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const Plusbox = props => {
  const {onPress} = props;

  return (
    <TouchableOpacity onPress={onPress} style={style.PlusCont}>
      <Icon name="plus" size={25} color={Color.white} type={IconType.Entypo} />
    </TouchableOpacity>
  );
};

export default Plusbox;
