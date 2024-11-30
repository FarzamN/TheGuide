import {
  Text,
  FullImage,
  ProfileBtn,
  ProfileBody,
  CustomButton,
  LogoutModal,
  ImagePickerModal,
} from '../../../components';
import {style} from './style';
import React, {useCallback, useEffect, useState} from 'react';
import {Color} from '../../../utils/Color';
import {useSelector, useDispatch} from 'react-redux';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import {updateImage} from '../../../redux/actions/AuthAction';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {useImagePicker} from '../../../hooks';
import moment from 'moment';

const Profile = ({navigation}) => {
  const {navigate, goBack} = navigation;
  const dispatch = useDispatch();
  const {image, onClose, picker, setPicker, requestGalleryPermission} =
    useImagePicker();
  const userDetail = useSelector(state => state.userDetails);
  const [showLogout, setShowLogout] = useState(false);

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );

  useEffect(() => {
    if (image) {
      dispatch(updateImage(userDetail.user_id, image, onClose));
    }
  }, [image]);
  console.log(
    'userdetail?.date_of_birth',
    moment(userDetail?.date_of_birth).format(),
  );
  return (
    <ProfileBody>
      <ScrollView style={GlobalStyle.Padding}>
        <View style={[GlobalStyle.between, GlobalStyle.mtop]}>
          <TouchableOpacity onPress={() => setShowLogout(true)}>
            <FullImage
              style={[GlobalStyle.justify, style.logout]}
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
        <View>
          <View style={style.profileMainWrap}>
            <TouchableOpacity
              style={style.editImgWrap}
              onPress={() => setPicker(true)}>
              <FullImage source={require('../../../assets/image/pencil.png')} />
            </TouchableOpacity>
            <FullImage
              style={style.profileImgWrap}
              ImageStyle={style.profileImg}
              source={{uri: userDetail.profile_image}}
            />
          </View>
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
      <ImagePickerModal
        source={{uri: image ? image.uri : userDetail.profile_image}}
        visible={picker}
        onClose={onClose}
        onUpload={requestGalleryPermission}
      />
    </ProfileBody>
  );
};

export default Profile;
