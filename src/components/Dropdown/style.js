import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';

export const style = StyleSheet.create({
  boxStyles: {
    height: 50,
    borderWidth: 0,
    alignItems: 'center',
    backgroundColor: '#F8F9FB',
    borderRadius: 20,
  },
  inputStyles: {
    color: Color.black,
    fontFamily: Font.font400,
  },
  dropdownTextStyles: {
    color: Color.black,
    fontFamily: Font.font400,
  },
});