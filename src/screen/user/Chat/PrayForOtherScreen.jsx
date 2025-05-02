import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {View, FlatList} from 'react-native';
import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import Modal from 'react-native-modal';
import {
  Body,
  CrossIcon,
  Empty,
  NormalHeader,
  Text,
  UserChatCard,
} from '../../../components';
import style from '../../../components/Modal/style';
import {useDispatch, useSelector} from 'react-redux';
import {
  prayer_for_member,
  prayer_popup_group_member,
} from '../../../redux/actions/UserAction';
import {GlobalStyle} from '../../../utils/GlobalStyle';

const PrayForOtherScreen = ({route}) => {
  const {item} = route.params;
  const {goBack, getParent} = useNavigation();
  const dispatch = useDispatch();

  const data = useSelector(state => state.prayer_popup_group_data);
  console.log('data', data);
  const [isPending, setIsPending] = useState(true);
  const [prayedUserIds, setPrayedUserIds] = useState([]);

  const handlePray = () => {
    dispatch(prayer_for_member(item.group_id, item.user.id, setIsPending));
    setPrayedUserIds(prev => [...prev, item.user.id]);
  };

  useEffect(() => {
    dispatch(prayer_popup_group_member(item.group_id, setIsPending));
  }, []);

  // useEffect(() => {
  //   data.
  // }, [])

  useFocusEffect(
    useCallback(() => {
      getParent().setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );
  return (
    <Body>
      <NormalHeader title={`Pray for ${item.group_name}`} />
      <View style={[style.RequestContainer]}>
        {isPending ? (
          <Text center title={'Please wait'} />
        ) : (
          <FlatList
            data={data}
            zoomScale={2}
            bounces={true}
            ListEmptyComponent={<Empty />}
            renderItem={({item: ele}) => {
              const isPrayed = true;
              return (
                <UserChatCard
                  btnTitle={isPrayed ? 'Pray' : 'Prayed'}
                  name={ele?.user?.full_name}
                  title={`Please Pray for ${ele?.user?.full_name}`}
                  onPress={handlePray}
                />
              );
            }}
          />
        )}
      </View>
    </Body>
  );
};

export default PrayForOtherScreen;
