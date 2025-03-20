import style from './style';
import {View} from 'react-native';
import React, {useState} from 'react';
import Share from 'react-native-share';
import Modal from 'react-native-modal';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {Color} from '../../utils/Color';
import {tab} from '../../utils/Constants';
import QRCode from 'react-native-qrcode-styled';
import {IconType} from 'react-native-dynamic-vector-icons';
import {CrossIcon, DropDown, MainInput, ModalBtn, Text, Validation} from '..';

const AskRequestModal = props => {
  const {onClose, visible} = props;
  const userDetail = useSelector(state => state.userDetails);
  const sponsor_data = useSelector(state => state.sponsor_data);
  const [sent, setSent] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const [sponsor, setSponsor] = useState(null);
  const [sponsorError, setSponsorError] = useState({show: false, msg: ''});

  const link = `https://theguide.us/request-checkout-webview?kid_id=${userDetail.user_id}&sponsor_id=${sponsor}&amount=${inputValue}`;

  const onRequest = data => {
    if (sponsor === null) {
      setSponsorError({show: true, msg: 'Please select Sponsor'});
    } else {
      reset();
      setInputValue(data.amount);
      setSponsorError({show: false, msg: ''});
      setSent(true);
    }
  };

  const handleShare = async () => {
    try {
      const options = {
        title: 'Share Request',
        message: link,
      };
      await Share.open(options);
      setSent(false);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const {
    reset,
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  const close = () => {
    onClose();
    setSent(false);
  };
  return (
    <Modal
      isVisible={visible}
      animationIn="slideInUp"
      onBackdropPress={close}
      onBackButtonPress={close}
      style={style.askRequestBox}
      animationOut="slideOutDown">
      <View style={[style.RequestContainer]}>
        <CrossIcon onPress={close} />
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
          </>
        ) : (
          <>
            <DropDown
              data={sponsor_data}
              placeholder="Sponsor"
              onSelect={setSponsor}
              boxStyles={style.amountInput}
              // df={{key: userdetail.gender, value: userdetail.gender}}
            />
            <Validation
              message={sponsorError.msg}
              isError={sponsorError.show}
            />

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
            <ModalBtn green title="Request" onPress={handleSubmit(onRequest)} />
          </>
        )}
      </View>
    </Modal>
  );
};

export default AskRequestModal;
