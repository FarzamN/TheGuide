import React from 'react';
import {styles} from './style';
import {end, start} from '../../utils/Data';
import {Text, TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({
  load,
  style,
  title,
  onPress,
  disabled,
  marginTop,
  textStyle,
}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
      style={[
        GlobalStyle.row,
        styles.containerStyle,
        {marginTop: marginTop},
        style,
      ]}>
      <LinearGradient
        start={start}
        end={end}
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
