import {Font} from '../../utils/Font';
import {StyleSheet} from 'react-native';
import {width} from '../../utils/Constants';

export const style = StyleSheet.create({
  forget: {
    fontSize: 16,
    marginTop: 10,
    color: '#ABABAD',
    marginHorizontal: 5,
    fontFamily: Font.font400,
  },
  alreadyBox: {
    height: 50,
    marginTop: 20,
  },
  already: {
    fontSize: 14,
    color: '#ABABAD',
    fontFamily: Font.font400,
    textDecorationLine: 'underline',
  },
  loginImage: {
    width: '100%',
    height: 180,
    // marginTop: -10,
  },
  regsterImage: {
    width,
    height: 185,
    marginBottom: -30,
    resizeMode: 'contain',
  },
  smBtn: {
    width: '49%',
    marginTop: 30,
  },
});
