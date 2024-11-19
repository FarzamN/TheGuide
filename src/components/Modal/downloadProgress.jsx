import style from './style';
import Modal from 'react-native-modal';
import {View, Text} from 'react-native';
import {Color} from '../../utils/Color';
import {Circle} from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';

const DownloadProgress = props => {
  const {goBack} = useNavigation();
  const {visible, progress, percentage} = props;

  return (
    <Modal
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      isVisible={visible}
      onBackButtonPress={goBack}>
      <View style={[style.ModalContainer, style.DPCont]}>
        <Circle
          showsText
          progress={progress}
          size={100}
          textStyle={style.DpText}
          color={Color.Sky}
          borderColor={Color.Sky}
          borderWidth={1}
          formatText={() => `${percentage}%`}
        />
        <Text style={style.ModalText}>{`Downloading... ${percentage}%`}</Text>
      </View>
    </Modal>
  );
};

export default DownloadProgress;
