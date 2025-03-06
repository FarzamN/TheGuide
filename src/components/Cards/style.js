import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {tab} from '../../utils/Constants';

const {white, black} = Color;
export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  ImageBox: {
    marginVertical: 10,
    width: tab ? 230 : 200,
    height: tab ? 230 : 200,
  },
  text: {
    color: black,
    fontWeight: '500',
    fontSize: tab ? 25 : 18,
  },
  RoleCardContainer: {
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: '#F8F8F8',
  },

  HomeCardCont: {
    marginBottom: 10,
    alignSelf: 'center',
    backgroundColor: black,
    height: tab ? 135 : 100,
    width: tab ? '85%' : '100%',
    borderRadius: tab ? 30 : 20,
  },
  HomeTextCont: {flexDirection: 'row', alignItems: 'flex-start'},
  // ---------------------
  AssigmentListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  AssigmentCard: {
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: tab ? 135 : 100,
    borderRadius: tab ? 30 : 20,
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
    color: white,
    fontWeight: '700',
    fontSize: tab ? 30 : 20,
  },
  AssigmentSubtitle: {
    color: white,
    marginBottom: 5,
    fontWeight: '600',
    textAlign: 'right',
    fontSize: tab ? 20 : 13,
  },
  AssigmentPlayButton: {
    marginBottom: 8,
    paddingHorizontal: 15,
    width: tab ? 120 : 90,
    backgroundColor: white,
    borderRadius: tab ? 50 : 20,
    paddingVertical: tab ? 15 : 7,
  },
  AssigmentPlayText: {
    color: Color.black,
    fontWeight: 'bold',
    fontSize: tab ? 17 : 13,
  },
  AssigmentImg: {
    width: 30,
    height: 30,
    marginRight: 10,
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
    borderColor: white,
    borderRightWidth: 1,
  },
  centerBox: {
    height: 50,
    width: '60%',
  },
  Progress: {
    height: 10,
    width: '80%',
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: white,
  },
  ProgressValue: {
    height: 10,
    borderRadius: 20,
    backgroundColor: white,
  },
  Text: {
    color: white,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  secBox: {
    width: '20%',
    borderLeftWidth: 1,
    borderColor: white,
  },

  // ---------- event card
  EventCardContainer: {
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    borderColor: Color.grey,
    height: tab ? 250 : 150,
    width: tab ? '85%' : '100%',
  },
  
  EventCardImage: {
    flex: 1,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },

  dateBanner: {
    marginRight: 5,
    width: tab ? 50 : 30,
    height: tab ? 70 : 50,
  },
  dateText: {
    color: white,
    fontWeight: '700',
    fontSize: tab ? 15 : 10,
  },
  iconBackground: {
    padding: 3,
    marginLeft: 5,
    borderRadius: 20,
    backgroundColor: '#201B1E',
  },
  EventName: {
    color: '#FFAB00',
    borderRadius: 10,
    fontWeight: '700',
    fontSize: tab ? 25 : 17,
    backgroundColor: 'rgba(128, 128, 128, 0.7)',
  },
  EventTitle: {
    color: white,
    maxWidth: '95%',
    borderRadius: 10,
    fontWeight: '600',
    fontSize: tab ? 17 : 11,
    textTransform: 'capitalize',
    backgroundColor: 'rgba(128, 128, 128, 0.7)',
  },
  endText: {
    color: white,
    width: '70%',
    fontWeight: '500',
    fontSize: tab ? 15 : 9,
    backgroundColor: 'rgba(128, 128, 128, 0.7)',
  },
  bookBtn: {width: '30%', height: tab ? 40 : 25},
  bookText: {fontSize: tab ? 18 : 12, fontWeight: '500'},
});
