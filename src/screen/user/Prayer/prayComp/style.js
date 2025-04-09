import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/Color';
import {tab} from '../../../../utils/Constants';

export const style = StyleSheet.create({
  barCont: {
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#EEEEEE',
    paddingVertical: tab ? 20 : 10,
  },
  time: {
    color: '#F52326',
    fontWeight: '600',
    fontSize: tab ? 20 : 15,
  },
  iconBox: {
    padding: 5,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Color.lightgrey,
    backgroundColor: Color.white,
  },
  timeIcon: {
    width: tab ? 25 : 18,
    height: tab ? 25 : 18,
  },
  switchCont: {
    alignSelf: 'center',
    height: tab ? 40 : 30,
    width: tab ? 120 : 90,
    borderRadius: tab ? 15 : 10,
  },
  switchText: {
    fontWeight: '500',
    fontSize: tab ? 15 : 11,
    textTransform: 'capitalize',
  },
  TimeCont: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    height: tab ? 45 : 35,
    width: tab ? 120 : 87,
  },
  timeChangeText: {
    fontSize: 12,
    fontWeight: '500',
    color: Color.white,
  },
  TimeChangeCont: {
    padding: 7,
    marginTop: 2,
    borderWidth: 1,
    borderRadius: 7,
    marginRight: 10,
  },
  MondalCont: {},
  notificationBox: {
    width: 12,
    aspectRatio: 1 / 1,
    backgroundColor: 'red',
    borderRadius: 100,
    marginRight: 3,
  },
  notificationText: {color: Color.white, fontSize: 10},
});
