import style from './style';
import {View} from 'react-native';
import {ModalBtn, Text} from '..';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import Share from 'react-native-share';
import {Color} from '../../utils/Color';
import {tab} from '../../utils/Constants';
import QRCode from 'react-native-qrcode-styled';

const AddSponsorModal = props => {
  const {onClose, visible} = props;

  const [getData, setData] = useState({
    name: 'Farzam',
    link: 'https://www.youtube.com/',
  });

  const handleShare = async () => {
    try {
      const options = {
        title: 'Share Request',
        message: getData.link,
      };
      await Share.open(options);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      animationIn={'fadeInUp'}
      animationOut={'fadeOut'}
      isVisible={visible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={style.askRequestBox}>
      <View style={[style.RequestContainer]}>
        <Text
          center
          style={[style.LogoutText, {color: Color.black}]}
          title={'Request Sponsor'}
        />
        <Text
          center
          style={[style.LogoutText, {marginTop: 10}]}
          title={`Click the Button and send the link to (${getData.name})`}
        />
        <ModalBtn green title="Get Link" onPress={handleShare} />
        <Text
          center
          style={[style.LogoutText, {marginTop: 15}]}
          title={'or have your sponsor scan the QR code'}
        />
        <QRCode
          data={getData.link}
          style={{alignSelf: 'center'}}
          marginTop={10}
          pieceSize={tab ? 6 : 4}
        />
      </View>
    </Modal>
  );
};

export default AddSponsorModal;
