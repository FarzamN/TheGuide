import {StyleSheet} from 'react-native';
import {Font} from '../utils/Font';

export const style = StyleSheet.create({
  Title: {
    fontSize: 17,
    fontFamily: Font.font600,
    marginTop: 10,
  },
  icon: {
    width: 35,
    height: 35,
  },
  AvatarBox: {marginLeft: 10},
  logo: {
    width: 200,
    height: 50,
    alignSelf: 'center',
    marginBottom: 5,
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  backIcon: {
    backgroundColor: '#DFDFEB',
    borderRadius: 100,
    width: 30,
    aspectRatio: 1 / 1,
    margin: 10,
  },
});
