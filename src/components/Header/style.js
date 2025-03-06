import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {tab, width} from '../../utils/Constants';

export default StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: Color.white,
    justifyContent: 'space-between',
  },
  ImageBox: {
    width: 70,
    height: 60,
  },
  dashboardHeadImage: {width: tab ? 25 : 17, height: tab ? 25 : 17},
  logout: {
    fontSize: 17,
    color: '#8FBFFE',
    fontWeight: '700',
  },
  title: {
    color: 'red',
    fontWeight: '700',
    fontSize: tab ? 20 : 14,
  },
  BannerImage: {
    width: width,
    marginBottom: -30,
    height: tab ? 300 : 230,
  },
  ProfileImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    overflow: 'hidden',
  },
  ProfileTitle: {
    fontWeight: '600',
    color: Color.white,
    fontSize: tab ? 25 : 18,
  },
  HeadRow: {
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  nameBox: {
    borderRadius: 5,
    paddingVertical: 2,
    backgroundColor: Color.LineDarkBlue,
  },
  name: {color: Color.white, fontSize: 13},

  // ------------------------------------------------
  box: {
    borderRadius: 10,
    flexDirection: 'row',
    width: tab ? '40%' : '43%',
    backgroundColor: Color.white,
    paddingVertical: tab ? 15 : 5,
  },
  data: {
    marginTop: 5,
    fontWeight: '700',
    fontSize: tab ? 17 : 13,
  },
  subText: {
    marginTop: 5,
    color: '#666',
    fontWeight: '600',
    fontSize: tab ? 18 : 14,
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
    marginBottom: -50,
    height: tab ? 250 : 200,
  },
  GameTitle: {
    fontWeight: '700',
    color: Color.white,
    fontSize: tab ? 30 : 20,
    marginBottom: tab ? 20 : 10,
  },
  GameSubTitle: {
    fontWeight: '500',
    color: Color.white,
    fontSize: tab ? 22 : 16,
  },
  prayLevel: {
    width: '70%',
    fontWeight: '600',
    fontSize: tab ? 30 : 20,
  },
});
