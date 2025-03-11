import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {tab} from '../../utils/Constants';

export const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 5,
    width: '100%',
    borderWidth: 1.5,
    overflow: 'hidden',
    height: tab ? 70 : 48,
    borderColor: '#DB9638',
    borderRadius: tab ? 50 : 20,
  },

  font: {
    color: Color.white,
    fontWeight: '600',
    fontSize: tab ? 18 : 14,
  },
  whiteStyle: {
    marginTop: 5,
    borderWidth: 1.5,
    borderColor: '#C8C8CA',
    height: tab ? 70 : 48,
    borderRadius: tab ? 50 : 20,
    backgroundColor: Color.white,
  },
  whiteFont: {
    fontWeight: '400',
    color: Color.black,
    fontSize: tab ? 18 : 14,
  },

  BDayBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    height: tab ? 70 : 50,
    marginTop: tab ? 13 : 5,
    borderRadius: tab ? 50 : 20,
    justifyContent: 'space-around',
    backgroundColor: Color.background,
  },
  BDayTitle: {
    fontWeight: '400',
    color: Color.black,
    fontSize: tab ? 19 : 14,
  },
  BDayText: {
    fontWeight: '400',
    color: Color.black,
    marginHorizontal: 10,
    fontSize: tab ? 18 : 14,
  },
  CountryContainer: {
    height: tab ? 80 : 50,
    marginTop: tab ? 20 : 15,
    borderRadius: tab ? 50 : 20,
    paddingHorizontal: tab ? 25 : 15,
    backgroundColor: Color.background,
  },
  CountryText: {
    fontWeight: '400',
    marginHorizontal: 10,
    fontSize: tab ? 18 : 14,
  },
  PCont: {
    borderWidth: 1,
    height: tab ? 70 : 50,
    borderColor: '#497FEA',
    borderRadius: tab ? 35 : 20,
    marginBottom: tab ? 20 : 15,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  Ptitle: {
    fontWeight: '600',
    color: Color.white,
    fontSize: tab ? 18 : 14,
  },
  ModalBtnCont: {
    width: '100%',
    marginTop: 10,
    borderWidth: 1,
    height: tab ? 70 : 48,
    borderRadius: tab ? 30 : 20,
  },
  ModalBtnText: {
    fontWeight: '600',
    fontSize: tab ? 18 : 16,
  },

  BDayCont: {
    marginTop: 20,
    marginBottom: 5,
    paddingHorizontal: 5,
  },

  // -------------- game buttons
  GameBTNCont: {
    marginTop: 15,
    borderRadius: 100,
    paddingHorizontal: 3,
    height: tab ? 70 : 50,
    width: tab ? '40%' : '47%',
  },
  GameBTNText: {
    maxWidth: '90%',
    fontWeight: '500',
    color: Color.white,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
});
