import {StyleSheet} from 'react-native';
import {Font} from '../../utils/Font';
import {Color} from '../../utils/Color';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageBox: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  text: {
    fontSize: 22,
    color: Color.black,
    fontFamily: Font.font500,
    textAlign: 'center',
  },
  RoleCardContainer: {
    backgroundColor: '#F8F8F8',
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
