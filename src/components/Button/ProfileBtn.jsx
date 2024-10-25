import {View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Text} from '..';
import {width} from '../../utils/Constants';
import {GlobalStyle} from '../../utils/GlobalStyle';

//  small ? '48%' : '100%'

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
