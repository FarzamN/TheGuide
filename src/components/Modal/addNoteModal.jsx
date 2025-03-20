import style from './style';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../utils/Color';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {CrossIcon, MainInput, ModalBtn, Text} from '..';
import {save_note} from '../../redux/actions/UserAction';
import {IconType} from 'react-native-dynamic-vector-icons';

const AddNoteModal = props => {
  const {onClose, visible, title, preData} = props;
  const dispatch = useDispatch();

  const [load, setLoad] = useState(false);

  const handleNote = data => dispatch(save_note(data, setLoad, onClose, reset));

  const {
    reset,
    control,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm({
    mode: 'all',
    defaultValues: {
      note: preData || '', // Initialize with preData if available
    },
  });

  // Update the input field when preData changes
  useEffect(() => {
    if (preData !== undefined) {
      setValue('note', preData);
    }
  }, [preData, setValue]);

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
          title={title}
          style={[style.LogoutText, {color: Color.black}]}
        />
        <MainInput
          name="note"
          icName="onenote"
          control={control}
          isError={errors?.note}
          placeholder={title}
          type={IconType.Fontisto}
          style={style.amountInput}
          message={errors?.note?.message}
          rules={{
            required: 'Note is required',
          }}
        />
        <ModalBtn
          green
          title={load ? 'Please wait...' : 'Submit'}
          onPress={handleSubmit(handleNote)}
        />
      </View>
    </Modal>
  );
};

export default AddNoteModal;
