import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';
import { tab } from '../../utils/Constants';

export const styles = StyleSheet.create({
  containerStyle: {
    height: tab ? 70 : 48,
    marginTop: 5,
    width: '100%',
    borderRadius: tab ? 50 : 20,
    borderWidth: 1.5,
    overflow: 'hidden',
    borderColor: '#DB9638',
  },

  font: {
    fontSize: tab ? 18 : 14,
    color: Color.white,
    fontWeight: '600',
  },
  whiteStyle: {
    height: tab ? 70 : 48,
    marginTop: 5,
    borderWidth: 1.5,
    borderRadius: tab ? 50 : 20,
    borderColor: '#C8C8CA',
    backgroundColor: Color.white,
  },
  whiteFont: {
    fontSize: tab ? 18 : 14,
    color: Color.black,
    fontWeight: '400',
  },

  BDayBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    height: tab ? 70 : 50,
    marginTop:tab ? 13 : 5,
    borderRadius:tab ? 50: 20,
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
    fontSize: tab ? 18 :14 , 
  },
  CountryContainer: {
    height: tab ? 80 : 50,
    marginTop:tab ? 20 : 15,
    borderRadius:tab ? 50: 20,
    paddingHorizontal: tab  ?25 : 15,
    backgroundColor: Color.background,
  },
  CountryText: {
    fontSize: tab ? 18 :14 , 
    marginHorizontal: 10,
    fontWeight: '400',
  },
  PCont: {
    height: tab ? 70: 50,
    borderWidth: 1,
    borderRadius: tab ? 35:20,
    marginBottom:tab ? 20 : 15,
    borderColor: '#497FEA',
    backgroundColor: 'rgba(255,255,255,0.3)',
  },
  Ptitle: {
    fontSize: tab ? 18 : 14,
    color: Color.white,
    fontWeight: '600',
  },
  ModalBtnCont: {
    height: tab ? 70 : 48,
    width: '100%',
    borderRadius: tab ? 50 : 20,
    marginTop: 10,
    borderWidth: 1,
  },
  ModalBtnText: {
    fontSize: tab ? 18 : 16,
    fontWeight: '600',
  },

  BDayCont:{
    marginTop: 20,
    paddingHorizontal: 5,
    marginBottom:5
  },

  // -------------- game buttons
  GameBTNCont: {
    height: tab ? 70 : 50,
    width: tab ? "40%" :'47%',
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
