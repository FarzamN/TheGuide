import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {tab, width} from '../../utils/Constants';

export const style = StyleSheet.create({
  Divider: {
    height: 1,
    width: width - 20,
    borderRadius: 100,
    backgroundColor: 'grey',
  },
  helperText: {
    color: 'red',
    marginTop: 7,
    fontSize: tab ? 16 : 14,
  },

  ImageContainer: {
    width: 150,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    alignSelf: 'center',
  },
  IconBox: {
    bottom: 5,
    right: 15,
    padding: 4,
    borderRadius: 100,
    position: 'absolute',
    backgroundColor: Color.white,
  },

  KeyboardRow: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  key: {
    width: '18%',
    borderRadius: 10,
    aspectRatio: 1 / 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
  },
  keyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Color.Blue,
  },
});
