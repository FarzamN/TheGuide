import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {Font} from '../../utils/Font';
import {width} from '../../utils/Constants';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: Color.white,
    // borderRadius: 10,
    paddingHorizontal: 15,
  },
  ImageBox: {
    width: 70,
    height: 60,
  },
  logout: {
    fontSize: 17,
    color: '#8FBFFE',
    fontFamily: Font.font700,
  },
  title: {
    fontSize: 17,
    color: 'red',
    fontFamily: Font.font700,
  },
  BannerImage: {
    width: width,
    height: 250,
    marginBottom: -30,
  },
  ProfileImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    overflow: 'hidden',
  },
  ProfileTitle: {
    fontSize: 20,
    color: Color.white,
    fontFamily: Font.font600,
  },
  HeadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  nameBox: {
    backgroundColor: Color.LineDarkBlue,
    borderRadius: 5,
    paddingVertical: 2,
  },
  name: {color: Color.white, fontSize: 13},

  // ------------------------------------------------
  box: {
    backgroundColor: Color.white,
    borderRadius: 10,
    paddingVertical: 5,
    width: '44%',
    flexDirection: 'row',
  },
  data: {
    fontSize: 15,
    marginTop: 5,
    fontFamily: Font.font500,
  },
  subText: {
    fontSize: 14,
    marginTop: 5,
    color: '#666',
    fontFamily: Font.font600,
  },
  line: {
    height: 50,
    width: 1,
    marginHorizontal: 10,
    backgroundColor: Color.LineDarkBlue,
  },

  // -------------------------------
  GameBannerImage: {
    width,
    height: 200,
    marginBottom: -20,
  },
  GameTitle: {
    fontFamily: Font.font700,
    fontSize: 20,
    color: Color.white,
    marginBottom: 10,
  },
  GameSubTitle: {
    fontFamily: Font.font500,
    fontSize: 16,
    color: Color.white,
  },
});
