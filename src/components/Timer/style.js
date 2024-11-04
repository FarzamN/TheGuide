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
    fontSize: 12,
    color: '#446683',
    marginVertical: 5,
    fontFamily: Font.font500,
  },
  InputCon: {
    width: 80,
    height: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A9A9A9',
  },
  inputText: {
    color: '#787677',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  DotCon: {
    marginHorizontal: 5,
    marginTop: 20,
  },
});
