import React from 'react';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {styles} from './style';

const RenderDot = () => {
  return (
    <Icon
      size={18}
      color={'gray'}
      style={styles.DotCon}
      type={IconType.Entypo}
      name="dots-two-vertical"
    />
  );
};

export default RenderDot;
