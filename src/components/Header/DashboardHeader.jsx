import style from './style';
import React, {useState} from 'react';
import {Error, FullImage, Text} from '..';
import {tab} from '../../utils/Constants';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {
  View,
  Image,
  Linking,
  Text as T,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Color} from '../../utils/Color';

const DashboardHeader = ({onPray, onRequest}) => {
  const dispatched = useDispatch();
  const {navigate, dispatch} = useNavigation();

  const pray_time = useSelector(state => state.pray_time);
  const bible_time = useSelector(state => state.bible_time);
  const userDetail = useSelector(state => state.userDetails);
  const isGuest = userDetail === 'guest';

  const pray_streak = useSelector(state => state.pray_streak);
  const bible_streak = useSelector(state => state.bible_streak);
  const pool_points = useSelector(state => state.user_total_points);

  const [showGuest, setShowGuest] = useState(false);

  let cleanStreak = parseInt(pray_streak.replace('x', ''), 10);

  const handleShopping = () => {
    // if (pool_points == 0) {
    //   setShowGuest(true);
    //   setTimeout(() => setShowGuest(false), 2000);
    //   return;
    // }
    Linking.openURL('https://theguide.us/shop-with-points');
  };
  const openDrawer = () => dispatch(DrawerActions.openDrawer());
  return (
    <>
      <ImageBackground
        resizeMode="stretch"
        style={style.BannerImage}
        source={require('../../assets/image/game-banner.png')}>
        <View style={[GlobalStyle.between, style.HeadRow]}>
          {/* <TouchableOpacity onPress={openDrawer}>
          <Image
            style={style.dashboardHeadImage}
            resizeMode="contain"
            source={require('../../assets/image/menu.png')}
          />
        </TouchableOpacity> */}
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
          <Text style={style.ProfileTitle} title={'Revival Bible School'} />

          {/* <FullImage
            style={style.ProfileAppLogo}
            sizeMode="contain"
            source={require('../../assets/image/black-logo.png')}
          /> */}
          {/* <TouchableOpacity style={style.pointBox} onPress={onRequest}>
            <T style={style.ProfileTitle}>
              {pool_points > 0 ? `My Points: ` : 'Click here to request points'}
              {pool_points > 0 && (
                <Text
                  style={[
                    style.ProfileTitle,
                    {color: pool_points > 50 ? 'white' : '#F11F2E'},
                  ]}
                  title={pool_points}
                />
              )}
            </T>
          </TouchableOpacity> */}

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
        <View style={GlobalStyle.evenly}>
          {[
            {
              onPress: null,
              title: 'Bible',
              time: bible_time,
              status: bible_streak || '0',
            },
            {
              title: 'Pray',
              onPress: onPray,
              time: pray_time,
              //^  == "00" ? userDetail.age <= 12 ? "10" : "30" : pray_time
              status: cleanStreak,
            },
          ].map((item, index) => {
            const isComplete =
              item.title == 'Pray' ? pray_time == 0 : bible_time === 'done';

            return (
              <TouchableOpacity
                key={index}
                onPress={item.onPress}
                activeOpacity={item.onPress ? 0.5 : 1}
                style={[style.box, GlobalStyle.justify]}>
                <View style={[GlobalStyle.justify, {width: '45%'}]}>
                  {isComplete ? (
                    <Icon
                      size={tab ? 40 : 30}
                      color="#22CA5D"
                      type={IconType.Ionicons}
                      name="checkmark-done-circle-outline"
                    />
                  ) : (
                    <>
                      <Text style={style.title} title={item.time || 'Due'} />
                      <Text style={style.data} title={item.title} />
                    </>
                  )}
                </View>
                <View style={style.line} />
                <View style={style.HeadTextBox}>
                  <Text style={style.prayLevel} center title={item.status} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ImageBackground>
      <Error
        visible={showGuest}
        message="You have no points in your pool. Please request points from a sponsor."
      />
    </>
  );
};

export default DashboardHeader;

/*
<TouchableOpacity
            onPress={() => navigate('profile')}
            style={{marginLeft: 7}}>
            <FullImage
              style={style.ProfileImage}
              sizeMode="cover"
              source={{
                uri: userDetail?.profile_image,
              }}
            />
            <View style={style.nameBox}>
              <Text
                center
                fontScaling
                style={style.name}
                title={userDetail?.name}
              />
            </View>
</TouchableOpacity>
*/
