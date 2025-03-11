import {StyleSheet} from 'react-native';
import {Color} from './Color';
import {tab} from './Constants';

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
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  showBar: {
    display: 'flex',
    height: tab ? 100 : 80,
  },
  HideBar: {
    display: 'none',
  },
  mapContaner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flex: 1,
  },
});
