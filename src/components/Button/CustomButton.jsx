import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';
const CustomButton = props => {
  return (
    <Pressable
      android_ripple={{
        color: 'rgba(20, 24, 36, 1)',
        borderless: true,
        foreground: true,
      }}
      disabled={props.disabled}
      onPress={props.onPress}
      style={[styles.containerStyle, props.containerStyle]}>
      {props.Play && (
        <Entypo
          style={{paddingHorizontal: 5}}
          name="controller-play"
          color={Color.white}
          size={20}
        />
      )}

      <Text style={[styles.font, props.textStyle]}>{props.title}</Text>
      {props.selected ? (
        <AntDesign
          style={{paddingHorizontal: 5}}
          name="checkcircle"
          color={Color.Main}
          size={20}
        />
      ) : null}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  containerStyle: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 5,
    alignSelf: 'center',
    backgroundColor: '#CED9F8',
    height: 52,
    borderWidth: 1,
    borderColor: Color.Yellow,
    flexDirection: 'row',
    overflow: 'hidden',
  },

  font: {
    color: Color.black,
    fontSize: 15,
    textTransform: 'capitalize',
    fontFamily: Font.font500,
  },
});
