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
    fontSize: 14,
    color: 'red',
    fontFamily: Font.font700,
  },
  BannerImage: {
    width: width,
    height: 230,
    marginBottom: -30,
  },
  ProfileImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    overflow: 'hidden',
  },
  ProfileTitle: {
    fontSize: 18,
    color: Color.white,
    fontFamily: Font.font600,
  },
  HeadRow: {
    marginTop: 10,
    marginBottom: 20,
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
    width: '43%',
    borderRadius: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    backgroundColor: Color.white,
  },
  data: {
    fontSize: 13,
    marginTop: 5,
    fontFamily: Font.font700,
  },
  subText: {
    fontSize: 14,
    marginTop: 5,
    color: '#666',
    fontFamily: Font.font600,
  },
  line: {
    width: 1,
    height: 43,
    backgroundColor: Color.LineDarkBlue,
  },
  HeadTextBox: {
    width: '45%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  // -------------------------------
  GameBannerImage: {
    width,
    height: 200,
    marginBottom: -50,
  },
  GameTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: Color.white,
    fontFamily: Font.font700,
  },
  GameSubTitle: {
    fontSize: 16,
    color: Color.white,
    fontFamily: Font.font500,
  },
  prayLevel: {
    width: '70%',
    fontSize: 20,
    fontFamily: Font.font600,
  },
});
