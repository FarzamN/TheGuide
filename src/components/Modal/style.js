import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {tab, width} from '../../utils/Constants';

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
    fontSize: 16,
    color: Color.Sky,
    fontWeight: '500',
    textAlign: 'center',
  },

  // logout ----------------------------

  LogoutContainer: {
    borderRadius: 20,
    paddingVertical: 30,
    alignSelf: 'center',
    paddingHorizontal: 30,
    width: tab ? '70%' : '90%',
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
    fontSize: 45,
    color: '#FFDF00',
    fontWeight: '700',
  },
  JobComp: {
    fontSize: 25,
    fontWeight: '600',
    color: Color.white,
  },
  JobLottie: {
    width: 200,
    height: 200,
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
    width: tab ? '70%' : '90%',
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
    paddingVertical: 30,
    alignSelf: 'center',
    paddingHorizontal: 30,
    width: tab ? '70%' : '90%',
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
    marginBottom: 10,
  },
});
