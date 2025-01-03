import {StyleSheet} from 'react-native';
import {Font} from '../../../../utils/Font';
import {Color} from '../../../../utils/Color';

export const style = StyleSheet.create({
  barCont: {
    padding: 10,
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#EEEEEE',
  },
  time: {
    fontSize: 15,
    color: '#F52326',
    fontWeight: '600',
  },
  iconBox: {
    padding: 5,
    marginRight: 5,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: Color.lightgrey,
    backgroundColor: Color.white,
  },
  switchCont: {
    height: 30,
    width: 90,
    borderRadius: 10,
    alignSelf: 'center',
  },
  switchText: {
    fontSize: 11,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  TimeCont: {
    height: 35,
    width: 87,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
  },
  timeChangeText: {
    fontSize: 12,
    color: Color.white,
    fontWeight: '500',
  },
  TimeChangeCont: {
    padding: 7,
    marginRight: 10,
    borderWidth: 1,
    marginTop: 2,
    borderRadius: 7,
  },
  MondalCont: {},
});
