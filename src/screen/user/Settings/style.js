import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/Color';
import {Font} from '../../../utils/Font';

export const style = StyleSheet.create({
  logoutText: {
    fontSize: 13,
    color: Color.white,
    fontFamily: Font.font600,
  },
  logoutImgWrap: {
    backgroundColor: Color.white,
    padding: 10,
    borderRadius: 50,
    aspectRatio: 1 / 1,
  },
  logoutImg: {
    width: 25,
    height: 25,
  },
  profileMainWrap: {
    width: 130,
    height: 130,
    marginVertical: 10,
    alignSelf: 'center',
  },
  profileImgWrap: {
    width: 130,
    height: 130,
    borderRadius: 100,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  profileImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heading: {
    color: Color.white,
    fontFamily: Font.font600,
    fontSize: 20,
  },
  editImgWrap: {
    width: 20,
    aspectRatio: 1 / 1,
    position: 'absolute',
    right: 0,
    top: 10,
    zIndex: 99,
  },
  editImg: {},
});
