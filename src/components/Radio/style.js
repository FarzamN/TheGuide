import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {tab} from '../../utils/Constants';

export const styles = StyleSheet.create({
  Heading: {
    fontWeight: '500',
    color: Color.black,
    fontSize: tab ? 20 : 15,
    textTransform: 'capitalize',
  },
  row: {
    marginTop: 5,
    overflow: 'hidden',
    borderBottomWidth: 1,
    height: tab ? 70 : 50,
    borderColor: Color.grey,
  },
});
