import React from 'react';
import {style} from './style';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Text} from '../components';
import {Color} from '../utils/Color';
import {useSelector} from 'react-redux';
import {Avatar} from 'react-native-paper';
import {Body, FullImage} from '../components';
import {GlobalStyle} from '../utils/GlobalStyle';
import {View, TouchableOpacity} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import Share from 'react-native-share';

const DrawerContainer = props => {
  const userDetail = useSelector(state => state.userDetails);

  const handleShare = async () => {
    const options = {
      title: 'Share App',
      message: 'https://play.google.com/store/apps/details?id=com.prayforlife',
    }
    const shareResponse = await Share.open(options);
  };
  return (
    <Body restyle={{backgroundColor: '#F3F3FF'}}>
      <TouchableOpacity
        onPress={() => props.navigation.closeDrawer()}
        style={[style.backIcon, GlobalStyle.justify]}>
        <Icon
          name="chevron-left"
          type={IconType.Entypo}
          color={Color.black}
          size={20}
        />
      </TouchableOpacity>
      <View style={GlobalStyle.justify}>
        <Avatar.Image
          style={style.AvatarBox}
          size={100}
          source={{uri: userDetail.profile_image}}
        />
        <Text style={style.Title} title={userDetail.name} />
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
              size={25}
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
