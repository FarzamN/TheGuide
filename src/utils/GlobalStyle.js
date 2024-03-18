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
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  height: {
    height: 30,
  },
});
