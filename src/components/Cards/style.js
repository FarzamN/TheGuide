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
    fontSize: 18,
    color: black,
    fontFamily: Font.font500,
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
    fontSize: 20,
    fontFamily: Font.font700,
    color: white,
  },
  AssigmentSubtitle: {
    fontSize: 13,
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
    width: 90,
    marginBottom: 8,
  },
  AssigmentPlayText: {
    fontSize: 13,
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
    fontSize: 14,
    fontFamily: Font.font600,
    textTransform: 'capitalize',
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
    fontSize: 10,
    fontFamily: Font.font700,
  },
  iconBackground: {
    padding: 3,
    marginLeft: 5,
    borderRadius: 20,
    backgroundColor: '#201B1E',
  },
  EventName: {
    fontSize: 17,
    color: '#FFAB00',
    fontFamily: Font.font700,
    backgroundColor: 'rgba(128, 128, 128, 0.7)',
  },
  EventTitle: {
    fontSize: 11,
    color: white,
    maxWidth: '95%',
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
