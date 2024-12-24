import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/Color';
import {Font} from '../../../../utils/Font';

export const style = StyleSheet.create({
  EventBotCont: {
    borderWidth: 1,
    borderColor: Color.lightgrey,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: Color.white,
  },
  numBox: {
    borderRadius: 10,
    marginLeft: 10,
    width: 15,
    aspectRatio: 1 / 1,
  },
  num: {
    fontSize: 13,
    color: Color.white,
    fontWeight: '600',
  },
  btmTitle: {
    fontSize: 11,
    fontWeight: '600',
    color: Color.textGrey,
  },

  // ----- header of event
  box: {
    width: '40%',
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderColor: Color.grey,
  },
  tBox: {
    width: '20%',
  },
});
