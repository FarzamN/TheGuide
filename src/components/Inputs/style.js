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
    fontWeight: '500',
    paddingHorizontal: 10,
    marginBottom: 4,
  },
  InputBox: {
    backgroundColor: Color.white,
  },

  SearchInput: {
    fontSize: 14,
    width: '83%',
    color: Color.black,
    marginHorizontal: 5,
    fontWeight: '400',
  },
  SearchBox: {
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: Color.background,
    borderColor: Color.placeholderTextColor,
    marginTop: 15,
    paddingHorizontal: 15,
    height: 45,
  },
});
