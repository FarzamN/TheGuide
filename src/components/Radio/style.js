import {StyleSheet} from 'react-native';
import {Font} from '../../utils/Font';
import {Color} from '../../utils/Color';

export const styles = StyleSheet.create({
  Heading: {
    fontSize: 15,
    color: Color.black,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  row: {
    overflow: 'hidden',
    height: 50,
    marginTop: 5,
    borderRadius: 10,
  },
});
