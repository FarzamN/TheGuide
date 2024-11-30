import React from 'react';
import {styles} from './style';
import {Text as T} from 'react-native';

const Text = ({title, style, center}) => {
  return (
    <T style={[styles.text, {textAlign: center ? 'center' : 'left'}, style]}>
      {title}
    </T>
  );
};

export default Text;
