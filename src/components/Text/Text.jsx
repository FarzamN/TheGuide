import {Text as T} from 'react-native';
import React from 'react';
import {styles} from './style';

const Text = ({title, style, center}) => {
  return (
    <T style={[styles.text, {textAlign: center ? 'center' : 'left'}, style]}>
      {title}
    </T>
  );
};

export default Text;
