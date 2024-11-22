import {StyleSheet} from 'react-native';
import {Font} from '../../utils/Font';
import {Color} from '../../utils/Color';

const {white, black} = Color;
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageBox: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  text: {
    fontSize: 22,
    color: black,
    fontFamily: Font.font500,
    textAlign: 'center',
  },
  RoleCardContainer: {
    backgroundColor: '#F8F8F8',
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },

  HomeCardCont: {
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: black,
  },
  HomeTextCont: {flexDirection: 'row', alignItems: 'flex-start'},
  // ---------------------
  AssigmentListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  AssigmentCard: {
    borderRadius: 20,
    overflow: 'hidden',
    paddingVertical: 3,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  AssigmentIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  AssigmentTextWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  AssigmentTitle: {
    fontSize: 22,
    fontFamily: Font.font700,
    color: white,
  },
  AssigmentSubtitle: {
    fontSize: 14,
    color: white,
    marginBottom: 5,
    fontFamily: Font.font600,
    textAlign: 'right',
  },
  AssigmentPlayButton: {
    backgroundColor: white,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 20,
    width: 100,
    marginBottom: 8,
  },
  AssigmentPlayText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },

  //  Status Card design

  height: {height: 65},
  StatusCardComp: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
  },
  firstBox: {
    width: '20%',
    borderRightWidth: 1,
    borderColor: white,
  },
  centerBox: {
    width: '60%',
    height: 50,
  },
  Progress: {
    borderWidth: 1,
    borderColor: white,
    width: '80%',
    height: 10,
    borderRadius: 20,
    marginTop: 5,
  },
  ProgressValue: {
    height: 10,
    borderRadius: 20,
    backgroundColor: white,
  },
  Text: {
    color: white,
    fontSize: 17,
    fontFamily: Font.font600,
  },
  secBox: {
    width: '20%',
    borderLeftWidth: 1,
    borderColor: white,
  },

  // ---------- event card
  EventCardContainer: {
    marginBottom: 10,
    paddingBottom: 10,
    borderRadius: 10,
    height: 150,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Color.grey,
    justifyContent: 'space-between',
  },
  dateBanner: {
    width: 30,
    height: 50,
    marginRight: 5,
  },
  dateText: {
    color: white,
    fontSize: 13,
    fontFamily: Font.font700,
  },
  iconBackground: {
    padding: 3,
    marginLeft: 5,
    borderRadius: 20,
    backgroundColor: '#201B1E',
  },
  EventName: {
    fontSize: 20,
    color: '#FFAB00',
    fontFamily: Font.font700,
  },
  EventTitle: {
    fontSize: 12,
    color: white,
    fontFamily: Font.font600,
    textTransform: 'capitalize',
  },
  endText: {
    fontSize: 9,
    color: white,
    fontFamily: Font.font500,
    width: '70%',
  },
  bookBtn: {width: '30%', height: 25},
  bookText: {fontSize: 12, fontFamily: Font.font500},
});
