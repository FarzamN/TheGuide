import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';
import {width} from '../../utils/Constants';

export const style = StyleSheet.create({
  forget: {
    fontSize: 16,
    fontFamily: Font.font400,
    color: '#ABABAD',
    marginTop: 10,
    marginHorizontal: 5,
  },
  alreadyBox: {
    height: 50,
    marginTop: 20,
  },
  already: {
    fontSize: 16,
    fontFamily: Font.font400,
    color: '#ABABAD',
    textDecorationLine: 'underline',
  },
  loginImage: {
    width: '100%',
    height: 270,
    resizeMode: 'contain',
    marginTop: -10,
  },
  regsterImage: {
    width,
    height: 185,
    resizeMode: 'contain',
    marginTop: -10,
  },
  smBtn: {
    width: '49%',
    marginTop: 30,
  },
});
