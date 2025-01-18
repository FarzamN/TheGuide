import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';
import {width} from '../../utils/Constants';

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
    resizeMode: 'contain',
    width: 120,
    alignSelf: 'center',
  },
  ModalText: {
    padding: 20,
    fontSize: 16,
    color: Color.Sky,
    textAlign: 'center',
    fontWeight: '500',
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
    fontSize: 18,
    fontWeight: '600',
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
    fontWeight: '600',
  },
  JobHead: {
    fontSize: 45,
    color: '#FFDF00',
    fontWeight: '700',
  },
  JobComp: {
    fontSize: 25,
    color: Color.white,
    fontWeight: '600',
  },
  JobLottie: {
    height: 200,
    marginVertical: 60,
    resizeMode: 'contain',
    width: 200,
  },

  NorCont: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    // backgroundColor: Color.white,
    width: width - 30,
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 9,
  },
  NorText: {
    color: Color.white,
  },
  DPCont: {
    paddingTop: 15,
    borderWidth: 0.8,
    alignItems: 'center',
    backgroundColor: '#FCFCFC',
  },
  DpText: {
    fontSize: 20,
    color: Color.Sky,
    fontWeight: '500',
  },

  // =--------- donate modal style
  boldText: {
    marginBottom: 8,
    color: Color.black,
    fontWeight: '600',
    fontSize: 15,
  },
  nomText: {
    marginBottom: 8,
    color: Color.black,
    fontWeight: '500',
    fontSize: 15,
  },
  DonateBtn: {width: '75%', height: 47},
  arrowImg: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    marginBottom: 10,
    marginLeft: 80,
  },
  AboutStreakBox: {
    justifyContent: 'center',
    margin: 0,
    marginBottom: 100,
  },
  AboutStreakCont: {
    backgroundColor: Color.white,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
});
