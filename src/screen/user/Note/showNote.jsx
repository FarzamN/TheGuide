import {useDispatch, useSelector} from 'react-redux';
import {GlobalStyle} from '../../../utils/GlobalStyle';
import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {
  get_user_app_total_points,
  getNoteApi,
} from '../../../redux/actions/UserAction';
import {
  Body,
  Loader,
  GuestModal,
  RequestModal,
  AddSponsorModal,
  AskRequestModal,
  DashboardHeader,
  Empty,
  NoteCard,
  AddNoteModal,
  Plusbox,
} from '../../../components';
import {FlatList} from 'react-native';

const ShowNote = () => {
  const dispatch = useDispatch();
  const {getParent} = useNavigation();
  const userDetail = useSelector(state => state.userDetails);
  const isGuest = userDetail === 'guest';
  const note = useSelector(state => state.get_note);
  const [load, setLoad] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const [noteModal, setNoteModal] = useState({
    visible: false,
    isEdit: false,
    preData: '',
  });
  const [showGuest, setShowGuest] = useState(false);
  const [requestModal, setRequestModal] = useState(false);
  const [askRequestModal, setAskRequestModal] = useState(false);
  const [addSponsorModal, setAddSponsorModal] = useState(false);

  useEffect(() => {
    if (!isGuest) {
      dispatch(getNoteApi(setLoad));
      dispatch(get_user_app_total_points());
    }
  }, [isGuest]);

  const handleDelete = () => {
    console.log('delete');
  };
  const onRefresh = () => {
    setRefresh(true);
    dispatch(getNoteApi(setLoad));
    setRefresh(false);
  };

  useFocusEffect(
    useCallback(() => {
      getParent().setOptions({
        tabBarStyle: GlobalStyle.showBar,
      });
    }, []),
  );

  const onRequest = () => {
    if (isGuest) {
      setShowGuest(true);
      setTimeout(() => {
        setShowGuest(false);
      }, 2000);
      return;
    }
    dispatch(get_user_app_total_points());
    setRequestModal(true);
  };
  return (
    <Body>
      <DashboardHeader onRequest={onRequest} />
      <FlatList
        data={note}
        refreshing={refresh}
        onRefresh={onRefresh}
        style={GlobalStyle.Padding}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({item}) => (
          <NoteCard
            data={item}
            onEdit={() =>
              setNoteModal({visible: true, isEdit: true, preData: item.note})
            }
            onDelete={handleDelete}
          />
        )}
        ListEmptyComponent={<Empty title={"You don't have any Note"} />}
      />
      <Plusbox
        onPress={() =>
          setNoteModal({visible: true, isEdit: false, preData: ''})
        }
      />
      <Loader visible={load} />
      <AddNoteModal
        preData={noteModal.preData}
        visible={noteModal.visible}
        title={noteModal.isEdit ? 'Edit Note' : 'Add Note'}
        onClose={() =>
          setNoteModal({visible: false, isEdit: false, preData: ''})
        }
      />

      <GuestModal visible={showGuest} />
      <RequestModal
        onask={() => {
          setRequestModal(false);
          setTimeout(() => {
            setAskRequestModal(true);
          }, 500);
        }}
        onadd={() => {
          setRequestModal(false);
          setTimeout(() => {
            setAddSponsorModal(true);
          }, 1000);
        }}
        visible={requestModal}
        onClose={() => setRequestModal(false)}
      />
      <AskRequestModal
        visible={askRequestModal}
        onClose={() => setAskRequestModal(false)}
      />
      <AddSponsorModal
        visible={addSponsorModal}
        onClose={() => setAddSponsorModal(false)}
      />
    </Body>
  );
};

export default ShowNote;
