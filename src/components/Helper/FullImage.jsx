import React from 'react';
import {View, Image} from 'react-native';
import {GlobalStyle} from '../../utils/GlobalStyle';

const FullImage = ({style, source, ImageStyle, radius, sizeMode, color}) => {
  return (
    <View style={style}>
      <Image
        source={source}
        tintColor={color}
        resizeMode={sizeMode || 'contain'}
        style={[GlobalStyle.full, ImageStyle, {borderRadius: radius}]}
      />
    </View>
  );
};

export default FullImage;
