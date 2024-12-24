import {StyleSheet} from 'react-native';
import {Font} from '../utils/Font';

export const style = StyleSheet.create({
  Title: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  AvatarBox: {
    marginLeft: 10,
    width: 100,
    height: 100,
    borderRadius: 100,
    marginVertical: 10,
  },
  logo: {
    width: 150,
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
  tabBarLabel: {
    fontSize: 9,
    fontWeight: '600',
  },
});
