import {
  Text,
  FullImage,
  ProfileBtn,
  ProfileBody,
  CustomButton,
  LogoutModal,
} from '../../../components';
import {style} from './style';
import React, {useCallback, useState} from 'react';
import {Color} from '../../../utils/Color';
import {useSelector, useDispatch} from 'react-redux';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import {LogOutApi} from '../../../redux/actions/AuthAction';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';

const Profile = ({navigation}) => {
  const {navigate, goBack} = navigation;
  const userDetail = useSelector(state => state.userDetails);
  const [showLogout, setShowLogout] = useState(false);

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );
  return (
    <ProfileBody>
      <ScrollView style={GlobalStyle.Padding}>
        <View style={[GlobalStyle.between, GlobalStyle.mtop]}>
          <TouchableOpacity
            onPress={() => setShowLogout(true)}
            style={style.logout}>
            <FullImage
              style={[GlobalStyle.justify, style.logoutImgWrap]}
              ImageStyle={style.logoutImg}
              source={require('../../../assets/image/logput.png')}
            />
            <Text title="Logout" style={style.logoutText} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goBack}
            style={[GlobalStyle.justify, style.logoutImgWrap]}>
            <Icon name="close" type={IconType.AntDesign} color={Color.black} />
          </TouchableOpacity>
        </View>
        <View
        // style={{alignItems: 'center'}}
        >
          {/* {[].map((item, index) => (
          <ProfileBtn key={index} title={item.title} />
          ))} */}
          <FullImage
            style={style.profileImgWrap}
            ImageStyle={style.profileImg}
            source={{uri: userDetail.profile_image}}
          />
          <ProfileBtn title={userDetail.name} />
          <ProfileBtn title={userDetail.email} />
          <View style={GlobalStyle.between}>
            <ProfileBtn small title={'Age: ' + userDetail.age} />
            <ProfileBtn small title={userDetail.user_city} />
          </View>
          <View style={GlobalStyle.between}>
            <ProfileBtn small title={userDetail.user_country} />
            <ProfileBtn small title={userDetail.user_state} />
          </View>
          <ProfileBtn title={userDetail.phone_number} />

          <CustomButton
            onPress={() => navigate('editProfile')}
            style={{width: '85%', alignSelf: 'center', marginTop: 15}}
            title={'More information'}
          />
        </View>
      </ScrollView>
      <LogoutModal onClose={() => setShowLogout(false)} visible={showLogout} />
    </ProfileBody>
  );
};

export default Profile;
