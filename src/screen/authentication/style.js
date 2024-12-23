import {Font} from '../../utils/Font';
import {StyleSheet} from 'react-native';
import {iOS, width} from '../../utils/Constants';
import {Color} from '../../utils/Color';

export const style = StyleSheet.create({
  forget: {
    fontSize: 16,
    marginTop: 10,
    color: '#ABABAD',
    marginHorizontal: 5,
    fontFamily: Font.font400,
  },
  alreadyBox: {
    height: 50,
    marginTop: 20,
  },
  already: {
    fontSize: 14,
    color: '#ABABAD',
    fontFamily: Font.font400,
    textDecorationLine: 'underline',
  },
  loginImage: {
    width: '100%',
    height: iOS ? 250 : 180,
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
    fontFamily: Font.font700,
    marginBottom: 10,
  },
  termBox: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  regsterImage: {
    width: '100%',
    height: 185,
    marginBottom: -30,
    resizeMode: 'contain',
  },
  smBtn: {
    width: '49%',
    marginTop: 15,
  },
});

const DeliveryCheck = name => {
  if (name === 'sameday') {
    setSelectedDeliveryOption(prev => {
      if (prev === name) {
        setCheck({sameday: false, nextday: false, priority: false});
        return null;
      }
      setCheck({sameday: true, nextday: false, priority: false});
      return name;
    });
  } else if (name === 'nextday') {
    setSelectedDeliveryOption(prev => {
      if (prev === name) {
        setCheck({sameday: false, nextday: false, priority: false});
        return null;
      }
      setCheck({sameday: false, nextday: true, priority: false});
      return name;
    });
  } else if (name === 'priority') {
    setSelectedDeliveryOption(prev => {
      if (prev === name) {
        setCheck({sameday: false, nextday: false, priority: false});
        return null;
      }
      setCheck({sameday: false, nextday: false, priority: true});
      return name;
    });
  }
};
