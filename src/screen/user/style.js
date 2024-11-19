import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';

export const style = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  card: {
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  iconWrapper: {
    marginRight: 15,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  textWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Color.white,
  },
  subtitle: {
    fontSize: 14,
    color: Color.white,
    marginTop: 5,
  },
  playButton: {
    backgroundColor: Color.white,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    width: 100,
  },
  playText: {
    fontSize: 14,
    color: Color.black,
    fontWeight: 'bold',
  },

  // ------- Switch styles
  SwitchCont: {
    borderWidth: 1,
    borderColor: Color.lightgrey,
    borderRadius: 10,
    width: '90%',
    marginTop: 15,
    padding: 2,
    alignSelf: 'center',
  },

  TimeChangeCont: {
    borderRadius: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: Color.lightgrey,
    width: '90%',
    alignSelf: 'center',
    height: 50,
  },
  timeChangeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
