import {View, Image} from 'react-native';
import {Text} from '..';
import React from 'react';
import {styles} from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import { tab } from '../../utils/Constants';

const EmptyCard = ({textRestyle, title}) => {
  return (
    <View style={[styles.container, {marginTop: tab ? "15%": '30%'}]}>
      <View style={styles.ImageBox}>
        <Image
          style={GlobalStyle.full}
          resizeMode="contain"
          source={require('../../assets/image/empty.png')}
        />
      </View>
      <Text
        style={[styles.text, textRestyle]}
        title={title || 'No Data found'}
      />
    </View>
  );
};

export default EmptyCard;
