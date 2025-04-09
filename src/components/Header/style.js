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
  dashboardHeadImage: {
    width: tab ? 25 : 17,
    height: tab ? 25 : 17,
  },
  dashboardCartImage: {
    width: tab ? 35 : 30,
    height: tab ? 35 : 30,
  },

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
    overflow: 'hidden',
    width: tab ? 55 : 40,
    height: tab ? 55 : 40,
    borderRadius: tab ? 50 : 25,
  },
  ProfileAppLogo: {
    width: tab ? 100 : 150,
    height: tab ? 55 : 40,
    marginTop: -7,
  },
  ProfileTitle: {
    fontWeight: '600',
    color: Color.white,
    textAlign: 'center',
    fontSize: tab ? 25 : 16,
  },
  pointBox: {
    width: '70%',
    borderRadius: 10,
    borderColor: Color.white,
  },
  HeadRow: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  nameBox: {
    width: 40,
    borderRadius: 5,
    paddingVertical: 2,
    backgroundColor: Color.LineDarkBlue,
  },
  name: {
    fontWeight: '500',
    color: Color.white,
    fontSize: tab ? 15 : 11,
  },

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
    fontSize: tab ? 16 : 14,
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
