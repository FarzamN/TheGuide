import React from 'react';
import style from './style';
import {FullImage, Text} from '..';
import {Bar} from 'react-native-progress';
import {tab} from '../../utils/Constants';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {Color} from '../../utils/Color';

const DashboardHeader = ({onPray, onRequest}) => {
  const dispatched = useDispatch();
  const {navigate, dispatch} = useNavigation();

  const userDetail = useSelector(state => state.userDetails);
  const pray_time = useSelector(state => state.pray_time);
  const bible_streak = useSelector(state => state.bible_streak);
  const bible_time = useSelector(state => state.bible_time);
  const pray_streak = useSelector(state => state.pray_streak);

  let cleanStreak = parseInt(pray_streak.replace('x', ''), 10);

  const notiHandler = () => {
    //    navigate('Notification');
  };
  const openDrawer = () => dispatch(DrawerActions.openDrawer());
  return (
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
            source={{
              uri: userDetail?.profile_image,
            }}
          />
          <View style={style.nameBox}>
            <Text center fontScaling style={style.name} title={'1x'} />
          </View>
        </TouchableOpacity>
        {/* profile image here */}

        <TouchableOpacity style={style.pointBox} onPress={onRequest}>
          <Text
            center
            style={style.ProfileTitle}
            title={'Click here to request points'}
          />
          <Bar
            progress={0}
            width={200}
            color={Color.white}
            unfilledColor={Color.Non}
            height={5}
            borderRadius={20}
            borderColor={Color.white}
            style={{alignSelf: 'center', marginTop: 6}}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={notiHandler}>
          <Image
            resizeMode="contain"
            style={style.dashboardCartImage}
            tintColor={'white'}
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
