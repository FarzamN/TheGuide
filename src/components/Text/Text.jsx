import React from 'react';
import {Text as T} from 'react-native';
import {Color} from '../../utils/Color';

const Text = ({title, style, center, selectable}) => {
  return (
    <T
      selectable={selectable}
      style={[
        {textAlign: center ? 'center' : 'left', color: Color.black},
        style,
      ]}>
      {title}
    </T>
  );
};

export default Text;
