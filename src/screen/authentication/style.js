import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {iOS, tab} from '../../utils/Constants';

export const style = StyleSheet.create({
  guestText: {color: Color.white, fontSize: tab ? 18 : 14, fontWeight: '600'},
  guestBtn: {
    borderRadius: 50,
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: 'grey',
    justifyContent: 'center',
    paddingVertical: tab ? 8 :10,
    paddingHorizontal:tab ? 18 : 25,
  },
  forget: {
    fontSize: 16,
    marginTop: 10,
    color: '#ABABAD',
    fontWeight: '400',
    marginHorizontal: 5,
  },
  alreadyBox: {
    height: 50,
    marginTop: 20,
  },
  already: {
    color: '#ABABAD',
    fontWeight: '400',
    fontSize: tab ? 18 : 14,
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
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '700',
    color: Color.black,
  },
  termBox: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  regsterImage: {
    width: '100%',
    marginBottom: -30,
    resizeMode: 'contain',
    height: tab ? 370 : 185,
  },
  smBtn: {
    width: '49%',
    marginTop: 15,
  },
});
