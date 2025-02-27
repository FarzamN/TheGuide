import React from 'react';
import {style} from './style';
import {Color} from '../../utils/Color';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const SearchBar = props => {
  const {onChange, value, onClose} = props;

  return (
    <View style={[style.SearchContainer, GlobalStyle.between]}>
      <View style={GlobalStyle.row}>
        <Icon type={IconType.Ionicons} name="search" size={20} color={Color.grey} />
        <TextInput
          autoFocus
          value={value}
          placeholder="Search"
          onChangeText={onChange}
          cursorColor={Color.orange}
          selectionColor={Color.orange}
          style={style.SearchInput}
          placeholderTextColor={Color.placeholderTextColor}
        />
      </View>
      {value.length >= 1 && (
        <TouchableOpacity onPress={onClose}>
          <Icon
            size={20}
            color={Color.grey}
            name="close-circle"
            type={IconType.Ionicons}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBar;
