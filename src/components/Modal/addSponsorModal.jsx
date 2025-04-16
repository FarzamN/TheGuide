import React from 'react';
import style from './style';
import {Share, View} from 'react-native';
import {CrossIcon, ModalBtn, Text} from '..';
import Modal from 'react-native-modal';
import {Color} from '../../utils/Color';
import {useSelector} from 'react-redux';
import {tab} from '../../utils/Constants';
import QRCode from 'react-native-qrcode-styled';

const AddSponsorModal = props => {
  const {onClose, visible} = props;
  const userDetail = useSelector(state => state.userDetails);

  const link = `https://theguide.us/get-kid-sponsor-popup/${userDetail.user_id}`;

  const handleShare = async () => {
    Share.share({
      title: 'Share Request',
      message: 'link',
    });
  };
  return (
    <Modal
      isVisible={visible}
      animationIn="fadeInUp"
      animationOut="fadeOut"
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={style.askRequestBox}>
      <View style={[style.RequestContainer]}>
        <CrossIcon onPress={onClose} />
        <Text
          center
          title="Request Sponsor"
          style={[style.LogoutText, {color: Color.black}]}
        />
        <Text
          center
          style={[style.LogoutText, {marginTop: 10}]}
          title="Click the button and share the link with your sponsor"
        />
        <ModalBtn green title="Get Link" onPress={handleShare} />
        <Text
          center
          style={[style.LogoutText, {marginTop: 15}]}
          title={'or have your sponsor scan the QR code'}
        />
        <QRCode
          data={link}
          marginTop={10}
          pieceSize={tab ? 6 : 4}
          style={{alignSelf: 'center'}}
        />
      </View>
    </Modal>
  );
};

export default AddSponsorModal;
