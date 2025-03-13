import {Validation} from '..';
import {Font} from '../../utils/Font';
import {Color} from '../../utils/Color';
import {useController} from 'react-hook-form';
import React, {forwardRef, useState} from 'react';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import { tab } from '../../utils/Constants';

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
          type={props.type}
          style={{width: 25}}
          name={props.icName}
          size={tab ? 25 : 18}
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
              size={tab ? 25 : 18}
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
    width: tab ? "90%" : '80%',
    fontSize: tab ? 18 : 13,
    height: '100%',
    color: Color.black,
    fontWeight: '500',
    paddingLeft:tab ? 20 : 0
  },
  smallbox: {
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 10,
    height: tab ? 60 : 48,
    backgroundColor: Color.background,
    
    borderRadius: tab ? 25 : 20,

  },
  Text: {
    color: Color.white,
    fontWeight: '500',
    fontSize: tab ? 16 : 14,
  },
});
export default MainInput;
