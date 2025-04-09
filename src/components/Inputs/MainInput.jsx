import {Validation} from '..';
import {Color} from '../../utils/Color';
import {tab} from '../../utils/Constants';
import {useController} from 'react-hook-form';
import React, {forwardRef, useState} from 'react';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

const MainInput = forwardRef((props, ref) => {
  const [password, setPassword] = useState(true);

  const {field} = useController({
    name: props.name,
    rules: props.rules,
    control: props.control,
    defaultValue: props.defaultValue || '',
  });

  const phoneHeight = tab ? 60 : 48;

  return (
    <>
      <View
        style={[
          styles.InputCont,
          {
            height: props.height ? props.height : phoneHeight,
            alignItems: props.multiline ? 'flex-start' : 'center',
          },
          props.style,
        ]}>
        {props.icName && (
          <Icon
            type={props.type}
            name={props.icName}
            size={tab ? 25 : 18}
            color={Color.placeholderTextColor}
            style={{width: 25, marginTop: props.multiline ? 10 : 0}}
          />
        )}
        <TextInput
          ref={ref}
          value={field.value}
          onFocus={props.onFocus}
          editable={props.disable}
          cursorColor={Color.Main}
          maxLength={props.maxLength}
          autoFocus={props.autoFocus}
          multiline={props.multiline}
          selectionColor={Color.Main}
          onChangeText={field.onChange}
          placeholder={props.placeholder}
          textAlignVertical={props.multiline ? 'top' : undefined}
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
    </>
  );
});

const styles = StyleSheet.create({
  InputStyles: {
    width: tab ? '90%' : '80%',
    fontSize: tab ? 18 : 13,
    height: '100%',
    color: Color.black,
    fontWeight: '500',
    paddingLeft: tab ? 20 : 0,
  },
  InputCont: {
    alignSelf: 'center',

    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 10,

    backgroundColor: Color.background,

    borderRadius: tab ? 25 : 20,
  },
});
export default MainInput;
