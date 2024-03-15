import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {width} from '../../utils/Constants';
import {Font} from '../../utils/Font';

export default StyleSheet.create({
  Container: {
    marginTop: 10,
  },
  InputStyles: {
    width: width - 20,
    alignSelf: 'center',
    color: Color.black,
    fontWeight: '500',
    fontSize: 16,
    borderRadius: 15,
    paddingHorizontal: 15,
  },
  label: {
    color: Color.white,
    fontSize: 13,
    fontFamily: Font.font500,
    paddingHorizontal: 10,
    marginBottom: 4,
  },
  InputBox: {
    backgroundColor: Color.white,
  },
});
