import {StyleSheet} from 'react-native';
import {tab, width} from '../../../utils/Constants';
import {Color} from '../../../utils/Color';

export const style = StyleSheet.create({
  videoPlayer: {
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'center',
    height: tab ? 250 : 200,
    width: tab ? width - 100 : width - 30,
  },
  GameTitle: {
    marginTop: 10,
    color: '#5D5F6B',
    fontWeight: '600',
    fontSize: tab ? 30 : 22,
  },
  GameSubText: {
    fontSize: 16,
    marginTop: 10,
    color: Color.Sky,
    fontWeight: '500',
    textAlign: 'right',
  },
  errorText: {
    color: 'red',
  },
});
