import React from 'react';
import {style} from './style';
import {Color} from '../../utils/Color';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const Keyboard = ({onPressKey, onDelete, onDone, visible}) => {
  const renderKey = value => (
    <TouchableOpacity
      key={value}
      style={style.key}
      onPress={() => onPressKey(value)}>
      <Text style={style.keyText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    visible && (
      <>
        <View style={style.KeyboardRow}>{['1', '2', '3'].map(renderKey)}</View>
        <View style={style.KeyboardRow}>{['4', '5', '6'].map(renderKey)}</View>
        <View style={style.KeyboardRow}>{['7', '8', '9'].map(renderKey)}</View>
        <View style={style.KeyboardRow}>
          <TouchableOpacity
            style={[style.key, {backgroundColor: '#4A76FD'}]}
            onPress={onDone}>
            <Icon
              size={25}
              color={Color.white}
              name="checkmark-done"
              type={IconType.Ionicons}
            />
          </TouchableOpacity>
          {renderKey('0')}
          <TouchableOpacity
            style={[style.key, {backgroundColor: 'red'}]}
            onPress={onDelete}>
            <Icon
              size={22}
              name="delete"
              color={Color.white}
              type={IconType.Feather}
            />
          </TouchableOpacity>
        </View>
      </>
    )
  );
};

export default Keyboard;
