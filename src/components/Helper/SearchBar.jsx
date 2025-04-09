import React from 'react';
import {Color} from '../../utils/Color';
import {GlobalStyle} from '../../utils/GlobalStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

const SearchBar = props => {
  const {onChange, value, onClose, styles} = props;

  return (
    <View style={[style.SearchContainer, GlobalStyle.between, styles]}>
      <View style={GlobalStyle.row}>
        <Icon
          type={IconType.Ionicons}
          name="search"
          size={20}
          color={Color.grey}
        />
        <TextInput
          value={value}
          placeholder="Search"
          onChangeText={onChange}
          style={style.SearchInput}
          cursorColor={Color.orange}
          selectionColor={Color.orange}
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

const style = StyleSheet.create({
  SearchContainer: {
    // marginHorizontal: 20,
    borderWidth: 1,
    height: 50,
    width: 250,
    borderRadius: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderColor: Color.Main,
    backgroundColor: Color.white,
  },
  SearchInput: {
    fontSize: 15,
    color: Color.black,
    fontWeight: '500',
    width: '82%',
    marginLeft: 5,
  },
});
