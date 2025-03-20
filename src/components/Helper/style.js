import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {iOS, tab, width} from '../../utils/Constants';

export const style = StyleSheet.create({
  Divider: {
    height: 1,
    width: width - 20,
    borderRadius: 100,
    backgroundColor: 'grey',
  },
  modalBar: {
    width: '30%',
    height: 7,
    borderRadius: 20,
    backgroundColor: Color.grey,
    alignSelf: 'center',
    marginBottom: 10,
  },
  closeBTN: {
    borderRadius: 100,
    padding: tab ? 4 : 3,
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: 'black',
    justifyContent: 'center',
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

  PlusCont: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 9,
    width: 50,
    aspectRatio: 1 / 1,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.orange,
  },
});
