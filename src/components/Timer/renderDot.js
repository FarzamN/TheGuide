import React from 'react';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {styles} from './style';
import {tab} from '../../utils/Constants';

const RenderDot = () => {
  return (
    <Icon
      color={'gray'}
      size={tab ? 22 : 18}
      style={styles.DotCon}
      type={IconType.Entypo}
      name="dots-two-vertical"
    />
  );
};

export default RenderDot;
