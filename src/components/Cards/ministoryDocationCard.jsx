import {ImageBackground, View} from 'react-native';
import React from 'react';
import {FullImage, Text} from '..';
import {Image_Url} from '../../utils/Urls';
import {styles} from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';

const MinistoryDocationCard = ({data}) => {
  const uri = Image_Url + data.thumbnail;
  return (
    <View style={[styles.ministoryCont, GlobalStyle.justify]}>
      <Text center style={styles.ministoryTitle} title={data.title} />
      <View style={styles.MinistorDocImageBox}>
        <ImageBackground
          blurRadius={50}
          source={{uri}}
          style={[GlobalStyle.full, GlobalStyle.justify]}>
          <FullImage
            radius={20}
            source={{uri}}
            // sizeMode={'cover'}
            style={GlobalStyle.full}
          />
        </ImageBackground>
      </View>
    </View>
  );
};

export default MinistoryDocationCard;
