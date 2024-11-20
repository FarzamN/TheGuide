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
    fontSize: 17,
    color: '#F52326',
    fontFamily: Font.font600,
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
    width: 100,
    borderRadius: 10,
    alignSelf: 'center',
  },
  switchText: {
    fontSize: 14,
    fontWeight: '500',
  },
  TimeCont: {
    height: 40,
    width: 100,
    borderWidth: 1,
    borderRadius: 10,
  },
  timeChangeText: {
    color: Color.white,
    fontFamily: Font.font600,
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
