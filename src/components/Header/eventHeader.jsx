import {View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Text, FullImage} from '..';
import style from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {Color} from '../../utils/Color';

const EventHeader = ({children, title, onPress}) => {
  const {navigate, dispatch} = useNavigation();

  const openDrawer = () => dispatch(DrawerActions.openDrawer());

  const userDetail = useSelector(state => state.userDetails);
  const isGuest = userDetail === 'guest';
  return (
    <>
      <ImageBackground
        resizeMode="stretch"
        style={style.BannerImage}
        source={require('../../assets/image/game-banner.png')}>
        <View style={[GlobalStyle.between, style.HeadRow]}>
          <TouchableOpacity style={[GlobalStyle.justify]} onPress={openDrawer}>
            <FullImage
              sizeMode="cover"
              style={style.ProfileImage}
              source={
                isGuest
                  ? require('../../assets/image/default.jpg')
                  : {uri: userDetail.profile_image}
              }
            />
            <View style={style.nameBox}>
              <Text
                center
                fontScaling
                style={style.name}
                title={
                  isGuest ? '0x' : userDetail.user_game_prayer_total_streak
                }
              />
            </View>
          </TouchableOpacity>
          {/* profile image here */}
          <TouchableOpacity onPress={onPress}>
            <Text style={style.ProfileTitle} title={title} />
          </TouchableOpacity>
          <TouchableOpacity>
            {/* onPress={handleShopping}> */}
            <Image
              resizeMode="contain"
              style={style.dashboardCartImage}
              tintColor={Color.Non}
              source={require('../../assets/image/cart.png')}
            />
          </TouchableOpacity>
        </View>
        {children}
      </ImageBackground>
    </>
  );
};

export default EventHeader;
