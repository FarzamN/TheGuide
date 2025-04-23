import React, {useCallback, useEffect, useState} from 'react';
import {View} from 'react-native';
import {GiftedChat, Bubble, InputToolbar, Send} from 'react-native-gifted-chat';
import {Body} from '../../../components';
import Header from './comp/header';
import Icon from 'react-native-dynamic-vector-icons';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import {useImagePicker} from '../../../hooks';
import Video from 'react-native-video';
import {styles} from './chatStyle';
import {defaultProfileImage} from '../../../utils/Constants';

const GroupChatScreen = ({navigation, route}) => {
  const {item} = route.params;
  const {getParent, navigate} = navigation;
  const {requestGalleryPermission, requestVideoPermission, video, image} =
    useImagePicker();

  const [showUserAdd, setShowUserAdd] = useState(false);
  const [messages, setMessages] = useState([
    {
      _id: 1,
      text: 'Hello!',
      createdAt: new Date(),
      user: {
        _id: 1,
        name: 'Yaldaram',
        avatar: defaultProfileImage,
      },
    },

    {
      _id: 2,
      text: 'Hello world!',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Noor',
        avatar: defaultProfileImage,
      },
    },

    {
      _id: 3,
      text: 'user is 3!',
      createdAt: new Date(),
      user: {
        _id: 5,
        name: 'Farzam',
        avatar: defaultProfileImage,
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
  const currentUser = {
    _id: 1,
    name: 'Yaldaram',
    avatar: defaultProfileImage,
  };

  return (
    <Body>
      <Header
        isGroup
        onAdd={() => navigate('addUserGroup', {group_id: item.group_id})}
        title={item.group_name}
        source={{uri: defaultProfileImage}}
      />
      <GiftedChat
        renderUsernameOnMessage
        messages={messages}
        onSend={messages => onSend(messages)}
        user={currentUser}
        renderBubble={props => (
          <Bubble
            {...props}
            wrapperStyle={styles.chatBubbleWrapper}
            textStyle={styles.chatBubbleText}
          />
        )}
        renderInputToolbar={props => (
          <InputToolbar
            {...props}
            textInputStyle={{color: '#000'}}
            primaryStyle={styles.chatInputPrimary}
            containerStyle={styles.chatInputContainer}
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
              <View style={styles.chatIconContainer}>
                <Icon
                  onPress={requestGalleryPermission}
                  type="FontAwesome"
                  name="photo"
                  size={20}
                  color="#007AFF"
                  style={styles.chatIcon}
                />
                <Icon
                  onPress={requestVideoPermission}
                  type="Ionicons"
                  name="videocam"
                  size={24}
                  color="#007AFF"
                  style={styles.chatIcon}
                />
              </View>
            );
          }

          return (
            <Send {...props}>
              <View style={styles.chatSendButton}>
                <Icon type="Ionicons" name="send" size={22} color="#007AFF" />
              </View>
            </Send>
          );
        }}
      />
    </Body>
  );
};

export default GroupChatScreen;
