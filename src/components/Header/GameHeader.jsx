import {Text} from '..';
import React from 'react';
import style from './style';
import {Color} from '../../utils/Color';
import {Bar} from 'react-native-progress';
import {tab, width} from '../../utils/Constants';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {style as icStyle} from '../../navigation/style';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {View, ImageBackground, TouchableOpacity} from 'react-native';

const GameHeader = ({title, onClose, subTitle, progress}) => {
  return (
    <ImageBackground
      resizeMode={tab ? 'repeat' : undefined}
      style={style.GameBannerImage}
      source={require('../../assets/image/game-banner.png')}>
      <View style={GlobalStyle.between}>
        <View style={{width: 30}} />
        <TouchableOpacity
          onPress={onClose}
          style={[icStyle.backIcon, GlobalStyle.justify]}>
          <Icon
            name="close"
            color={Color.black}
            size={tab ? 25 : 20}
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
        height={tab ? 20 : 12}
        borderRadius={20}
        borderColor="#113283"
        style={{alignSelf: 'center'}}
      />

      <Text center style={style.GameSubTitle} title={subTitle} />
    </ImageBackground>
  );
};

export default GameHeader;
