import {StyleSheet} from 'react-native';
import {Font} from '../../utils/Font';

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
    fontSize: 11,
    color: '#446683',
    marginVertical: 5,
    fontFamily: Font.font500,
  },
  InputCon: {
    width: 70,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A9A9A9',
  },
  inputText: {
    color: '#787677',
    fontSize: 23,
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
  DotCon: {
    marginHorizontal: 5,
    marginTop: 20,
  },
  TimeCont: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
