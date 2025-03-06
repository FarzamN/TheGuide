import {Text} from '..';
import React from 'react';
import {styles} from './style';
import {View} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';

const ProfileBtn = ({title, small}) => {
  return (
    <View
      style={[
        styles.PCont,
        GlobalStyle.justify,
        {width: small ? '49%' : '100%'},
      ]}>
      <Text style={styles.Ptitle} title={title} />
    </View>
  );
};

export default ProfileBtn;
