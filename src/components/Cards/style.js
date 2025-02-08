import {StyleSheet} from 'react-native';
import {Font} from '../../utils/Font';
import {Color} from '../../utils/Color';
import {tab} from '../../utils/Constants';

const {white, black} = Color;
export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageBox: {
    width: tab ? 230 : 200,
    height: tab ? 230 : 200,
    marginVertical: 10,
  },
  text: {
    fontSize: tab ? 25 : 18,
    color: black,
    fontWeight: '500',
  },
  RoleCardContainer: {
    backgroundColor: '#F8F8F8',
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },

  HomeCardCont: {
    marginBottom: 10,
    borderRadius: tab ? 30 : 20,
    backgroundColor: black,
    height: tab ? 135 : 100,
    width: tab? '85%' :'100%' ,
    alignSelf:'center',

  },
  HomeTextCont: {flexDirection: 'row', alignItems: 'flex-start'},
  // ---------------------
  AssigmentListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  AssigmentCard: {
    borderRadius: tab ? 30 : 20,
    overflow: 'hidden',
    height: tab ? 135 : 100,
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
    fontSize: tab ? 30 : 20,
    fontWeight: '700',
    color: white,
  },
  AssigmentSubtitle: {
    fontSize: tab ? 20 : 13,
    color: white,
    marginBottom: 5,
    fontWeight: '600',
    textAlign: 'right',
  },
  AssigmentPlayButton: {
    backgroundColor: white,
    paddingHorizontal: 15,
    paddingVertical: tab ? 15 : 7,
    borderRadius: tab ? 50 : 20,
    width: tab ? 120 : 90,
    marginBottom: 8,
  },
  AssigmentPlayText: {
    fontSize: tab ? 17 : 13,
    color: '#000',
    fontWeight: 'bold',
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
    marginBottom: 10,
    paddingBottom: 10,
    borderRadius: 10,
    width:tab ?'85%' : "100%",
    alignSelf:'center',
    height: tab ? 250 : 150,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Color.grey,
    justifyContent: 'space-between',
  },
  dateBanner: {
    width: tab ? 50 : 30,
    height:tab ? 70 :  50,
    marginRight: 5,
  },
  dateText: {
    color: white,
    fontSize: tab ? 15 : 10,
    fontWeight: '700',
  },
  iconBackground: {
    padding: 3,
    marginLeft: 5,
    borderRadius: 20,
    backgroundColor: '#201B1E',
  },
  EventName: {
    fontSize: tab ? 25 : 17,
    color: '#FFAB00',
    fontWeight: '700',
    backgroundColor: 'rgba(128, 128, 128, 0.7)',
    borderRadius: 10,
  },
  EventTitle: {
    fontSize: tab ? 17 : 11,
    backgroundColor: 'rgba(128, 128, 128, 0.7)',
    borderRadius: 10,

    color: white,
    maxWidth: '95%',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  endText: {
    fontSize: tab ? 15 : 9,
    color: white,
    fontWeight: '500',
    
    width: '70%',
    backgroundColor: 'rgba(128, 128, 128, 0.7)',

  },
  bookBtn: {width: '30%', height: tab ? 40 : 25},
  bookText: {fontSize: tab ? 18 : 12, fontWeight: '500'},
});
