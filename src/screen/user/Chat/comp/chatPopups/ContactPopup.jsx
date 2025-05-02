import {useDispatch, useSelector} from 'react-redux';
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
  UserChatCard,
} from '../../../../../components';
import {Color} from '../../../../../utils/Color';
import PraySwitch from '../../../Prayer/prayComp/praySwitch';
import {tab} from '../../../../../utils/Constants';
import {GlobalStyle} from '../../../../../utils/GlobalStyle';
import Icon from 'react-native-dynamic-vector-icons';
import {
  fetchSearchUsers,
  fetchSentUsers,
  fetchRecievedUsers,
  addContact,
  cancelSend,
  sendCode,
  rejected_accepted,
} from '../../../../../redux/actions/UserAction';

const ContactPopup = ({visible, onClose}) => {
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userDetails);
  const recievedCards = useSelector(state => state.recievedCards);

  const [tabs, setTabs] = useState('Add Contact');
  const [search, setSearch] = useState('');

  const [filteredCards, setFilteredCards] = useState([]);
  const [sentCards, setSendCards] = useState([]);
  const [load, setLoad] = useState(false);
  const [addLoad, setAddLoad] = useState(false);
  const [loadSearch, setLoadSearch] = useState(false);
  const [loadSend, setLoadSend] = useState(false);
  const [loadRecieved, setLoadRecieved] = useState(false);

  const shareCode = userDetails.code;
  const handleAdd = data => {
    addContact(data.id, setAddLoad, setSearch, userDetails);
  };

  const handleCode = async data => {
    const getCodeData = await dispatch(sendCode(data.code));
    setTimeout(() => {
      addContact(getCodeData.id, setAddLoad, setSearch, userDetails);
    }, 500);
  };

  const handleCancel = id => {
    cancelSend(id);
    fetchSentUsers(setLoadSend, setSendCards);
  };

  const handleShare = () => {
    Share.share({
      title: 'Share your code with your friends',
      message: shareCode,
    });
  };

  // Fetch Sent and Received Users on Modal Open
  useEffect(() => {
    if (visible) {
      fetchSentUsers(setLoadSend, setSendCards);
      dispatch(fetchRecievedUsers(setLoadRecieved));
    }
  }, [visible, tabs]);

  // Search Users Debounced API Call
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (tabs === 'Search Users' && search.trim().length > 0) {
        fetchSearchUsers(search, setLoadSearch, setFilteredCards);
      } else if (tabs === 'Search Users') {
        setFilteredCards([]);
      }
    }, 400);

    return () => clearTimeout(delayDebounce);
  }, [search, tabs]);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    mode: 'all',
  });
  return (
    <Modal
      isVisible={visible}
      animationIn="fadeInUp"
      animationOut="fadeOut"
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      style={style.askRequestBox}>
      <View style={style.RequestContainer}>
        <CrossIcon onPress={onClose} />
        <Text
          center
          title="Create Contacts"
          style={[style.LogoutText, {color: Color.black}]}
        />

        {/* yhh haty ga or nechy wala comment code dekhy ga */}
        <View
          style={[
            GlobalStyle.between,
            style.SwitchCont,
            {
              backgroundColor: '#fff',
              height: 50,
              justifyContent: 'space-around',
            },
          ]}>
          {['Add Contact', 'Requests'].map(i => (
            <PraySwitch
              notification={['Requests'].includes(i)}
              key={i}
              title={i}
              focus={tabs === i}
              onPress={() => {
                setTabs(i);
                setSearch('');
              }}
              styles={{height: tab ? 50 : 32}}
            />
          ))}
        </View>
        {/* RECEIVED TAB */}
        {tabs === 'Requests' && (
          <>
            {loadRecieved ? (
              <Text center title="Loading..." />
            ) : recievedCards.length > 0 ? (
              <FlatList
                style={{height: '50%'}}
                data={recievedCards}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item}) => {
                  console.log('recievedCards item', item);
                  return (
                    <UserChatCard
                      btnTitle="Accept"
                      name={
                        'item?.user?.full_name' + ' ' + item?.user?.last_name
                      }
                      title="You have received request from"
                      onPress={() => rejected_accepted(item.id, onClose)}
                    />
                  );
                }}
              />
            ) : (
              <Text
                center
                style={{marginTop: 10}}
                title="You have not received any request yet"
              />
            )}
          </>
        )}

        {tabs === 'Add Contact' && (
          <>
            <Text
              style={{marginTop: 10, marginBottom: 5}}
              title="Share the code with your friends and family!"
            />
            <View style={[GlobalStyle.between, style.yourCodeBox]}>
              <Text selectable title={shareCode} />
              <TouchableOpacity
                onPress={handleShare}
                style={style.ContactIconBox}>
                <Icon type="AntDesign" name="sharealt" color={Color.white} />
              </TouchableOpacity>
            </View>

            <Text
              style={{marginTop: 10, marginBottom: 5}}
              title="Enter your friends and families code here!"
            />
            <MainInput
              name="code"
              control={control}
              isError={errors?.code}
              placeholder="Enter Code here"
              style={[style.amountInput, {marginTop: 5}]}
              message={errors?.code?.message}
              rules={{
                required: 'Note is required',
              }}
            />
            <ModalBtn
              green
              title={load ? 'Please wait...' : 'Submit'}
              onPress={handleSubmit(handleCode)}
            />
          </>
        )}

        {/* yhh haty ga or nechy wala comment code dekhy ga */}
      </View>
    </Modal>
  );
};

export default ContactPopup;

// <View
// style={[
//   GlobalStyle.between,
//   style.SwitchCont,
//   {backgroundColor: '#fff', height: 50},
// ]}>
// {['Search Users', 'Sent', 'Received'].map(i => (
//   <PraySwitch
//     notification={['Sent', 'Received'].includes(i)}
//     key={i}
//     title={i}
//     focus={tabs === i}
//     onPress={() => {
//       setTabs(i);
//       setSearch('');
//     }}
//     styles={{height: tab ? 50 : 32}}
//   />
// ))}
// </View>

// <SearchBar
// value={search}
// onChange={setSearch}
// styles={style.searchBox}
// onClose={() => setSearch('')}
// />

// {/* SEARCH USERS TAB */}
// {tabs === 'Search Users' && (
// <>
//   {loadSearch ? (
//     <Text center title="Loading..." />
//   ) : (
//     <>
//       {search !== '' && (
//         <>
//           <FlatList
//             style={{height: '50%'}}
//             data={filteredCards}
//             keyExtractor={(_, index) => index.toString()}
//             renderItem={({item}) => {
//               return (
//                 <UserChatCard
//                   btnTitle="Add User"
//                   name={item.first_name + ' ' + item?.last_name}
//                   uri={item.profile_url}
//                   title="Send request to"
//                   onPress={() => handleAdd(item)}
//                 />
//               );
//             }}
//             ListEmptyComponent={
//               search ? <Text center title="No users found" /> : null
//             }
//           />
//         </>
//       )}
//     </>
//   )}

//   {search === '' && (
//     <>
//       <Text
//         style={{marginTop: 10}}
//         title="Share the code with your friends and family!"
//       />
//       <View style={[GlobalStyle.between, style.yourCodeBox]}>
//         <Text selectable title={shareCode} />
//         <TouchableOpacity
//           onPress={handleShare}
//           style={style.ContactIconBox}>
//           <Icon
//             type="AntDesign"
//             name="sharealt"
//             color={Color.white}
//           />
//         </TouchableOpacity>
//       </View>

//       <Text
//         style={{marginTop: 10}}
//         title="Enter your friends and families code here!"
//       />
//       <MainInput
//         name="note"
//         control={control}
//         isError={errors?.note}
//         placeholder="Enter Code here"
//         style={[style.amountInput, {marginTop: 5}]}
//         message={errors?.note?.message}
//         rules={{
//           required: 'Note is required',
//         }}
//       />
//       <ModalBtn green title={load ? 'Please wait...' : 'Submit'} />
//     </>
//   )}
// </>
// )}

// {/* SENT TAB */}
// {tabs === 'Sent' && (
// <>
//   {loadSend ? (
//     <Text center title="Loading..." />
//   ) : sentCards.length > 0 ? (
//     <FlatList
//       style={{height: '50%'}}
//       data={sentCards}
//       keyExtractor={(_, index) => index.toString()}
//       renderItem={({item}) => {
//         return (
//           <UserChatCard
//             // sent
//             btnTitle="Cancel"
//             name={
//               item?.contact?.first_name +
//               ' ' +
//               item?.contact?.last_name
//             }
//             uri={item?.contact?.profile_url}
//             title="You have sent request to"
//             onPress={() => handleCancel(item?.id)}
//           />
//         );
//       }}
//     />
//   ) : (
//     <Text
//       center
//       style={{marginTop: 10}}
//       title="You have not sent any request yet"
//     />
//   )}
// </>
// )}
