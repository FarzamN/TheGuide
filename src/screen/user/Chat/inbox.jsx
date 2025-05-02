import {style} from '../style';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import ShowNote from '../Note/showNote';
import InboxCard from './comp/InboxCard';
import {FlatList, View} from 'react-native';

import {tab} from '../../../utils/Constants';
import PrayPopup from './comp/chatPopups/PrayPopup';
import TopicPopup from './comp/chatPopups/TopicPopup';
import GroupPopup from './comp/chatPopups/GroupPopup';
import PraySwitch from '../Prayer/prayComp/praySwitch';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import ContactPopup from './comp/chatPopups/ContactPopup';
import React, {useCallback, useEffect, useState} from 'react';

import {
  Body,
  Empty,
  Plusbox,
  TopicCard,
  IndexHeader,
  FilterModal,
  PrayerInboxCard,
  GroupInboxCard,
} from '../../../components';
import {
  get_group,
  get_topic,
  get_contacts,
} from '../../../redux/actions/UserAction';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const Inbox = () => {
  const dispatch = useDispatch();
  const {navigate, getParent} = useNavigation();
  const userDetail = useSelector(state => state.userDetails);
  const isGuest = userDetail === 'guest';

  const chatInboxData = useSelector(state => state.chat_contacts_data);
  const chat_group_data = useSelector(state => state.chat_group_data);
  const chat_topic_data = useSelector(state => state.chat_topic_data);

  const [search, setSearch] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [CTNSelect, setCTNSelect] = useState('Contacts');

  const [activePopup, setActivePopup] = useState(null);

  const onRefresh = () => {
    if (!isGuest) {
      setRefresh(true);
      dispatch(get_contacts());
      dispatch(get_group());
      dispatch(get_topic());

      setRefresh(false);
    }
  };

  const [showSort, setShowSort] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [filterData, setFilterData] = useState(chatInboxData);

  const handleSortSelect = option => {
    setSortOption(option);
    setShowSort(false);
  };

  const handleSearch = e => {
    setSearch(e);
    if (search.length > 0) {
      const filteredData = chatInboxData.filter(item =>
        item.contact_name.toLowerCase().includes(search.toLowerCase()),
      );
      setFilterData(filteredData);
    } else {
      setFilterData(chatInboxData);
    }
  };

  useEffect(() => {
    dispatch(get_contacts());
    dispatch(get_group());
    dispatch(get_topic());
  }, []);

  useFocusEffect(
    useCallback(() => {
      getParent().setOptions({
        tabBarStyle: GlobalStyle.showBar,
      });
    }, []),
  );
  return (
    <Body>
      <IndexHeader
        onChange={handleSearch}
        value={search}
        onClose={() => setSearch('')}>
        <View
          style={[
            GlobalStyle.between,
            style.SwitchCont,
            {backgroundColor: '#fff', height: 50},
          ]}>
          {['Contacts', 'Groups', 'Topics', 'Prayer', 'Notes'].map(i => (
            <PraySwitch
              key={i}
              title={i}
              focus={CTNSelect === i}
              onPress={() => setCTNSelect(i)}
              styles={{height: tab ? 50 : 32}}
            />
          ))}
        </View>
      </IndexHeader>
      {CTNSelect === 'Contacts' && (
        <FlatList
          data={chatInboxData}
          refreshing={refresh}
          onRefresh={onRefresh}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={style.listContainer}
          ListEmptyComponent={<Empty title={"You don't have any Contact"} />}
          renderItem={({item, index}) => (
            <InboxCard
              data={item}
              index={index}
              onPress={() => navigate('chatScreen', {item})}
            />
          )}
        />
      )}

      {CTNSelect === 'Groups' && (
        <FlatList
          data={chat_group_data}
          refreshing={refresh}
          onRefresh={onRefresh}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={style.listContainer}
          ListEmptyComponent={<Empty title={"You don't have any Groups"} />}
          renderItem={({item, index}) => {
            return (
              <GroupInboxCard
                data={item}
                index={index}
                onPrayPress={() => navigate('prayForOther', {item})}
                onPress={() => navigate('groupChatScreen', {item})}
              />
            );
          }}
        />
      )}

      {CTNSelect === 'Topics' && (
        <FlatList
          data={chat_topic_data}
          refreshing={refresh}
          onRefresh={onRefresh}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={style.listContainer}
          ListEmptyComponent={<Empty title={"You don't have any Topics"} />}
          renderItem={({item, index}) => (
            <TopicCard
              data={item}
              index={index}
              onPress={() => navigate('topicChatScreen', {item})}
            />
          )}
        />
      )}

      {CTNSelect === 'Prayer' && (
        <FlatList
          data={filterData}
          refreshing={refresh}
          onRefresh={onRefresh}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={style.listContainer}
          ListEmptyComponent={<Empty title={"You don't have any Contact"} />}
          renderItem={({item, index}) => (
            <PrayerInboxCard
              data={item}
              index={index}
              onPress={() => navigate('chatScreen', {item})}
            />
          )}
        />
      )}

      {CTNSelect === 'Notes' && <ShowNote />}

      {CTNSelect !== 'Notes' && (
        <Plusbox
          onPress={() => {
            if (
              ['Contacts', 'Topics', 'Groups', 'Prayer'].includes(CTNSelect)
            ) {
              setActivePopup(CTNSelect);
            }
          }}
        />
      )}

      <ContactPopup
        visible={activePopup === 'Contacts'}
        onClose={() => setActivePopup(null)}
      />
      <GroupPopup
        visible={activePopup === 'Groups'}
        onClose={() => setActivePopup(null)}
      />
      <TopicPopup
        visible={activePopup === 'Topics'}
        onClose={() => setActivePopup(null)}
      />

      <PrayPopup
        visible={activePopup === 'Prayer'}
        onClose={() => setActivePopup(null)}
      />

      <FilterModal
        visible={showSort}
        selectedSort={sortOption}
        onSortSelect={handleSortSelect}
        onClose={() => setShowSort(false)}
      />
    </Body>
  );
};

export default Inbox;
