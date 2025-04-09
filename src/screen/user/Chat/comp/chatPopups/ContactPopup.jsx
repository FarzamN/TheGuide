import {useState, useEffect} from 'react';
import {Share, TouchableOpacity, View, FlatList} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import style from '../../../../../components/Modal/style';
import Modal from 'react-native-modal';
import {
  CrossIcon,
  MainInput,
  ModalBtn,
  SearchBar,
  Text,
} from '../../../../../components';
import {Color} from '../../../../../utils/Color';
import PraySwitch from '../../../Prayer/prayComp/praySwitch';
import {tab} from '../../../../../utils/Constants';
import {GlobalStyle} from '../../../../../utils/GlobalStyle';
import Icon from 'react-native-dynamic-vector-icons';

// Dummy card data
const dummyCards = [
  {id: 1, name: 'John Doe'},
  {id: 2, name: 'Jane Smith'},
  {id: 3, name: 'David Johnson'},
];

const ContactPopup = ({visible, onClose}) => {
  const [tabs, setTabs] = useState('Search Users');
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);

  const handleShare = () => {
    Share.share({
      title: 'Share your code with your friends',
      message: '20000',
    });
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
  });

  useEffect(() => {
    // Clear search input and reset filtered cards on tab change
    setSearch('');
    if (tabs !== 'Search Users') {
      setFilteredCards(dummyCards); // show cards without filtering
    } else {
      setFilteredCards([]); // clear on switch to Search Users
    }
  }, [tabs]);

  useEffect(() => {
    if (tabs === 'Search Users' && search) {
      const filtered = dummyCards.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredCards(filtered);
    }
  }, [search, tabs]);

  const renderCard = ({item}) => (
    <View
      style={[
        style.card,
        {
          padding: 10,
          marginVertical: 5,
          backgroundColor: '#f5f5f5',
          borderRadius: 10,
        },
      ]}>
      <Text title={item.name} />
    </View>
  );

  return (
    <Modal
      isVisible={visible}
      animationIn="fadeInUp"
      animationOut="fadeOut"
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={style.askRequestBox}>
      <View style={[style.RequestContainer]}>
        <CrossIcon onPress={onClose} />
        <Text
          center
          title={'Create Contacts'}
          style={[style.LogoutText, {color: Color.black}]}
        />
        <View
          style={[
            GlobalStyle.between,
            style.SwitchCont,
            {backgroundColor: '#fff', height: 50},
          ]}>
          {['Search Users', 'Sent', 'Recieved'].map(i => (
            <PraySwitch
              notification={['Sent', 'Recieved'].includes(i)}
              key={i}
              title={i}
              focus={tabs === i}
              onPress={() => setTabs(i)}
              styles={{height: tab ? 50 : 32}}
            />
          ))}
        </View>

        <SearchBar
          styles={style.searchBox}
          onChange={setSearch}
          value={search}
          onClose={() => setSearch('')}
        />

        {tabs === 'Search Users' && (
          <>
            <FlatList
              data={filteredCards}
              keyExtractor={item => item.id.toString()}
              renderItem={renderCard}
              // contentContainerStyle={{marginTop: 15, paddingBottom: 10}}
              ListEmptyComponent={
                search && tabs === 'Search Users' ? (
                  <Text title="No users found" style={{textAlign: 'center'}} />
                ) : null
              }
            />
            <Text style={{marginTop: 10}} title={'Your Code'} />
            <View style={[GlobalStyle.between, style.yourCodeBox]}>
              <Text selectable title={'2000'} />
              <TouchableOpacity
                onPress={handleShare}
                style={style.ContactIconBox}>
                <Icon type="AntDesign" name="sharealt" color={Color.white} />
              </TouchableOpacity>
            </View>

            <Text style={{marginTop: 10}} title={'Enter Code'} />
            <MainInput
              name="note"
              control={control}
              isError={errors?.note}
              placeholder={'Enter Code here'}
              style={[style.amountInput, {marginTop: 5}]}
              message={errors?.note?.message}
              rules={{
                required: 'Note is required',
              }}
            />
            <ModalBtn
              green
              title={load ? 'Please wait...' : 'Submit'}
              // onPress={handleSubmit(handleNote)}
            />
          </>
        )}
        {tabs === 'Sent' && (
          <Text
            center
            style={{marginTop: 10}}
            title={'You have not sent any request yet'}
          />
        )}
        {tabs === 'Recieved' && (
          <Text
            center
            style={{marginTop: 10}}
            title={'You have not recieved any request yet'}
          />
        )}
      </View>
    </Modal>
  );
};

export default ContactPopup;
