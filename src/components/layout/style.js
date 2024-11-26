import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';
import {width} from '../../utils/Constants';

export const style = StyleSheet.create({
  logo: {
    height: 220,
    width: 220,
  },
  heading: {
    fontSize: 23,
    fontFamily: Font.font600,
  },
  text: {
    fontSize: 14,
    color: '#B7B8BC',
  },
  container: {
    backgroundColor: Color.white,
  },
});
