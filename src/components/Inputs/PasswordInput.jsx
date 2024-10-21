import React, {forwardRef, useState} from 'react';
import {useController} from 'react-hook-form';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';

const PasswordInput = forwardRef((props, ref) => {
  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });

  const [password, setPassword] = useState(true);
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
        secureTextEntry={password}
        maxLength={props.maxLength}
        cursorColor={Color.Main}
        selectionColor={Color.Main}
      />
      <TouchableOpacity onPress={() => setPassword(!password)}>
        <Icon
          type={IconType.Entypo}
          size={20}
          color={Color.black}
          name={password ? 'eye' : 'eye-slash'}
        />
      </TouchableOpacity>
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
export default PasswordInput;
