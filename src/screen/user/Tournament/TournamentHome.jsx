import {View, Text, FlatList} from 'react-native';
import React, {useCallback, useState} from 'react';
import {
  Body,
  Empty,
  TournamentCard,
  TournamentModal,
} from '../../../components';
import EventHeader from '../../../components/Header/eventHeader';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import {style as switchStyle} from '../style';
import PraySwitch from '../Prayer/prayComp/praySwitch';
import {tab} from '../../../utils/Constants';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const TournamentHome = () => {
  const {getParent, navigate} = useNavigation();

  const [showtournamentPopup, setTournamentPopup] = useState(false);
  const [tabSelect, setTabSelect] = useState('new');
  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 2000);
  };
  useFocusEffect(
    useCallback(() => {
      getParent().setOptions({
        tabBarStyle: GlobalStyle.showBar,
      });
    }, []),
  );

  return (
    <Body>
      <EventHeader title="Tournament" notFirst>
        <View
          style={[
            GlobalStyle.between,
            switchStyle.SwitchCont,
            {
              height: 50,
              backgroundColor: '#fff',
              justifyContent: 'space-around',
            },
          ]}>
          {['new', 'Pervious', 'Leaderboard'].map(i => (
            <PraySwitch
              key={i}
              title={i}
              focus={tabSelect === i}
              onPress={() => setTabSelect(i)}
              styles={{height: tab ? 50 : 32}}
            />
          ))}
        </View>
      </EventHeader>

      <FlatList
        data={[1, 2]}
        refreshing={refresh}
        onRefresh={onRefresh}
        style={GlobalStyle.Padding}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        ListEmptyComponent={<Empty title={'No Tournament Found'} />}
        renderItem={({item}) => (
          <TournamentCard
            data={item}
            onPress={() => setTournamentPopup(true)}
            BTNtitle={item === 1 ? 'Join Tournament' : 'Create'}
          />
        )}
      />
      <TournamentModal
        visible={showtournamentPopup}
        onClose={() => setTournamentPopup(false)}
      />
    </Body>
  );
};

export default TournamentHome;
