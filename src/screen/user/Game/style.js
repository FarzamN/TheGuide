import {StyleSheet} from 'react-native';
import {width} from '../../../utils/Constants';
import {Font} from '../../../utils/Font';
import {Color} from '../../../utils/Color';

export const style = StyleSheet.create({
  videoPlayer: {
    width: width - 30,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  GameTitle: {
    fontSize: 22,
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
