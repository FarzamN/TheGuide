import {StyleSheet} from 'react-native';
import {tab} from '../../utils/Constants';

export const styles = StyleSheet.create({
  MainBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeSection: {
    marginTop: 20,
    marginBottom: 30,
  },
  label: {
    color: '#446683',
    marginVertical: 5,
    fontWeight: '500',
    fontSize: tab ? 17 : 11,
  },
  InputCon: {
    borderWidth: 1,
    borderRadius: 10,
    width: tab ? 100 : 70,
    borderColor: '#A9A9A9',
    height: tab ? 110 : 80,
  },
  inputText: {
    fontSize: 23,
    width: '100%',
    height: '100%',
    color: '#787677',
    textAlign: 'center',
  },
  DotCon: {
    marginTop: 20,
    marginHorizontal: 5,
  },
  TimeCont: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
