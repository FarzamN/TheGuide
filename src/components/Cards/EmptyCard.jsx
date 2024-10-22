import {Text, View, Image} from 'react-native';
import React from 'react';
import {styles} from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';

const EmptyCard = ({textRestyle, title, mt}) => {
  return (
    <View style={[styles.container, {marginTop: mt ? mt : '30%'}]}>
      <View style={styles.ImageBox}>
        <Image
          style={GlobalStyle.full}
          resizeMode="contain"
          source={require('../../assets/image/empty.png')}
        />
      </View>
      <Text style={[styles.text, textRestyle]}>{title || 'No Data found'}</Text>
    </View>
  );
};

export default EmptyCard;
