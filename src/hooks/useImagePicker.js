import {useState} from 'react';
import {android} from '../utils/Constants';
import Toast from 'react-native-simple-toast';
import {launchImageLibrary} from 'react-native-image-picker';
import {request, check, PERMISSIONS, RESULTS, openSettings} from 'react-native-permissions';

const useImagePicker = () => {
  const [image, setImage] = useState(null);
  const [picker, setPicker] = useState(false);

  const galleryLaunch = async () => {
    try {
      const options = {
        mediaType: 'photo',
        includeBase64: false,
      };

      launchImageLibrary(options, response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error:', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const item = response.assets[0];
          setImage({
            name: item.fileName,
            uri: item.uri,
            type: item.type,
          });
        }
      });
    } catch (error) {
      console.log('ImagePicker Error:', error.message);
    }
  };

  const requestGalleryPermission = async () => {
    try {
      const permission = android
        ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
        : PERMISSIONS.IOS.PHOTO_LIBRARY_ADD_ONLY;

      const status = await check(permission);

      if (status === RESULTS.GRANTED) {
        galleryLaunch();
      } else if (status === RESULTS.DENIED) {
        const result = await request(permission);
        if (result === RESULTS.GRANTED) {
          galleryLaunch();
        } else {
          Toast.show('Gallery permission denied');
        }
      } else if (status === RESULTS.BLOCKED) {
        Toast.show('Gallery permission blocked. Enable it in settings.');
        openSettings();
      }
    } catch (err) {
      console.warn(err, 'Error requesting gallery permission');
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
