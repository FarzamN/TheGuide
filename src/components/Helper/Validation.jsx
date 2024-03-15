import {Text} from 'react-native';
import React from 'react';
import {style} from './style';

const Validation = props => {
  const {isError, message} = props;

  return <>{isError && <Text style={style.helperText}>{message}</Text>}</>;
};

export default Validation;
