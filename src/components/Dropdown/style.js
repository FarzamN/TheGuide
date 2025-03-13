import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import { tab } from '../../utils/Constants';

export const style = StyleSheet.create({
  boxStyles: {
    borderWidth: 0,
    height: tab ? 60 : 48,
    borderRadius: tab ? 25 : 20,

    
    alignItems: 'center',
    backgroundColor: Color.background,
  },
  inputStyles: {
    fontSize: tab ? 16 : 14,
    fontWeight: '400',
    color: Color.black,
    textTransform: 'capitalize',
  },
  dropdownTextStyles: {
    fontSize: tab ? 18 : 14,
    fontWeight: '400',
    color: Color.black,
    textTransform: 'capitalize',
  },
});
