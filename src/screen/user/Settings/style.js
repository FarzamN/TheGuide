import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/Color';
import {tab} from '../../../utils/Constants';

export const style = StyleSheet.create({
  logoutText: {
    fontWeight: '600',
    color: Color.white,
    fontSize: tab ? 15 : 11,
  },
  logout: {
    borderRadius: 50,
    aspectRatio: 1 / 1,
    alignSelf: 'center',
    width: tab ? 50 : 35,
    backgroundColor: Color.white,
  },
  logoutImgWrap: {
    padding: 7,
    borderRadius: 50,
    aspectRatio: 1 / 1,
    width: tab ? 50 : 35,
    backgroundColor: Color.white,
  },
  logoutImg: {
    width: tab ? 25 : 20,
    height: tab ? 25 : 20,
  },
  Pbtn: {
    width: '85%',
    marginTop: 15,
    alignSelf: 'center',
  },
  profileMainWrap: {
    marginVertical: 10,
    alignSelf: 'center',
    width: tab ? 200 : 130,
    height: tab ? 200 : 130,
  },
  profileImgWrap: {
    borderRadius: 100,
    overflow: 'hidden',
    alignSelf: 'center',
    width: tab ? 200 : 130,
    height: tab ? 200 : 130,
  },
  profileImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  heading: {
    fontWeight: '600',
    color: Color.white,
    fontSize: tab ? 25 : 20,
  },
  editImgWrap: {
    top: 10,
    right: 0,
    zIndex: 99,
    aspectRatio: 1 / 1,
    position: 'absolute',
    width: tab ? 30 : 20,
  },
  editImg: {},
});
