// const {item} = route.params;
// const dispatch = useDispatch();
//
// console.log('data', data);
// useEffect(() => {
//   dispatch(get_topic_chat(item.));
// }, []);

import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useImagePicker} from '../../../hooks';
import {Bubble, GiftedChat, InputToolbar, Send} from 'react-native-gifted-chat';
import {get_topic_chat} from '../../../redux/actions/UserAction';
import {useFocusEffect} from '@react-navigation/native';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {defaultProfileImage} from '../../../utils/Constants';
import {Body} from '../../../components';
import Header from './comp/header';
import {styles} from './chatStyle';
import {View} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-dynamic-vector-icons';

const TopicChatScreen = ({navigation, route}) => {
  const {item} = route.params;
  const dispatch = useDispatch();
  const {getParent} = navigation;

  const data = useSelector(state => state.get_topic_message);
  const {requestGalleryPermission, requestVideoPermission, video, image} =
    useImagePicker();

  const [messages, setMessages] = useState([]);
  const [currentUser] = useState({
    _id: 22, // This should be your actual current user ID (matches sender_id in your data)
    name: 'You',
    avatar: defaultProfileImage,
  });

  // Format API messages to GiftedChat format
  const formatMessages = useCallback(
    apiMessages => {
      if (!apiMessages || !Array.isArray(apiMessages)) return [];

      return apiMessages
        .map(message => {
          const isCurrentUser = message.sender_id === currentUser._id;
          const senderName = isCurrentUser
            ? 'You'
            : message.user
            ? message.user.full_name ||
              `${message.user.first_name} ${
                message.user.last_name || ''
              }`.trim()
            : 'Unknown';

          return {
            _id: message.id,
            text: message.message,
            createdAt: new Date(message.created_at),
            user: {
              _id: message.sender_id,
              name: senderName,
              avatar: message.user?.image || defaultProfileImage,
            },
            image: message.image,
            video: null, // Add if you have video in API
            audio: message.audio,
            sent: true,
            received: true,
            seen: message.seen,
          };
        })
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by date (newest first)
    },
    [currentUser._id],
  );

  // Load messages when data changes
  useEffect(() => {
    if (data) {
      const formattedMessages = formatMessages(data);
      setMessages(formattedMessages);
    }
  }, [data, formatMessages]);

  // Handle image messages
  useEffect(() => {
    if (image) {
      const imageMessage = {
        _id: Math.random().toString(),
        createdAt: new Date(),
        user: currentUser,
        image: image.uri,
      };
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [imageMessage]),
      );

      // Here you would typically upload the image to your API
      // dispatch(upload_topic_image({topic_id: item.topic_id, image: image.uri}));
    }
  }, [image, currentUser]);

  // Handle video messages
  useEffect(() => {
    if (video) {
      const videoMessage = {
        _id: Math.random().toString(),
        createdAt: new Date(),
        user: currentUser,
        video: video.uri,
      };
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [videoMessage]),
      );

      // Here you would typically upload the video to your API
      // dispatch(upload_topic_video({topic_id: item.topic_id, video: video.uri}));
    }
  }, [video, currentUser]);

  // Send text messages
  const onSend = useCallback(
    (newMessages = []) => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, newMessages),
      );

      // Send message to API
      const message = newMessages[0];
      dispatch(
        send_topic_message({
          topic_id: item.topic_id,
          message: message.text,
          sender_id: currentUser._id,
        }),
      );
    },
    [item.topic_id, currentUser._id, dispatch],
  );

  // Load topic chat on mount
  useEffect(() => {
    dispatch(get_topic_chat(item.topic_id));
  }, [item.topic_id, dispatch]);

  // Hide tab bar when screen is focused
  useFocusEffect(
    useCallback(() => {
      getParent().setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );

  return (
    <Body>
      <Header
        title={item.topic_name}
        source={{uri: item.topic_image || defaultProfileImage}}
      />

      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={currentUser}
        renderUsernameOnMessage
        showUserAvatar
        renderBubble={props => (
          <Bubble
            {...props}
            wrapperStyle={[
              styles.chatBubbleWrapper,
              props.isCurrentUser
                ? styles.currentUserBubble
                : styles.otherUserBubble,
            ]}
            textStyle={[
              styles.chatBubbleText,
              props.isCurrentUser
                ? styles.currentUserText
                : styles.otherUserText,
            ]}
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
          <View style={{width: 200, height: 200}}>
            <Video
              source={{uri: props.currentMessage.video}}
              style={{width: '100%', height: '100%'}}
              controls={true}
              resizeMode="cover"
              paused={true}
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
export default TopicChatScreen;
