import React from 'react';
import {style} from './style';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Color} from '../utils/Color';
import Share from 'react-native-share';
import {iOS, tab} from '../utils/Constants';
import {useSelector} from 'react-redux';
import {GlobalStyle} from '../utils/GlobalStyle';
import {Text, FullImage, Body} from '../components';
import {View, Image, TouchableOpacity} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const DrawerContainer = props => {
  const ud = useSelector(state => state.userDetails);
  const isGuest = ud === 'guest';
  const handleShare = async () => {
    try {
      const options = {
        title: 'Share App',
        message: iOS ? ud.share_link_app_store : ud.share_link_play_store,
      };
      await Share.open(options);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Body restyle={{backgroundColor: '#F3F3FF'}}>
      <TouchableOpacity
        hitSlop={{top: 20, left: 20, bottom: 20, right: 20}}
        onPress={() => props.navigation.closeDrawer()}
        style={[style.backIcon, GlobalStyle.justify]}>
        <Icon
          name="chevron-left"
          type={IconType.Entypo}
          color={Color.black}
          size={tab ? 30 : 20}
        />
      </TouchableOpacity>
      <View style={GlobalStyle.justify}>
        <Image
          resizeMode="cover"
          style={style.AvatarBox}
          source={
            isGuest
              ? require('../assets/image/default.jpg')
              : {uri: ud.profile_image}
          }
        />
        <Text style={style.Title} title={isGuest ? 'Guest' : ud.name} />
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View style={style.bottomIcons}>
        {[
          {
            icon: 'sharealt',
            type: IconType.AntDesign,
            onPress: handleShare,
          },
          {
            icon: 'settings-outline',
            type: IconType.Ionicons,
            onPress: () => props.navigation.navigate('profile'),
          },
        ].map(item => (
          <TouchableOpacity key={item.icon} onPress={item.onPress}>
            <Icon
              size={tab ? 30 : 25}
              key={item.icon}
              name={item.icon}
              type={item.type}
              color={'#B3B3B9'}
            />
          </TouchableOpacity>
        ))}
      </View>
      <FullImage
        style={style.logo}
        source={require('../assets/image/black-logo.png')}
      />
    </Body>
  );
};

export default DrawerContainer;
