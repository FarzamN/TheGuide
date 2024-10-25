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
    color: Color.grey,
    fontFamily: Font.font700,
  },
  BannerImage: {
    width: width,
    height: 250,
    marginBottom: -30,
  },
  ProfileImage: {
    width: 50,
    height: 50,
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
    paddingVertical: 20,
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
    paddingVertical: 7,
    width: '48%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
  data: {
    fontSize: 16,
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
});
