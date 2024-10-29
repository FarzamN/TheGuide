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

  // ---------------------
  AssigmentListContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  AssigmentCard: {
    borderRadius: 20,
    paddingVertical: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  AssigmentIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  AssigmentTextWrapper: {
    flex: 1,
    alignItems: 'flex-end',
  },
  AssigmentTitle: {
    fontSize: 22,
    fontFamily: Font.font700,
    color: Color.white,
  },
  AssigmentSubtitle: {
    fontSize: 14,
    color: Color.white,
    marginBottom: 5,
    fontFamily: Font.font600,
    textAlign: 'right',
  },
  AssigmentPlayButton: {
    backgroundColor: Color.white,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 20,
    width: 100,
  },
  AssigmentPlayText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },

  //  Status Card design

  height: {height: 65},
  StatusCardComp: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
  },
  firstBox: {
    width: '20%',
    borderRightWidth: 1,
    borderColor: '#fff',
  },
  centerBox: {
    width: '60%',
    height: 50,
  },
  Progress: {
    borderWidth: 1,
    borderColor: '#fff',
    width: '80%',
    height: 10,
    borderRadius: 20,
    marginTop: 5,
  },
  ProgressValue: {
    height: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  Text: {
    color: '#fff',
    fontSize: 17,
    fontFamily: Font.font600,
  },
  secBox: {
    width: '20%',
    borderLeftWidth: 1,
    borderColor: '#fff',
  },
});
