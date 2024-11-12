import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';

export default StyleSheet.create({
  MainModal: {
    margin: 0,
    justifyContent: 'center',
  },
  CorrectnErrorModal: {
    margin: 0,
    marginBottom: 10,
    justifyContent: 'flex-end',
    backgroundColor: Color.Non,
  },
  Modal_Container: {
    flex: 1,
    backgroundColor: Color.Non,
  },
  ModalContainer: {
    width: '70%',
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: Color.black,
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

  // logout ----------------------------

  LogoutContainer: {
    borderRadius: 20,
    backgroundColor: Color.white,
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 30,
    width: '90%',
    alignSelf: 'center',
  },
  LogoutText: {
    color: '#777777',
    fontSize: 20,
    fontFamily: Font.font600,
    textAlign: 'center',
    marginBottom: 10,
  },

  //  Winner Modal -----------------------
  JobBtn: {
    width: '70%',
    height: 40,
  },
  JobBtnText: {
    fontSize: 16,
    fontFamily: Font.font600,
  },
  JobHead: {
    fontSize: 45,
    color: '#FFDF00',
    fontFamily: Font.font700,
  },
  JobComp: {
    fontSize: 25,
    color: Color.white,
    fontFamily: Font.font600,
  },
  JobLottie: {
    height: 300,
    marginBottom: 15,
  },
});
