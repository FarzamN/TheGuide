import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {height, tab, width} from '../../utils/Constants';

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
    width: tab ? '50%' : '70%',
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    borderColor: Color.black,
    backgroundColor: Color.white,
  },
  LoadingBox: {
    width: tab ? 100 : 70,
    height: tab ? 100 : 70,
    marginTop: 20,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  LottieView: {
    width: 120,
    height: 150,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  goToLogin: {
    width: '55%',
    marginVertical: 20,
    alignSelf: 'center',
    height: tab ? 60 : 45,
  },
  ModalText: {
    padding: 20,
    color: Color.Sky,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: tab ? 20 : 16,
  },

  // logout ----------------------------

  LogoutContainer: {
    borderRadius: 20,
    paddingVertical: 30,
    alignSelf: 'center',
    paddingHorizontal: 30,
    width: tab ? '60%' : '90%',
    justifyContent: 'center',
    backgroundColor: Color.white,
  },
  LogoutText: {
    color: '#777777',
    marginBottom: 10,
    fontWeight: '600',
    textAlign: 'center',
    fontSize: tab ? 22 : 18,
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
    fontSize: width * 0.1,
    color: '#FFDF00',
    fontWeight: '700',
  },
  JobComp: {
    fontSize: tab ? width / 30 : width / 18,
    fontWeight: '600',
    color: Color.white,
  },
  JobLottie: {
    width: 200,
    height: height / 6,
    marginVertical: 60,
    resizeMode: 'contain',
  },

  NorCont: {
    zIndex: 9,
    borderRadius: 10,
    alignSelf: 'center',
    position: 'absolute',
    height: tab ? 250 : 200,
    backgroundColor: 'rgba(0,0,0,0.4)',
    width: tab ? width - 100 : width - 30,
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
    fontSize: 15,
    marginBottom: 8,
    fontWeight: '600',
    color: Color.black,
  },
  nomText: {
    fontSize: 15,
    marginBottom: 8,
    fontWeight: '500',
    color: Color.black,
  },
  DonateBtn: {width: '75%', height: 47},
  arrowImg: {
    width: 100,
    height: 100,
    marginLeft: 80,
    marginBottom: 10,
    alignSelf: 'center',
  },
  AboutStreakBox: {
    margin: 0,
    alignSelf: 'center',
    marginBottom: 100,
    width: tab ? '60%' : '90%',
    justifyContent: 'center',
  },
  AboutStreakCont: {
    width: '90%',
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 20,
    alignSelf: 'center',
    paddingHorizontal: 15,
    backgroundColor: Color.white,
  },

  streakImage: {height: 170, width: 170, alignSelf: 'center'},

  // =--------- Request modal style

  RequestBox: {
    margin: 0,
    justifyContent: 'flex-end',
    backgroundColor: Color.Non,
  },
  RequestContainer: {
    borderRadius: 20,
    paddingBottom: 30,
    paddingTop: 10,
    alignSelf: 'center',
    paddingHorizontal: 30,
    width: tab ? '60%' : '90%',
    justifyContent: 'center',
    backgroundColor: Color.white,
  },

  // =--------- ask request modal style

  askRequestBox: {
    margin: 0,
    justifyContent: 'center',
    backgroundColor: Color.Non,
  },

  amountInput: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 10,
  },

  SwitchCont: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.lightgrey,
    // paddingVertical: tab ? 8 : 2,
    paddingHorizontal: tab ? 8 : 2,
  },

  searchBox: {width: '100%', marginTop: 10},
  yourCodeBox: {
    borderWidth: 1,
    width: '100%',
    paddingLeft: 10,
    overflow: 'hidden',
    backgroundColor: Color.background,

    borderRadius: tab ? 25 : 20,
    height: tab ? 60 : 48,
  },
  ContactIconBox: {
    backgroundColor: Color.green,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1 / 1,
  },
});
