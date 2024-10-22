import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';

const CustomButton = ({
  onPress,
  style,
  textStyle,
  title,
  load,
  marginTop,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.containerStyle,
        GlobalStyle.row,
        {marginTop: marginTop},
        style,
      ]}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={
          disabled
            ? ['#fdc962', '#fab95c', '#ffa051']
            : ['#FDBF44', '#F9AD41', '#FF8926']
        }
        style={[GlobalStyle.full, GlobalStyle.justify]}>
        <Text style={[styles.font, textStyle]}>
          {load ? 'Loading...' : title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomButton;
