import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {tab, width} from '../../utils/Constants';

export default StyleSheet.create({
  Container: {
    marginTop: 10,
  },
  InputStyles: {
    fontSize: 16,
    borderRadius: 15,
    fontWeight: '500',
    width: width - 20,
    color: Color.black,
    alignSelf: 'center',
    paddingHorizontal: 15,
  },
  label: {
    fontSize: 13,
    marginBottom: 4,
    fontWeight: '500',
    color: Color.white,
    paddingHorizontal: 10,
  },
  InputBox: {
    backgroundColor: Color.white,
  },

  SearchInput: {
    fontWeight: '400',
    color: Color.black,
    marginHorizontal: 5,
    fontSize: tab ? 16 : 14,
    width: tab ? '90%' : '83%',
  },
  SearchBox: {
    borderWidth: 1,
    marginTop: 15,
    height: tab ? 70 : 45,
    paddingHorizontal: 15,
    borderRadius: tab ? 25 : 20,

    backgroundColor: Color.background,
    borderColor: Color.placeholderTextColor,
  },
});
