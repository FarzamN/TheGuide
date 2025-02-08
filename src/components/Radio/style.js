import {StyleSheet} from 'react-native';
import {Font} from '../../utils/Font';
import {Color} from '../../utils/Color';
import { tab } from '../../utils/Constants';

export const styles = StyleSheet.create({
  Heading: {
    fontSize: tab ? 20 : 15,
    color: Color.black,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  row: {
    overflow: 'hidden',
    height:tab ?70 : 50,
    marginTop: 5,
    // borderRadius: 10,
   borderColor:Color.grey,
   borderBottomWidth:1
  },
});
