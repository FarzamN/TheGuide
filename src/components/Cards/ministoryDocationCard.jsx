import {View} from 'react-native';
import React from 'react';
import {FullImage, Text} from '..';
import {Image_Url} from '../../utils/Urls';
import {styles} from './style';

const MinistoryDocationCard = ({data}) => {
  const uri = Image_Url + data.thumbnail;
  return (
    <View style={styles.ministoryCont}>
      <Text center style={styles.ministoryTitle} title={data.title} />
      <FullImage
        sizeMode={'cover'}
        source={{uri}}
        radius={20}
        style={styles.ministoryImage}
      />
    </View>
  );
};

export default MinistoryDocationCard;
