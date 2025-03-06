import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/Color';

export const style = StyleSheet.create({
  EventBotCont: {
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 8,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    borderColor: Color.lightgrey,
    backgroundColor: Color.white,
  },
  numBox: {
    width: 15,
    marginLeft: 10,
    borderRadius: 10,
    aspectRatio: 1 / 1,
  },
  num: {
    fontSize: 13,
    fontWeight: '600',
    color: Color.white,
  },
  btmTitle: {
    fontSize: 11,
    fontWeight: '600',
    color: Color.textGrey,
  },

  // ----- header of event
  box: {
    width: '40%',
    borderRightWidth: 1,
    paddingHorizontal: 10,
    borderColor: Color.grey,
  },
  tBox: {
    width: '20%',
  },
});
