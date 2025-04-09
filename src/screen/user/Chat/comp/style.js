import {StyleSheet} from 'react-native';
import {Color} from '../../../../utils/Color';

export const style = StyleSheet.create({
  headerCont: {
    backgroundColor: Color.status,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconBox: {
    backgroundColor: Color.white,
    borderRadius: 50,
    width: 27,
    aspectRatio: 1 / 1,
  },
  headerText: {
    color: Color.white,
    fontSize: 20,
    fontWeight: '600',
  },

  inboxDP: {
    width: 60,
    height: 60,
    marginRight: 5,
  },
  title: {
    color: Color.black,
    fontSize: 16,
    fontWeight: '600',
  },

  lastMsg: {color: Color.grey, fontSize: 14, fontWeight: '500'},
  createdAt: {color: Color.grey, fontSize: 12, fontWeight: '500'},

  modalStyle: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    margin: 0,
    paddingRight: 10,
  },
  menuContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 150,
  },
  menuItem: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'space-between',
  },
  menuText: {
    fontSize: 18,
    color: '#333',
  },
  chatImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
    overflow: 'hidden',
  },
  ChatUploadImage: {
    width: 150,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 10,
  },

  ImageCloseButton: {
    // backgroundColor: 'red',
    position: 'absolute',
    zIndex: 9,
  },
  ImageCloseButtonBox: {
    width: 150,
    aspectRatio: 1 / 1,
    borderRadius: 100,
    alignSelf: 'center',
    marginTop: 10,
  },
});
