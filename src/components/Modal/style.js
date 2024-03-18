import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';

export default StyleSheet.create({
  MainModal: {
    margin: 0,
    justifyContent: 'center',
  },
  Modal_Container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  ModalContainer: {
    width: '70%',
    alignSelf: 'center',
    borderRadius: 20,
    borderColor: Color.Sky,
    justifyContent: 'center',
    backgroundColor: Color.white,
  },
  LottieView: {
    height: 150,
    alignSelf: 'center',
  },
  ModalText: {
    padding: 20,
    fontSize: 16,
    color: Color.Sky,
    textAlign: 'center',
    fontFamily: Font.font500,
  },
});
