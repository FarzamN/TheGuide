import {View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {FullImage, Text} from '..';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Color} from '../../utils/Color';
import {useSelector} from 'react-redux';
import style from './style';
import {DrawerActions, useNavigation} from '@react-navigation/native';

const DashboardHeader = () => {
  const userDetail = useSelector(state => state.userDetails);
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <ImageBackground
      resizeMode="stretch"
      style={style.BannerImage}
      source={require('../../assets/image/banner.png')}>
      <View style={style.HeadRow}>
        <View style={[GlobalStyle.row, {width: 60}]}>
          <TouchableOpacity onPress={openDrawer}>
            <Image
              style={{width: 22, height: 22}}
              resizeMode="contain"
              source={require('../../assets/image/menu.png')}
            />
          </TouchableOpacity>
          <View style={{marginLeft: 7}}>
            <FullImage
              style={style.ProfileImage}
              source={{
                uri: userDetail?.profile_image,
              }}
            />
            <View style={style.nameBox}>
              <Text style={style.name} center title={'shawn'} />
            </View>
          </View>
        </View>
        <Text style={style.ProfileTitle} title={'Bible School'} />
        <View>
          <TouchableOpacity>
            <Image
              style={{width: 22, height: 22}}
              resizeMode="contain"
              source={require('../../assets/image/notifaction.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={GlobalStyle.evenly}>
        {[
          {title: 'Due', data: 'Bible', sub: '120', status: 'Streak'},
          {title: 'Due', data: 'Pray', sub: 'L2 ', status: 'Status'},
        ].map((item, indx) => {
          return (
            <View key={indx} style={[style.box, GlobalStyle.justify]}>
              <View>
                <Text style={style.title} title={item.title} />
                <Text style={style.data} title={item.data} />
              </View>
              <View style={style.line} />

              <View style={{alignItems: 'center'}}>
                <Text style={style.subText} title={item.sub} />
                <Text style={style.subText} title={item.status} />
              </View>
            </View>
          );
        })}
      </View>
    </ImageBackground>
  );
};

export default DashboardHeader;
