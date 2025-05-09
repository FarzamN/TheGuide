import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  chatSendButton: {
    marginRight: 10,
    marginTop: 90,
    height: 50,
  },
  chatIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    height: 50,
  },
  chatIcon: {
    marginHorizontal: 5,
  },
  chatInputPrimary: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    marginHorizontal: 10,
    height: 50,
  },
  chatInputContainer: {
    borderTopWidth: 0,
    justifyContent: 'center',
  },
  chatBubbleWrapper: {
    left: {
      backgroundColor: '#f0f0f0',
    },
    right: {
      backgroundColor: '#007AFF',
    },
  },
  chatBubbleText: {
    right: {
      color: '#fff',
    },
    left: {
      color: '#000',
    },
  },
});
