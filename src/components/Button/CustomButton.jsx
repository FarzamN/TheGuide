import React from 'react';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {width} from '../../utils/Constants';
import {GlobalStyle} from '../../utils/GlobalStyle';

const CustomButton = ({disabled, onPress, style, textStyle, title}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[styles.containerStyle, GlobalStyle.row, style]}>
      <Text style={[styles.font, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 5,
    alignSelf: 'center',
    backgroundColor: '#094AA3',
    height: 52,
  },

  font: {
    color: Color.white,
    fontSize: 18,
    fontFamily: Font.font700,
  },
});
