import {View, Image} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';

const FullImage = ({style, source, ImageStyle, radius, sizeMode, color}) => {
  return (
    <View style={style}>
      <Image
        tintColor={color}
        resizeMode={sizeMode || 'contain'}
        source={source}
        style={[GlobalStyle.full, ImageStyle, {borderRadius: radius}]}
      />
    </View>
  );
};

export default FullImage;
