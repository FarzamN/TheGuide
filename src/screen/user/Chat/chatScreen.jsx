import {useDispatch, useSelector} from 'react-redux';
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
import {
  get_contacts_chat,
  send_contacts_message,
} from '../../../redux/actions/UserAction';
import {defaultProfileImage, iOS} from '../../../utils/Constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ChatScreen = ({navigation, route}) => {
  const {item} = route.params;
  const {getParent} = navigation;
  const dispatch = useDispatch();
  const {bottom} = useSafeAreaInsets();

  const userdetail = useSelector(state => state.userDetails);
  const data = useSelector(state => state.get_contacts_message);
  const [receiver_id, setReceiver_id] = useState(null);

  console.log('data', data);

  const {requestGalleryPermission, requestVideoPermission, video, image} =
    useImagePicker();

  const [messages, setMessages] = useState([]);

  // Convert API data to GiftedChat format
  useEffect(() => {
    if (data) {
      const formattedMessages = formatMessages(data);
      setMessages(formattedMessages);

      // Set receiver_id from the first message
      const allMessages = Object.values(data).flat();
      if (allMessages.length > 0) {
        setReceiver_id(allMessages[0].contact_id);
      }
    }
  }, [data, formatMessages]);

  const formatMessages = useCallback(
    apiData => {
      if (!apiData) return [];

      const formattedMessages = [];

      // Loop through each date in the API data
      Object.keys(apiData).forEach(date => {
        apiData[date].forEach(message => {
          formattedMessages.push({
            _id: message.id,
            text: message.message,
            createdAt: new Date(message.created_at),
            user: {
              _id: message.sender_id,
              name:
                sender_id === userdetail.user_id ? 'You' : item.contact_name,
              avatar: sender_id === userdetail.user_id ? null : item.image,
            },
            image: message.image,
            video: null, // Add if you have video in API
            audio: message.audio,
            sent: true,
            received: true,
            seen: message.seen,
          });
        });
      });

      // Sort messages by date (newest first)
      return formattedMessages.sort((a, b) => b.createdAt - a.createdAt);
    },
    [item],
  );

  useEffect(() => {
    if (data) {
      const formattedMessages = formatMessages(data);
      setMessages(formattedMessages);
    }
  }, [data, formatMessages]);

  useEffect(() => {
    if (image) {
      const imageMessage = {
        _id: Math.random().toString(),
        createdAt: new Date(),
        user: {
          _id: 1, // Assuming 1 is the current user
          name: 'You',
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

  // const onSend = useCallback((newMessages = []) => {
  //   setMessages(previousMessages =>
  //     GiftedChat.append(previousMessages, newMessages),
  //   );

  //   // Here you would typically send the message to your API
  //   // For example:

  //   const message = newMessages[0].text;
  //   dispatch(send_contacts_message(item, receiver_id, message));
  // }, []);
  const onSend = useCallback(
    newMessages => {
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, newMessages),
      );

      // Here you would typically send the message to your API
      // For example:
      const message = newMessages[0].text;
      dispatch(send_contacts_message(item, receiver_id, message));
    },
    [receiver_id],
  );

  useEffect(() => {
    dispatch(get_contacts_chat(item.id, item.contact_id));
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
      <Header
        title={item.contact_name}
        isChat
        source={{uri: item.image || defaultProfileImage}}
      />
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1, // This should match your current user's ID
        }}
        renderBubble={props => (
          <Bubble
            {...props}
            textStyle={styles.chatBubbleText}
            wrapperStyle={styles.chatBubbleWrapper}
          />
        )}
        renderInputToolbar={props => (
          <InputToolbar
            {...props}
            textInputStyle={{color: '#000'}}
            primaryStyle={styles.chatInputPrimary}
            containerStyle={[
              styles.chatInputContainer,
              {
                // backgroundColor: 'red',
                marginBottom: bottom,
              },
            ]}
          />
        )}
        renderMessageVideo={props => {
          return (
            <View style={{width: 200, height: 200}}>
              <Video
                paused
                controls
                resizeMode="cover"
                style={GlobalStyle.full}
                source={{uri: props.currentMessage.video}}
              />
            </View>
          );
        }}
        renderSend={props => {
          if (props.text.trim().length === 0) {
            return (
              <View style={styles.chatIconContainer}>
                {[
                  {
                    icon: 'photo',
                    type: 'FontAwesome',
                    onPress: requestGalleryPermission,
                  },
                  {
                    icon: 'videocam',
                    type: 'Ionicons',
                    onPress: requestVideoPermission,
                  },
                ].map((item, index) => (
                  <Icon
                    size={20}
                    key={index}
                    color="#007AFF"
                    name={item.icon}
                    type={item.type}
                    onPress={item.onPress}
                    style={styles.chatIcon}
                  />
                ))}
              </View>
            );
          }

          return (
            <Send {...props}>
              <Icon
                size={22}
                name="send"
                type="Ionicons"
                color="#007AFF"
                style={styles.chatSendButton}
              />
            </Send>
          );
        }}
      />
    </Body>
  );
};

export default ChatScreen;
