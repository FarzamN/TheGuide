import {useState} from 'react';
import {android, iOS} from '../utils/Constants';
import {launchImageLibrary} from 'react-native-image-picker';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Toast from 'react-native-simple-toast';
import {Platform} from 'react-native';
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
