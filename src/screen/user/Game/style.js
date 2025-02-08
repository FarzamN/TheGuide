import {StyleSheet} from 'react-native';
import {tab, width} from '../../../utils/Constants';
import {Font} from '../../../utils/Font';
import {Color} from '../../../utils/Color';

export const style = StyleSheet.create({
  videoPlayer: {
    width: width - 30,
    height: tab ? 250 :  200,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  GameTitle: {
    fontSize: tab ?30 :22,
    color: '#5D5F6B',
    fontWeight: '600',
    marginTop: 10,
  },
  GameSubText: {
    fontSize: 16,
    color: Color.Sky,
    fontWeight: '500',
    marginTop: 10,
    textAlign: 'right',
  },
  errorText: {
    color: 'red',
  },
});
