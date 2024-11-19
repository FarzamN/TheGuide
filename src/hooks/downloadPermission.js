import {request, check, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Alert} from 'react-native';
import {iOS} from '../utils/Constants';

const requestStoragePermission = async () => {
  try {
    const permission = iOS
      ? PERMISSIONS.IOS.MEDIA_LIBRARY
      : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;

    const result = await check(permission);

    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)',
        );
        break;
      case RESULTS.DENIED:
        const requestResult = await request(permission);
        if (requestResult === RESULTS.GRANTED) {
          console.log('Storage permission granted');
          // Proceed with file handling
        } else {
          console.log('Storage permission denied');
          Alert.alert(
            'Permission Denied',
            'Storage permission is required to proceed.',
          );
        }
        break;
      case RESULTS.LIMITED:
        console.log('The permission is limited');
        break;
      case RESULTS.GRANTED:
        console.log('Storage permission granted');
        // Proceed with file handling
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        Alert.alert(
          'Permission Blocked',
          'Please enable storage permission in settings to proceed.',
        );
        break;
    }
  } catch (error) {
    console.warn('Permission request error:', error);
  }
};

export default requestStoragePermission;
