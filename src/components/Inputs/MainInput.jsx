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
          size={20}
          style={{width: 25}}
          name={props.icName}
          type={props.type}
          color={Color.placeholderTextColor}
        />
        <TextInput
          editable={props.disable}
          ref={ref}
          value={field.value}
          onFocus={props.onFocus}
          onChangeText={field.onChange}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines}
          placeholder={props.placeholder}
          placeholderTextColor={Color.placeholderTextColor}
          style={[styles.InputStyles, props.restyle]}
          maxLength={props.maxLength}
          cursorColor={Color.Main}
          selectionColor={Color.Main}
          keyboardType={props.keyboardType}
        />
        {props.isPass && (
          <TouchableOpacity onPress={() => setPassword(pre => !pre)}>
            <Icon
              type={IconType.Entypo}
              size={20}
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
    height: 50,
    backgroundColor: Color.background,
    borderRadius: 20,
  },
  Text: {
    color: Color.white,
    fontFamily: Font.font500,
    fontSize: 15,
  },
});
export default MainInput;
