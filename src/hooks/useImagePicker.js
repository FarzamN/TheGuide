import {useState} from 'react';
import {iOS} from '../utils/Constants';
import {openPicker} from 'react-native-image-crop-picker';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {useDispatch, useSelector} from 'react-redux';

const useImagePicker = () => {
  const dispatch = useDispatch();
  const userDetail = useSelector(state => state.userDetails);
  const [image, setImage] = useState(null);
  const [picker, setPicker] = useState(false);

  const galleryLaunch = () => {
    openPicker({
      mediaType: 'photo',
      cropping: true,
    })
      .then(item => {
        const selectedImage = {
          name: item.path,
          uri: item.path,
          type: item.mime,
        };
        setImage(selectedImage);
      })
      .catch(error => {
        if (error.code === 'E_PICKER_CANCELLED') {
          console.log('User cancelled image picker');
        } else {
          console.log('ImagePicker Error:', error.message);
        }
      });
  };

  const requestGalleryPermission = async () => {
    try {
      const permission = iOS
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

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
        console.log('Gallery permission denied');
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
