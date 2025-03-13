import style from './style';
import {View} from 'react-native';
import React, {useState} from 'react';
import Share from 'react-native-share';
import Modal from 'react-native-modal';
import {useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {Color} from '../../utils/Color';
import {tab} from '../../utils/Constants';
import {genderData} from '../../utils/Data';
import QRCode from 'react-native-qrcode-styled';
import {IconType} from 'react-native-dynamic-vector-icons';
import {DropDown, MainInput, ModalBtn, Text, Validation} from '..';

const AskRequestModal = props => {
  const {onClose, visible} = props;
  const userDetail = useSelector(state => state.userDetails);
  const [sent, setSent] = useState(false);
  const [sponsor, setSponsor] = useState(null);
  const [sponsorError, setSponsorError] = useState({show: false, msg: ''});

  const link = `https://www.youtube.com/`
 
  const onSubmit = data => {
    if (sponsor === null) {
      setSponsorError({show: true, msg: 'Please select Sponsor'});
    } else {
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
              style={{alignSelf: 'center'}}
              pieceSize={tab ? 6 : 4}
            />
          </>
        ) : (
          <>
            <DropDown
              data={genderData}
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
            <ModalBtn green title="Submit" onPress={handleSubmit(onSubmit)} />
          </>
        )}
      </View>
    </Modal>
  );
};

export default AskRequestModal;
