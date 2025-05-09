import {useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {
  Body,
  CrossIcon,
  Empty,
  Loader,
  NormalHeader,
  UserChatCard,
} from '../../../components';
import {
  add_user_to_group,
  get_group_contacts,
} from '../../../redux/actions/UserAction';
import {FlatList} from 'react-native-gesture-handler';
import {defaultProfileImage} from '../../../utils/Constants';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const AddUserGroup = ({route}) => {
  const {group_id} = route.params;
  const dispatch = useDispatch();
  const {goBack} = useNavigation();

  const [load, setLoad] = useState(false);
  const group_contacts_data = useSelector(state => state.group_contacts_data);

  useEffect(() => {
    dispatch(get_group_contacts(group_id, setLoad));
  }, []);

  return (
    <>
      <Body>
        <NormalHeader title="Add User to Group" />
        <FlatList
          data={group_contacts_data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={{paddingVertical: 10, paddingHorizontal: 20}}
          ListEmptyComponent={<Empty title={"You don't have any Contact"} />}
          renderItem={({item}) => (
            <UserChatCard
              btnTitle="Add"
              uri={defaultProfileImage}
              name={item?.contact_name}
              title="Add user to group"
              onPress={() =>
                dispatch(add_user_to_group(item.id, group_id, setLoad))
              }
            />
          )}
        />
      </Body>
      <Loader visible={load} />
    </>
  );
};

export default AddUserGroup;
