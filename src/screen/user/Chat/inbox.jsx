import {useDispatch} from 'react-redux';
import {style} from '../style';
import {FlatList, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Body, Empty, Plusbox} from '../../../components';
import PraySwitch from '../Prayer/prayComp/praySwitch';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {useSelector} from 'react-redux';
import InboxCard from './comp/InboxCard';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import FilterModal from './comp/filterModal';
import IndexHeader from './comp/indexHeader';
import {tab} from '../../../utils/Constants';
// import {chatInboxData} from '../../../utils/Data';
import ShowNote from '../Note/showNote';
import GroupPopup from './comp/chatPopups/GroupPopup';
import TopicPopup from './comp/chatPopups/TopicPopup';
import PrayPopup from './comp/chatPopups/PrayPopup';
import ContactPopup from './comp/chatPopups/ContactPopup';
import PrayerInboxCard from './comp/PrayerInboxCard';
import GroupInboxCard from './comp/GroupInboxCard';
import {get_contacts} from '../../../redux/actions/UserAction';

const Inbox = () => {
  const dispatch = useDispatch();
  const {navigate, getParent} = useNavigation();
  const userDetail = useSelector(state => state.userDetails);
  const isGuest = userDetail === 'guest';

  const chatInboxData = useSelector(state => state.chat_contacts_data);
  console.log('chatInboxData', chatInboxData);
  const [search, setSearch] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [CTNSelect, setCTNSelect] = useState('Contacts');

  const [activePopup, setActivePopup] = useState(null);

  const onRefresh = () => {
    if (!isGuest) {
      setRefresh(true);
      dispatch(get_contacts());

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
        item.title.toLowerCase().includes(search.toLowerCase()),
      );
      setFilterData(filteredData);
    } else {
      setFilterData(chatInboxData);
    }
  };

  useEffect(() => {
    dispatch(get_contacts());
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
          data={filterData}
          refreshing={refresh}
          onRefresh={onRefresh}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          contentContainerStyle={style.listContainer}
          ListEmptyComponent={<Empty title={"You don't have any Contact"} />}
          renderItem={({item, index}) => (
            <GroupInboxCard
              data={item}
              index={index}
              onPress={() => navigate('chatScreen', {item})}
            />
          )}
        />
      )}

      {CTNSelect === 'Topics' && (
        <FlatList
          data={filterData}
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
