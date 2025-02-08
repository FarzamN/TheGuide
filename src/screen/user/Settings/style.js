import {StyleSheet} from 'react-native';
import {Color} from '../../../utils/Color';
import {Font} from '../../../utils/Font';
import { tab } from '../../../utils/Constants';

export const style = StyleSheet.create({
  logoutText: {
    fontSize:tab ?15 : 11,
    color: Color.white,
    fontWeight: '600',
  },
  logout: {
    backgroundColor: Color.white,
    borderRadius: 50,
    width: tab ? 50 : 35,
    aspectRatio: 1 / 1,
    alignSelf: 'center',
  },
  logoutImgWrap: {
    backgroundColor: Color.white,
    padding: 7,
    borderRadius: 50,
    width: tab ? 50 : 35,

    aspectRatio: 1 / 1,
  },
  logoutImg: {
    width:  tab ? 25 :20,
    height: tab ? 25 :20,
  },
  Pbtn: {width: '85%', alignSelf: 'center', marginTop: 15},
  profileMainWrap: {
    width:tab ? 200 : 130,
    height:tab ? 200 : 130,
    marginVertical: 10,
    alignSelf: 'center',
  },
  profileImgWrap: {
    width:tab ? 200 : 130,
    height:tab ? 200 : 130,
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
    fontWeight: '600',
    fontSize: tab ?25 : 20,
  },
  editImgWrap: {
    width: tab ? 30 : 20,
    aspectRatio: 1 / 1,
    position: 'absolute',
    right: 0,
    top: 10,
    zIndex: 99,
  },
  editImg: {},
});
