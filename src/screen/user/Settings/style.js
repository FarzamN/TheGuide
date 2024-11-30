import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/Color';
import {Font} from '../../../utils/Font';

export const style = StyleSheet.create({
  logoutText: {
    fontSize: 11,
    color: Color.white,
    fontFamily: Font.font600,
  },
  logout: {
    backgroundColor: Color.white,
    borderRadius: 50,
    width: 35,
    aspectRatio: 1 / 1,
    alignSelf: 'center',
  },
  logoutImgWrap: {
    backgroundColor: Color.white,
    padding: 7,
    borderRadius: 50,
    aspectRatio: 1 / 1,
  },
  logoutImg: {
    width: 20,
    height: 20,
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
