import React from 'react';
import style from './style';
import {View} from 'react-native';
import {Font} from '../../utils/Font';
import Modal from 'react-native-modal';
import {ModalBtn, Text, FullImage} from '..';
import {style as profileStyle} from '../../screen/user/Settings/style';

const ImagePickerModal = ({visible, onClose, onUpload, source}) => {
  return (
    <Modal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      isVisible={visible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={style.logoutBox}>
      <View style={[style.LogoutContainer]}>
        <FullImage
          source={source}
          style={profileStyle.profileImgWrap}
          ImageStyle={profileStyle.profileImg}
        />
        <Text
          center
          style={style.LogoutText}
          title={'Upload New Profile photo?'}
        />
        <ModalBtn
          title="Upload"
          onPress={onUpload}
          textStyle={{fontSize: 20, fontFamily: Font.font600}}
        />
        <ModalBtn green onPress={onClose} title="No" />
      </View>
    </Modal>
  );
};

export default ImagePickerModal;
