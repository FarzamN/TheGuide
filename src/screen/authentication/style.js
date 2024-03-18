import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';

export const style = StyleSheet.create({
  ImageBox: {
    widthL: 160,
    height: 90,
  },
  newAccountButton: {
    backgroundColor: Color.Sky,
    borderWidth: 1,
    borderColor: Color.white,
  },
  newAccountButtonText: {
    fontSize: 16,
    fontFamily: Font.font500,
  },
  forget: {
    fontSize: 16,
    fontFamily: Font.font400,
    color: Color.white,
    marginTop: 10,
    marginHorizontal: 5,
  },
});
