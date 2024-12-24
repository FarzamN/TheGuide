import {useState} from 'react';
import {android, iOS} from '../utils/Constants';
import {openPicker} from 'react-native-image-crop-picker';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Toast from 'react-native-simple-toast';
import {Platform} from 'react-native';
const useImagePicker = () => {
  const [image, setImage] = useState(null);
  const [picker, setPicker] = useState(false);

  const galleryLaunch = async () => {
    try {
      const item = await openPicker({
        mediaType: 'photo',
        cropping: true,
      });
      setImage({
        name: item.path,
        uri: item.path,
        type: item.mime,
      });
    } catch (error) {
      if (error.code === 'E_PICKER_CANCELLED') {
        console.log('User cancelled image picker');
      } else {
        console.log('ImagePicker Error:', error.message);
      }
    }
  };

  const requestGalleryPermission = async () => {
    try {
      const permission =
        iOS && Platform.Version >= 14
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : android
          ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
          : PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY;

      const result = await request(permission, {
        title: 'App Gallery Permission',
        message: 'The Guide needs access to your gallery',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });

      if (result === RESULTS.GRANTED) {
        console.log('You can access the gallery');
        galleryLaunch();
      } else {
        Toast.show('Gallery permission denied');
      }
    } catch (err) {
      console.warn(err, 'catch error gallery picker');
    }
  };

  const onClose = () => {
    setPicker(false);
    setImage(null);
  };

  return {
    image,
    picker,
    onClose,
    setPicker,
    galleryLaunch,
    requestGalleryPermission,
  };
};

export default useImagePicker;
