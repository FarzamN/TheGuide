import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';

export const styles = StyleSheet.create({
  containerStyle: {
    height: 48,
    marginTop: 5,
    width: '100%',
    borderRadius: 20,
    borderWidth: 1.5,
    overflow: 'hidden',
    borderColor: '#DB9638',
  },

  font: {
    fontSize: 14,
    color: Color.white,
    fontWeight: '600',
  },
  whiteStyle: {
    height: 48,
    marginTop: 5,
    borderWidth: 1.5,
    borderRadius: 20,
    borderColor: '#C8C8CA',
    backgroundColor: Color.white,
  },
  whiteFont: {
    fontSize: 14,
    color: Color.black,
    fontWeight: '400',
  },

  BDayBtn: {
    height: 50,
    marginTop: 5,
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Color.background,
  },
  BDayTitle: {
    fontSize: 14,
    marginTop: 20,
    color: Color.black,
    paddingHorizontal: 5,
    fontWeight: '400',
  },
  BDayText: {
    color: Color.black,
    fontSize: 14,
    marginHorizontal: 10,
    fontWeight: '400',
  },
  CountryContainer: {
    height: 50,
    marginTop: 15,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: Color.background,
  },
  CountryText: {
    marginHorizontal: 10,
    fontWeight: '400',
  },
  PCont: {
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
    borderColor: '#497FEA',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  Ptitle: {
    fontSize: 14,
    color: Color.white,
    fontWeight: '600',
  },
  ModalBtnCont: {
    height: 50,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
  ModalBtnText: {
    fontSize: 16,
    fontWeight: '600',
  },

  // -------------- game buttons
  GameBTNCont: {
    height: 50,
    width: '47%',
    marginTop: 15,
    borderRadius: 100,
    paddingHorizontal: 3,
  },
  GameBTNText: {
    color: Color.white,
    fontWeight: '500',
    maxWidth: '90%',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
});
