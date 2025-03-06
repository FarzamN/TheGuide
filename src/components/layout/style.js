import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {tab} from '../../utils/Constants';

export const style = StyleSheet.create({
  logo: {
    width: 220,
    height: 220,
  },
  heading: {
    fontWeight: '600',
    fontSize: tab ? 50 : 23,
  },
  text: {
    color: '#B7B8BC',
    fontSize: tab ? 19 : 14,
  },
  container: {
    backgroundColor: Color.white,
  },
  closeButton: {
    right: 20,
    borderRadius: 50,
    aspectRatio: 1 / 1,
    position: 'absolute',
    width: tab ? 50 : 35,
    backgroundColor: Color.white,
  },
});
