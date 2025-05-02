import {useDispatch, useSelector} from 'react-redux';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
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
import {get_group_chat} from '../../../redux/actions/UserAction';

const GroupChatScreen = ({navigation, route}) => {
  const {item} = route.params;
  const dispatch = useDispatch();
  const {getParent, navigate} = navigation;

  const data = useSelector(state => state.get_group_message);
  const {requestGalleryPermission, requestVideoPermission, video, image} =
    useImagePicker();

  const [messages, setMessages] = useState([]);
  const [currentUser] = useState({
    _id: 22, // This should be your actual current user ID
    name: 'You',
    avatar: defaultProfileImage,
  });

  // Format API messages to GiftedChat format
  const formatMessages = useCallback(
    apiMessages => {
      if (!apiMessages || !Array.isArray(apiMessages)) return [];
      console.log(
        'apiMessages',
        apiMessages.map(item => console.log('item', item)),
      );

      return apiMessages
        .map(message => {
          const isCurrentUser = message.sender_id === currentUser._id;
          const senderName = isCurrentUser
            ? 'You'
            : message.sender
            ? `${message.sender.first_name} ${
                message.sender.last_name || ''
              }`.trim()
            : 'Unknown';

          return {
            _id: message.id,
            text: message.message,
            createdAt: new Date(message.created_at),
            user: {
              _id: message.sender_id,
              name: senderName,
              avatar: message.sender?.image || defaultProfileImage,
            },
            image: message.image,
            video: null, // Add if you have video in API
            audio: message.audio,
            sent: false,
            // received: true,
            // seen: true,
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
      // dispatch(upload_group_image({group_id: item.group_id, image: image.uri}));
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
      // dispatch(upload_group_video({group_id: item.group_id, video: video.uri}));
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
      // dispatch(
      //   send_group_message({
      //     group_id: item.group_id,
      //     message: message.text,
      //     sender_id: currentUser._id,
      //   }),
      // );
    },
    [item.group_id, currentUser._id, dispatch],
  );

  // Load group chat on mount
  useEffect(() => {
    dispatch(get_group_chat(item.group_id));
  }, [item.group_id, dispatch]);

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
        isGroup
        onAdd={() => navigate('addUserGroup', {group_id: item.group_id})}
        title={item.group_name}
        source={{uri: item.group_image || defaultProfileImage}}
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

{
  /*
const styles = StyleSheet.create({
  chatBubbleWrapper: {
    padding: 8,
    borderRadius: 12,
  },
  currentUserBubble: {
    backgroundColor: '#DCF8C6', // Light green for current user
    marginRight: 8,
  },
  otherUserBubble: {
    backgroundColor: '#ECECEC', // Light gray for other users
    marginLeft: 8,
  },
  chatBubbleText: {
    fontSize: 16,
  },
  currentUserText: {
    color: '#000',
  },
  otherUserText: {
    color: '#000',
  },
  chatInputPrimary: {
    alignItems: 'center',
  },
  chatInputContainer: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    padding: 8,
  },
  chatIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  chatIcon: {
    marginHorizontal: 8,
  },
  chatSendButton: {
    marginRight: 8,
    marginBottom: 4,
  },
});
 */
}

export default GroupChatScreen;
