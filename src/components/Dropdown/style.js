import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';

export const style = StyleSheet.create({
  boxStyles: {
    height: 50,
    borderWidth: 0,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: Color.background,
  },
  inputStyles: {
    fontWeight: '400',
    color: Color.black,
    textTransform: 'capitalize',
  },
  dropdownTextStyles: {
    fontWeight: '400',
    color: Color.black,
    textTransform: 'capitalize',
  },
});
