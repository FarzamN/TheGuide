import {
  View,
  ImageBackground,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../../../utils/GlobalStyle';
import homeDashboardStyle from '../../../../components/Header/style';
import {useDispatch, useSelector} from 'react-redux';
import {DrawerActions} from '@react-navigation/native';
import {FullImage, SearchBar, Text} from '../../../../components';
import {Color} from '../../../../utils/Color';

const IndexHeader = ({children, onChange, value, onClose}) => {
  const dispatch = useDispatch();
  const openDrawer = () => dispatch(DrawerActions.openDrawer());

  const userDetail = useSelector(state => state.userDetails);
  const isGuest = userDetail === 'guest';
  return (
    <>
      <ImageBackground
        resizeMode="stretch"
        style={homeDashboardStyle.BannerImage}
        source={require('../../../../assets/image/game-banner.png')}>
        <View style={[GlobalStyle.between, homeDashboardStyle.HeadRow]}>
          <TouchableOpacity style={[GlobalStyle.justify]} onPress={openDrawer}>
            <FullImage
              sizeMode="cover"
              style={homeDashboardStyle.ProfileImage}
              source={
                isGuest
                  ? require('../../../../assets/image/default.jpg')
                  : {uri: userDetail.profile_image}
              }
            />
            <View style={homeDashboardStyle.nameBox}>
              <Text
                center
                fontScaling
                style={homeDashboardStyle.name}
                title={
                  isGuest ? '0x' : userDetail.user_game_prayer_total_streak
                }
              />
            </View>
          </TouchableOpacity>
          {/* Search Bar here */}
          <SearchBar
            placeholder="Search"
            onChange={onChange}
            value={value}
            onClose={onClose}
          />

          <TouchableOpacity>
            {/* <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://theguide.us/shop-with-points')
            }> */}
            <Image
              resizeMode="contain"
              style={homeDashboardStyle.dashboardCartImage}
              tintColor={Color.Non}
              source={require('../../../../assets/image/cart.png')}
            />
          </TouchableOpacity>
        </View>
        {children}
      </ImageBackground>
    </>
  );
};

export default IndexHeader;
