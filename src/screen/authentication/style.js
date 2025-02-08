import {Font} from '../../utils/Font';
import {StyleSheet} from 'react-native';
import {iOS, tab, width} from '../../utils/Constants';
import {Color} from '../../utils/Color';

export const style = StyleSheet.create({
  guestText: {color: Color.white, fontSize: tab ? 18 : 14, fontWeight: '600'},
  guestBtn: {
    paddingHorizontal:tab ? 18 : 25,
    paddingVertical: tab ? 8 :10,
    alignSelf: 'flex-end',
    backgroundColor: 'grey',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forget: {
    fontSize: 16,
    marginTop: 10,
    color: '#ABABAD',
    marginHorizontal: 5,
    fontWeight: '400',
  },
  alreadyBox: {
    height: 50,
    marginTop: 20,
  },
  already: {
    fontSize: tab ? 18 : 14,
    color: '#ABABAD',
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
  loginImage: {
    width: '100%',
    height: tab ? 400 : iOS ? 250 : 180,
  },
  term: {
    color: Color.status,
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
  },
  termBTN: {width: '50%', alignSelf: 'center'},
  TermHeading: {
    color: Color.black,
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
  },
  termBox: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  regsterImage: {
    width: '100%',
    // height: 185,
    height: tab ? 370 : 185,
    marginBottom: -30,
    resizeMode: 'contain',
  },
  smBtn: {
    width: '49%',
    marginTop: 15,
  },
});
