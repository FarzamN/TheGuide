import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';

export const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    borderRadius: 20,
    marginTop: 5,
    height: 52,
    borderWidth: 1.5,
    borderColor: '#DB9638',
    overflow: 'hidden',
  },

  font: {
    color: Color.white,
    fontSize: 16,
    fontFamily: Font.font600,
  },
  whiteStyle: {
    backgroundColor: Color.white,
    borderRadius: 20,
    marginTop: 5,
    height: 52,
    borderWidth: 1.5,
    borderColor: '#C8C8CA',
  },
  whiteFont: {
    color: Color.black,
    fontSize: 16,
    fontFamily: Font.font400,
  },

  BDayBtn: {
    flexDirection: 'row',
    backgroundColor: Color.background,
    borderRadius: 20,
    justifyContent: 'space-around',
    height: 50,
    alignItems: 'center',
    marginTop: 5,
  },
  BDayTitle: {
    color: Color.black,
    fontSize: 14,
    marginTop: 20,
    fontFamily: Font.font400,
    paddingHorizontal: 5,
  },
  BDayText: {
    color: Color.black,
    fontSize: 14,
    marginHorizontal: 10,
    fontFamily: Font.font400,
  },
  CountryContainer: {
    height: 50,
    backgroundColor: Color.background,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 15,
  },
  CountryText: {
    marginHorizontal: 10,
    fontFamily: Font.font400,
  },
  PCont: {
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
    // marginHorizontal: 20,
    borderColor: '#497FEA',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  Ptitle: {
    fontSize: 16,
    color: Color.white,
    fontFamily: Font.font600,
  },
  ModalBtnCont: {
    marginTop: 10,
    borderRadius: 20,
    height: 50,
    borderWidth: 1,
  },
  ModalBtnText: {
    fontSize: 18,
    fontFamily: Font.font600,
  },
});
