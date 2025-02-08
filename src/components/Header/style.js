import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {tab, width} from '../../utils/Constants';

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
  dashboardHeadImage: {width: tab ? 25: 17, height: tab ? 25: 17},
  logout: {
    fontSize: 17,
    color: '#8FBFFE',
    fontWeight: '700',
  },
  title: {
    fontSize: tab ?20 : 14,
    color: 'red',
    fontWeight: '700',
  },
  BannerImage: {
    width: width,
    height:tab ? 300 : 230,
    marginBottom: -30,
  },
  ProfileImage: {
    width: 45,
    height: 45,
    borderRadius: 25,
    overflow: 'hidden',
  },
  ProfileTitle: {
    fontSize: tab ?25 : 18,
    color: Color.white,
    fontWeight: '600',
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
    width: tab ? "40%" : '43%',
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: Color.white,
    paddingVertical: tab ? 15 :5,
  },
  data: {
    fontSize: tab ?17 : 13,
    marginTop: 5,
    fontWeight: '700',
  },
  subText: {
    fontSize: tab ? 18 : 14,
    marginTop: 5,
    color: '#666',
    fontWeight: '600',
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
    height: tab ?250 : 200,
    marginBottom: -50,
  },
  GameTitle: {
    fontSize:tab ? 30 : 20,
    marginBottom:tab ? 20 : 10,
    color: Color.white,
    fontWeight: '700',
  },
  GameSubTitle: {
    fontSize:tab ?22 : 16,
    color: Color.white,
    fontWeight: '500',
  },
  prayLevel: {
    width: '70%',
    fontSize:tab ?30 : 20,


    fontWeight: '600',
  },
});
