import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {iOS, tab} from '../../utils/Constants';

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
    paddingHorizontal: tab ? 8 : 2,
    paddingVertical: tab ? 8 : 2,
    width: '90%',
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    borderColor: Color.lightgrey,
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

  // ---------- web view style
  closeBTN: {
    alignSelf: 'flex-end',
    zIndex: 1,
    position: 'absolute',
    borderRadius: 100,
    right: 10,
    top: iOS ? 40 : 10,
    backgroundColor: 'black',
    borderRadius: 100,
    width: 30,
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
