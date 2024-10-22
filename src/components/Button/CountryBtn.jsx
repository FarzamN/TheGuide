import {Text} from '..';
import React from 'react';
import {styles} from './style';
import {Color} from '../../utils/Color';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {TouchableOpacity, View} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const CountryBtn = ({title, name, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.CountryContainer, GlobalStyle.between]}>
      <View style={GlobalStyle.row}>
        <Icon
          size={20}
          name={name}
          type={IconType.MaterialIcons}
          color={Color.placeholderTextColor}
        />
        <Text style={styles.CountryText} title={title} />
      </View>
      <Icon
        size={20}
        type={IconType.Entypo}
        name="chevron-small-down"
        color={Color.placeholderTextColor}
      />
    </TouchableOpacity>
  );
};

export default CountryBtn;
