import React, {forwardRef} from 'react';
import {useController} from 'react-hook-form';
import {StyleSheet, TextInput, View} from 'react-native';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';

const MainInput = forwardRef((props, ref) => {
  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });

  return (
    <View style={[styles.smallbox, props.style, props.Hello]}>
      <TextInput
        ref={ref}
        value={field.value}
        onFocus={props.onFocus}
        onChangeText={field.onChange}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        placeholder={props.placeholder}
        placeholderTextColor={Color.placeholderTextColor}
        style={[styles.InputStyles, props.Gapp, props.restyle]}
        maxLength={props.maxLength}
        cursorColor={Color.Main}
        selectionColor={Color.Main}
        keyboardType={props.keyboardType}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  InputStyles: {
    width: '80%',
    height: '100%',
    color: Color.black,
    fontFamily: Font.font500,
  },
  smallbox: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
    height: 50,
    backgroundColor: Color.white,
    borderRadius: 20,
  },
  Text: {
    color: Color.white,
    fontFamily: Font.font500,
    fontSize: 15,
  },
});
export default MainInput;
