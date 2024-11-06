import {View, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {Text} from '..';
import style from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Color} from '../../utils/Color';
import {style as icStyle} from '../../navigation/style';
import {Bar} from 'react-native-progress';
import navigationColor from 'react-native-system-navigation-bar';
import {width} from '../../utils/Constants';

const GameHeader = ({title, onClose, subTitle, progress}) => {
  return (
    <ImageBackground
      style={style.GameBannerImage}
      source={require('../../assets/image/game-banner.png')}>
      <View style={GlobalStyle.between}>
        <View style={{width: 50}} />

        <TouchableOpacity
          onPress={onClose}
          style={[icStyle.backIcon, GlobalStyle.justify]}>
          <Icon
            size={20}
            name="close"
            color={Color.black}
            type={IconType.Ionicons}
          />
        </TouchableOpacity>
      </View>
      <Text center style={style.GameTitle} title={title} />

      <Bar
        progress={progress}
        width={width - 50}
        color="#06FF2F"
        unfilledColor={Color.background}
        height={12}
        borderRadius={20}
        borderColor="#113283"
        style={{alignSelf: 'center'}}
      />

      <Text center style={style.GameSubTitle} title={subTitle} />
    </ImageBackground>
  );
};

export default GameHeader;
