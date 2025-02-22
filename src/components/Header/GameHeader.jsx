import {View, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {Text} from '..';
import style from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Color} from '../../utils/Color';
import {style as icStyle} from '../../navigation/style';
import {Bar} from 'react-native-progress';
import {tab, width} from '../../utils/Constants';

const GameHeader = ({title, onClose, subTitle, progress}) => {
  return (
    <ImageBackground
    resizeMode={tab ? "repeat" : undefined}
      style={style.GameBannerImage}
      source={require('../../assets/image/game-banner.png')}>
      <View style={{height: 10}} />

      <View style={GlobalStyle.between}>
        <View style={{width: 30}} />
        <Text center style={style.GameTitle} title={title} />

        <TouchableOpacity
          onPress={onClose}
          style={[icStyle.backIcon, GlobalStyle.justify]}>
          <Icon
            size={tab ?25 : 20}
            name="close"
            color={Color.black}
            type={IconType.Ionicons}
          />
        </TouchableOpacity>
      </View>

      <Bar
        progress={progress}
        width={width - 50}
        color="#06FF2F"
        unfilledColor={Color.background}
        height={tab ? 20 :12}
        borderRadius={20}
        borderColor="#113283"
        style={{alignSelf: 'center'}}
      />

      <Text center style={style.GameSubTitle} title={subTitle} />
    </ImageBackground>
  );
};

export default GameHeader;
