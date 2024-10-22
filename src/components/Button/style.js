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
    backgroundColor: '#F8F9FB',
    borderRadius: 20,
    justifyContent: 'space-around',
    height: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  BDayText: {
    color: Color.black,
    fontSize: 14,
    marginHorizontal: 10,
    fontFamily: Font.font400,
  },
  CountryContainer: {
    height: 50,
    backgroundColor: '#F8F9FB',
    paddingHorizontal: 15,
    borderRadius: 20,
    marginTop: 15,
  },
  CountryText: {
    marginHorizontal: 10,
    fontFamily: Font.font400,
  },
});
