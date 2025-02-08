import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {fontScale, tab, width} from '../../utils/Constants';

export const style = StyleSheet.create({
  logo: {
    height: 220,
    width: 220,
  },
  heading: {
   fontSize: tab ? 50 : 23,
    fontWeight: '600',
  },
  text: {
    fontSize: tab ? 19 : 14,
    color: '#B7B8BC',
  },
  container: {
    backgroundColor: Color.white,
  },
});
