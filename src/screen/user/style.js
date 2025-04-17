import {StyleSheet} from 'react-native';
import {Color} from '../../utils/Color';
import {iOS, tab} from '../../utils/Constants';
import {Calendar} from 'react-native-calendars';

export const style = StyleSheet.create({
  listContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  card: {
    marginBottom: 10,
    borderRadius: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
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
    marginTop: 5,
    color: Color.white,
  },
  playButton: {
    width: 100,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: Color.white,
  },
  playText: {
    fontSize: 14,
    color: Color.black,
    fontWeight: 'bold',
  },

  // ------- Switch styles
  SwitchCont: {
    width: '90%',
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    borderColor: Color.lightgrey,
    paddingVertical: tab ? 8 : 2,
    paddingHorizontal: tab ? 8 : 2,
  },

  TimeChangeCont: {
    height: 50,
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    alignSelf: 'center',
    borderColor: Color.lightgrey,
  },
  timeChangeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  // ---------- web view style
  closeBTN: {
    zIndex: 1,
    right: 10,
    width: tab ? 40 : 30,
    borderRadius: 100,
    borderRadius: 100,

    aspectRatio: 1 / 1,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: 'black',
    justifyContent: 'center',
  },

  CalendarTheme: {
    arrowColor: Color.white,
    monthTextColor: Color.white,
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  },
  CalendarIcon: {
    position: 'relative',
    marginVertical: 10,
    marginHorizontal: 15,
  },
});
