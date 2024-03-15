import {StyleSheet} from 'react-native';
import {Color} from './Color';

export const GlobalStyle = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Color.Sky,
  },
  full: {
    width: '100%',
    height: '100%',
  },
  Padding: {
    width: '95%',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
