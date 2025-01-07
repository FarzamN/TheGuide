import React from 'react';
import style from './style';
import {ModalBtn, Text} from '..';
import {View} from 'react-native';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';
import {GlobalStyle} from '../../utils/GlobalStyle';

const DonateModal = ({visible, onClose, onPress}) => {
  const data = useSelector(state => state.pray_support_gola);
  return (
    <Modal
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      isVisible={visible}
      animationIn={'flash'}
      animationOut={'fadeOut'}
      backdropColor={'rgba(0,0,0,0.7)'}
      style={[style.MainModal, style.Modal_Container]}>
      <View
        style={[
          style.ModalContainer,
          {alignItems: 'center', paddingVertical: 30, width: '85%'},
        ]}>
        <View style={GlobalStyle.row}>
          <Text title={'Support Name: '} style={style.boldText} />
          <Text title={data.goal_name} style={style.nomText} />
        </View>
        <View style={GlobalStyle.row}>
          <Text title={'Goal Amount: '} style={style.boldText} />
          <Text title={`$${data.goal_amount}`} style={style.nomText} />
        </View>
        <View style={GlobalStyle.row}>
          <Text title={'Goal Month: '} style={style.boldText} />
          <Text title={data.goal_month} style={style.nomText} />
        </View>

        <Text title={'Remaining'} style={style.boldText} />
        <Text title={`$${data.amount_remaining}`} style={style.boldText} />
        <ModalBtn
          green
          title={'Donate'}
          style={style.DonateBtn}
          onPress={onPress}
        />
      </View>
    </Modal>
  );
};

export default DonateModal;
