import React from 'react';
import style from './style';
import {FullImage, Text} from '..';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const DashboardHeader = ({onPray}) => {
  const dispatched = useDispatch();
  const userDetail = useSelector(state => state.userDetails);
  const pray_streak = useSelector(state => state.pray_streak);
  const pray_time = useSelector(state => state.pray_time);
  const {navigate, dispatch} = useNavigation();

  const notiHandler = () => {
    // navigate('Notification');
  };
  const openDrawer = () => dispatch(DrawerActions.openDrawer());
  return (
    <ImageBackground
      resizeMode="stretch"
      style={style.BannerImage}
      source={require('../../assets/image/game-banner.png')}>
      <View style={[GlobalStyle.between, style.HeadRow]}>
        <TouchableOpacity onPress={openDrawer}>
          <Image
            style={{width: 17, height: 17}}
            resizeMode="contain"
            source={require('../../assets/image/menu.png')}
          />
        </TouchableOpacity>
        {/*<TouchableOpacity
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
          </TouchableOpacity>*/}
        <Text style={style.ProfileTitle} title={'Revival Bible School'} />
        <View>
          <TouchableOpacity onPress={notiHandler}>
            <Image
              resizeMode="contain"
              style={{width: 17, height: 17}}
              source={require('../../assets/image/notifaction.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={GlobalStyle.evenly}>
        {[
          {
            title: 'Due',
            data: 'Bible',
            Status: '0',
          },
          {
            title: 'Due',
            data: 'Pray',
            Status: pray_streak ?? '1x',
            press: onPray,
          },
        ].map((i, ix) => (
          <TouchableOpacity
            activeOpacity={i.press ? 0.5 : 1}
            onPress={i.press}
            key={ix}
            style={[style.box, GlobalStyle.justify]}>
            <View style={[GlobalStyle.justify, {width: '45%'}]}>
              {ix === 0 ? (
                <>
                  <Text style={style.title} title={i.title} />
                  <Text style={style.data} title={i.data} />
                </>
              ) : (
                <>
                  {pray_time == 0 ? (
                    <>
                      <Icon
                        size={30}
                        color="#22CA5D"
                        type={IconType.Ionicons}
                        name="checkmark-done-circle-outline"
                      />
                    </>
                  ) : (
                    <>
                      {/* <Text center style={style.prayLevel} title={pray_time} /> */}
                      <Text style={[style.title]} title={pray_time} />

                      <Text style={style.data} title={'Mins'} />
                    </>
                  )}
                </>
              )}
            </View>
            <View style={style.line} />

            <View style={[style.HeadTextBox]}>
              <Text style={style.prayLevel} center title={i.Status} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
};

export default DashboardHeader;
