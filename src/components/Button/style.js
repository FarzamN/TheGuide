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
    borderWidth: 0.7,
    borderColor: '#000',
    borderRadius: 10,
    justifyContent: 'space-around',
    height: 43,
    alignItems: 'center',
    marginTop: 10,
  },
  BDayText: {
    color: '#000000',
    fontSize: 16,
    marginHorizontal: 10,
  },
});
