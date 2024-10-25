import {StyleSheet} from 'react-native';
import {Color} from './Color';

export const GlobalStyle = StyleSheet.create({
  flex: {flex: 1},
  Container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  full: {
    width: '100%',
    height: '100%',
  },
  Padding: {
    paddingHorizontal: 20,
  },
  mtop: {
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  height: {
    height: 30,
  },
  between: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  justify: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  evenly: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  HideBar: {
    display: 'none',
  },
});
