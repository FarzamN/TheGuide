import {style} from '../style';
import {FlatList, View} from 'react-native';
import Header from './comp/header';
import React, {useState} from 'react';
import {Body, Empty, SearchBar} from '../../../components';
import PraySwitch from '../Prayer/prayComp/praySwitch';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {useSelector} from 'react-redux';
import InboxCard from './comp/InboxCard';
import FilterModal from './comp/filterModal';
import { useNavigation } from '@react-navigation/native';

const Inbox = () => {
    const {navigate} = useNavigation()
  const userDetail = useSelector(state => state.userDetails);
  const isGuest = userDetail === 'guest';

  const [search, setSearch] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [CTNSelect, setCTNSelect] = useState('Contact');

  const onRefresh = () => {
    if (!isGuest) {
      setRefresh(true);

      setRefresh(false);
    }
  };

  const [showSort, setShowSort] = useState(false);
  const [sortOption, setSortOption] = useState('');

  const handleSortSelect = option => {
    setSortOption(option);
    setShowSort(false);
  };

  const data = [
    {
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww',
      title: 'Mr Anderson',
      id: 10,
      lastMsg: 'he is a good developer',
      createdAt: '2025-02-27T17:17:52+05:00',
    },
    {
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww',
      title: 'Mr Anderson',
      id: 10,
      lastMsg: 'he is a good developer',
      createdAt: '2025-02-27T17:17:52+05:00',
    },
    {
      image:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fHww',
      title: 'Mr Anderson',
      id: 10,
      lastMsg: 'he is a good developer',
      createdAt: '2025-02-27T17:17:52+05:00',
    },
  ];
  return (
    <Body>
      <Header title="Inbox" onFilter={() => setShowSort(true)} />
      <SearchBar
        onChange={setSearch}
        value={search}
        onClose={() => setSearch('')}
      />
      <View style={[GlobalStyle.between, style.SwitchCont]}>
        {['Contact', 'Group', 'Topic'].map(i => (
          <PraySwitch
            key={i}
            title={i}
            focus={CTNSelect === i}
            onPress={() => setCTNSelect(i)}
          />
        ))}
      </View>
      <FlatList
        data={data}
        refreshing={refresh}
        onRefresh={onRefresh}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={style.listContainer}
        ListEmptyComponent={<Empty title={"You don't have any Contact"} />}
        renderItem={({item, index}) => <InboxCard data={item} index={index} onPress={() => navigate("chatScreen",{item})} />}
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
