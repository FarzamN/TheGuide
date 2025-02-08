import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {tab, width} from '../../utils/Constants';
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
    fontSize: tab ?18 :14,
    width: tab ? "90%" : '83%',
    color: Color.black,
    marginHorizontal: 5,
    fontWeight: '400',
  },
  SearchBox: {
    borderRadius: tab ? 50 : 20,
    borderWidth: 1,
    backgroundColor: Color.background,
    borderColor: Color.placeholderTextColor,
    marginTop: 15,
    paddingHorizontal: 15,
    height: tab ? 70 : 45,
  },
});
