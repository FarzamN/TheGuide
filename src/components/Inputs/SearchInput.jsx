import {View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Color} from '../../utils/Color';
import style from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const SearchInput = ({onChange, value, show, onClear}) => {
  return (
    <View style={[GlobalStyle.row, style.SearchBox]}>
      <Icon name={'search'} type={IconType.MaterialIcons} color={Color.grey} />
      <TextInput
        value={value}
        style={style.SearchInput}
        placeholder={'Search'}
        cursorColor={Color.Sky}
        onChangeText={onChange}
        placeholderTextColor={Color.placeholderTextColor}
      />
      <TouchableOpacity onPress={onClear}>
        <Icon
          name={'close-circle'}
          type={IconType.Ionicons}
          color={show ? Color.Non : Color.grey}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
