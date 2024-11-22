import React from 'react';
import style from './style';
import {FullImage, Text} from '..';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {useDispatch, useSelector} from 'react-redux';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {View, ImageBackground, TouchableOpacity, Image} from 'react-native';

const DashboardHeader = ({onPray}) => {
  const dispatched = useDispatch();
  const userDetail = useSelector(state => state.userDetails);
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
            style={{width: 20, height: 20}}
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
              style={{width: 20, height: 20}}
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
            Status: '#',
          },
          {
            title: 'Due',
            data: 'Pray',
            Status: 'L1',
            press: onPray,
          },
        ].map(i => (
          <TouchableOpacity
            activeOpacity={i.press ? 0.5 : 1}
            onPress={i.press}
            key={i.data}
            style={[style.box, GlobalStyle.justify]}>
            <View style={[GlobalStyle.justify, {width: '45%'}]}>
              <Text style={style.title} title={i.title} />
              <Text style={style.data} title={i.data} />
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
