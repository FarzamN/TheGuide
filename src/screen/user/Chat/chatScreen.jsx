import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {GiftedChat, Bubble, InputToolbar, Send} from 'react-native-gifted-chat';
import {Body} from '../../../components';
import Header from './comp/header';
import Icon from 'react-native-dynamic-vector-icons';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import {useImagePicker} from '../../../hooks';
import Video from 'react-native-video';

const ChatScreen = ({navigation, route}) => {
  const {getParent} = navigation;
  const {item} = route.params;

  const {requestGalleryPermission, requestVideoPermission, video, image} =
    useImagePicker();

  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello!',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: item.title,
        avatar: item.image,
      },
    },
  ]);

  useEffect(() => {
    if (image) {
      const imageMessage = {
        _id: Math.random().toString(),
        createdAt: new Date(),
        user: {
          _id: 1,
        },
        image: image.uri,
      };
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [imageMessage]),
      );
    }
  }, [image]);

  useEffect(() => {
    if (video) {
      const videoMessage = {
        _id: Math.random().toString(),
        createdAt: new Date(),
        user: {
          _id: 1,
        },
        video: video.uri,
      };
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [videoMessage]),
      );
    }
  }, [video]);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  useFocusEffect(
    useCallback(() => {
      getParent().setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );
  return (
    <Body>
      <Header title={item.title} isChat source={{uri: item.image}} />
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={props => (
          <Bubble
            {...props}
            wrapperStyle={styles.bubbleWrapper}
            textStyle={styles.bubbleText}
          />
        )}
        renderInputToolbar={props => (
          <InputToolbar
            {...props}
            textInputStyle={{color: '#000'}}
            primaryStyle={styles.InputPrimary}
            containerStyle={styles.InputContainer}
          />
        )}
        renderMessageVideo={props => (
          <View
            style={{
              width: 200,
              height: 200,
            }}>
            <Video
              source={{uri: video.uri}}
              style={{width: '100%', height: '100%'}}
              controls={true}
              resizeMode="cover"
              paused={true} // Autoplay off
            />
          </View>
        )}
        renderSend={props => {
          if (props.text.trim().length === 0) {
            return (
              <View style={styles.iconContainer}>
                <Icon
                  onPress={requestGalleryPermission}
                  type="FontAwesome"
                  name="photo"
                  size={20}
                  color="#007AFF"
                  style={styles.icon}
                />
                <Icon
                  onPress={requestVideoPermission}
                  type="Ionicons"
                  name="videocam"
                  size={24}
                  color="#007AFF"
                  style={styles.icon}
                />
              </View>
            );
          }

          return (
            <Send {...props}>
              <View style={styles.sendButton}>
                <Icon type="Ionicons" name="send" size={22} color="#007AFF" />
              </View>
            </Send>
          );
        }}
      />
    </Body>
  );
};

const styles = StyleSheet.create({
  sendButton: {
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    height: '100%',
  },
  icon: {
    marginHorizontal: 5,
  },
  InputPrimary: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    marginHorizontal: 10,
  },
  InputContainer: {
    borderTopWidth: 0,
    justifyContent: 'center',
  },
  bubbleWrapper: {
    left: {
      backgroundColor: '#f0f0f0',
    },
    right: {
      backgroundColor: '#007AFF',
    },
  },
  bubbleText: {
    right: {
      color: '#fff',
    },
    left: {
      color: '#000',
    },
  },
});

export default ChatScreen;
