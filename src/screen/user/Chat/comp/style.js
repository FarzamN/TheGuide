import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/Color';

export const style = StyleSheet.create({
  headerCont: {
    backgroundColor: Color.status,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconBox: {
    backgroundColor: Color.white,
    borderRadius: 50,
    width: 27,
    aspectRatio: 1 / 1,
  },
  headerText: {
    color: Color.white,
    fontSize: 20,
    fontWeight: '600',
  },


  inboxDP: {
    width: 60,
    height: 60,
    marginRight: 5,
  },
  title: {
    color: Color.black,
    fontSize: 16,
    fontWeight: '600',
  },
 
  lastMsg: {color: Color.grey, fontSize: 14, fontWeight: '500'},
  createdAt: {color: Color.grey, fontSize: 12, fontWeight: '500'},

});
