import {StyleSheet} from 'react-native';
import {Font} from '../utils/Font';
import { tab } from '../utils/Constants';

export const style = StyleSheet.create({
  Title: {
    fontSize:tab ? 18 : 15,
    fontWeight: '600',
    marginTop: 10,
  },
  icon: {
    width: tab ? 35 :  25,
    height:tab ? 35 : 25,
  },
  AvatarBox: {
    marginLeft: 10,
    width:tab ? 130 : 100,
    height:tab ? 130 : 100,
    borderRadius: 100,
    marginVertical: 10,
  },
  logo: {
    width:  150,
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
    width:tab ? 50: 30,
    aspectRatio: 1 / 1,
    margin: 10,
  },
  tabBarLabel: {
    fontSize: tab ? 15 : 9,
    fontWeight: '600',
  },
});
