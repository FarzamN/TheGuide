import {StyleSheet} from 'react-native';
import {Font} from '../../../../utils/Font';
import {Color} from '../../../../utils/Color';
import { tab } from '../../../../utils/Constants';

export const style = StyleSheet.create({
  barCont: {
    paddingHorizontal:  10,
    paddingVertical: tab ? 20: 10 ,
    width: '90%',
    marginTop: 10,
    alignSelf: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#EEEEEE',
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
  timeIcon: {width: tab ? 25 : 18, height:tab ? 25 : 18},
  switchCont: {
    height: tab ? 40 : 30,
    width: tab ? 120: 90,
    borderRadius:tab ? 15 : 10,
    alignSelf: 'center',
  },
  switchText: {
    fontWeight: '500',
    fontSize: tab  ? 15: 11,
    textTransform: 'capitalize',
  },
  TimeCont: {
    height: tab ?45: 35,
    width:tab ? 120: 87,
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
