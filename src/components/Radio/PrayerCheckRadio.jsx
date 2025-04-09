import {Text} from '..';
import React from 'react';
import {styles} from './style';
import {Color} from '../../utils/Color';
import {tab} from '../../utils/Constants';
import {TouchableOpacity} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const PrayerCheckRadio = ({onPress, name, focus}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.PrayerChechBox, GlobalStyle.row]}>
      <Text style={[styles.Heading, {marginRight: 5}]} title={name} />
      <Icon
        size={tab ? 25 : 20}
        type={focus ? 'Ionicons' : 'MaterialCommunityIcons'}
        color={focus ? Color.Sky : Color.grey}
        name={focus ? 'checkbox' : 'checkbox-blank-outline'}
      />
    </TouchableOpacity>
  );
};

export default PrayerCheckRadio;
