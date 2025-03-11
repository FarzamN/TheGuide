import style from './style';
import {View} from 'react-native';
import React, {useState} from 'react';
import Share from 'react-native-share';
import Modal from 'react-native-modal';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {Color} from '../../utils/Color';
import {tab} from '../../utils/Constants';
import {MainInput, ModalBtn, Text} from '..';
import QRCode from 'react-native-qrcode-styled';
import {GlobalStyle} from '../../utils/GlobalStyle';
import {IconType} from 'react-native-dynamic-vector-icons';

const AskRequestModal = props => {
  const {onClose, visible} = props;
  const userDetail = useSelector(state => state.userDetails);
  const [sent, setSent] = useState(false);
  const [getData, setData] = useState({
    name: 'Farzam',
    link: 'https://www.youtube.com/',
  });
  const onSubmit = data => {
    setSent(true);
  };

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

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  return (
    <Modal
      isVisible={visible}
      animationIn={'slideInUp'}
      onBackdropPress={onClose}
      style={style.askRequestBox}
      onBackButtonPress={onClose}
      animationOut={'slideOutDown'}>
      <View style={[style.RequestContainer]}>
        <Text
          center
          style={[style.LogoutText, {color: Color.black}]}
          title={`Request ${sent ? 'Sent' : 'Points'}`}
        />
        {sent ? (
          <>
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
          </>
        ) : (
          <>
            <View style={GlobalStyle.row}>
              <Text center style={style.LogoutText} title={'From: '} />

              <Text center style={style.LogoutText} title={userDetail.name} />
            </View>
            <MainInput
              style={style.amountInput}
              icName="cake"
              name="amount"
              isError={errors?.amount}
              control={control}
              placeholder="Amount"
              keyboardType="number-pad"
              type={IconType.MaterialIcons}
              message={errors?.amount?.message}
              rules={{
                required: 'amount is required',
              }}
            />
            <ModalBtn green title="Submit" onPress={onSubmit} />
          </>
        )}
      </View>
    </Modal>
  );
};

export default AskRequestModal;
