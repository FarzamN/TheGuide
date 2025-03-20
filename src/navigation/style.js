import {StyleSheet} from 'react-native';
import {tab} from '../utils/Constants';

export const style = StyleSheet.create({
  Title: {
    marginTop: 10,
    fontWeight: '600',
    fontSize: tab ? 18 : 15,
  },
  icon: {
    width: tab ? 35 : 25,
    height: tab ? 35 : 25,
  },
  AvatarBox: {
    marginLeft: 10,
    borderRadius: 100,
    marginVertical: 10,
    width: tab ? 130 : 100,
    height: tab ? 130 : 100,
  },
  logo: {
    width: 150,
    height: 50,
    marginBottom: 5,
    alignSelf: 'center',
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  backIcon: {
    borderRadius: 100,
    aspectRatio: 1 / 1,
    marginHorizontal: 15,
    width: tab ? 50 : 30,
    backgroundColor: '#DFDFEB',
  },
  tabBarLabel: {
    fontWeight: '600',
    fontSize: tab ? 15 : 9,
  },
});
