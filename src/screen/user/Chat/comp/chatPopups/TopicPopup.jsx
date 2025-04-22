import {useState} from 'react';
import {View} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import style from '../../../../../components/Modal/style';
import Modal from 'react-native-modal';
import {
  CountryCityRadio,
  CrossIcon,
  FullImage,
  MainInput,
  ModalBtn,
  PrayerCheckRadio,
  Text,
} from '../../../../../components';
import {Color} from '../../../../../utils/Color';
import {useImagePicker} from '../../../../../hooks';
import {style as chatStyle} from '../style';
import {create_topic} from '../../../../../redux/actions/UserAction';
import {useDispatch} from 'react-redux';

const TopicPopup = ({visible, onClose}) => {
  const dispatch = useDispatch();
  const {requestGalleryPermission, image, setImage} = useImagePicker();

  const [load, setLoad] = useState(false);
  const [prayer, setPrayer] = useState(false);

  const handleTopic = data => {
    dispatch(create_topic(data, image, prayer, setLoad, onClose));
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
  });

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
          title={'Add Topic'}
          style={[style.LogoutText, {color: Color.black}]}
        />
        <MainInput
          name="name"
          icName="user"
          control={control}
          isError={errors?.name}
          placeholder={'Create Topic'}
          type={'AntDesign'}
          style={style.amountInput}
          message={errors?.name?.message}
          rules={{required: 'Name is required'}}
        />
        {image && (
          <View style={chatStyle.ImageCloseButtonBox}>
            <CrossIcon
              styles={chatStyle.ImageCloseButton}
              onPress={() => setImage(null)}
            />

            <FullImage
              sizeMode="cover"
              source={{uri: image.uri}}
              radius={100}
              style={chatStyle.ChatUploadImage}
            />
          </View>
        )}
        <ModalBtn
          title={'Thumbnail (optional)'}
          onPress={requestGalleryPermission}
        />
        <PrayerCheckRadio
          name={'Prayer CheckBox'}
          focus={prayer}
          onPress={() => setPrayer(prev => !prev)}
        />
        <ModalBtn
          green
          title={load ? 'Please wait...' : 'Save'}
          onPress={handleSubmit(handleTopic)}
        />
      </View>
    </Modal>
  );
};

export default TopicPopup;
