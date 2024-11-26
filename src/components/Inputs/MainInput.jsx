import React, {forwardRef, useState} from 'react';
import {useController} from 'react-hook-form';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';
import {Validation} from '..';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const MainInput = forwardRef((props, ref) => {
  const [password, setPassword] = useState(true);

  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });

  return (
    <View>
      <View style={[styles.smallbox, props.style]}>
        <Icon
          size={18}
          style={{width: 25}}
          name={props.icName}
          type={props.type}
          color={Color.placeholderTextColor}
        />
        <TextInput
          ref={ref}
          value={field.value}
          onFocus={props.onFocus}
          editable={props.disable}
          cursorColor={Color.Main}
          maxLength={props.maxLength}
          multiline={props.multiline}
          selectionColor={Color.Main}
          onChangeText={field.onChange}
          placeholder={props.placeholder}
          keyboardType={props.keyboardType}
          numberOfLines={props.numberOfLines}
          secureTextEntry={props.isPass && password}
          style={[styles.InputStyles, props.restyle]}
          placeholderTextColor={Color.placeholderTextColor}
        />
        {props.isPass && (
          <TouchableOpacity onPress={() => setPassword(pre => !pre)}>
            <Icon
              type={IconType.Entypo}
              size={18}
              color={Color.black}
              name={password ? 'eye' : 'eye-with-line'}
            />
          </TouchableOpacity>
        )}
      </View>
      {props.isError && <Validation isError message={props.message} />}
    </View>
  );
});

const styles = StyleSheet.create({
  InputStyles: {
    width: '80%',
    fontSize: 13,
    height: '100%',
    color: Color.black,
    fontFamily: Font.font500,
  },
  smallbox: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 10,
    height: 48,
    backgroundColor: Color.background,
    borderRadius: 20,
  },
  Text: {
    color: Color.white,
    fontFamily: Font.font500,
    fontSize: 14,
  },
});
export default MainInput;
