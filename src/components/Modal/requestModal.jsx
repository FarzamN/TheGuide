import {View} from 'react-native';
import React from 'react';
import style from './style';
import {ModalBtn, Text} from '..';
import Modal from 'react-native-modal';
import {useSelector} from 'react-redux';

const RequestModal = props => {
  const {onClose, visible, onask, onadd} = props;
  const is_sponsor = useSelector(state => state.is_sponsor);
  const pool_points = useSelector(state => state.user_total_points);
  const public_pool_point = useSelector(state => state.public_pool_point);

  return (
    <Modal
      isVisible={visible}
      animationIn="slideInUp"
      style={style.RequestBox}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationOut="slideOutDown">
      <View style={[style.RequestContainer]}>
        {pool_points == 0 && (
          <Text
            center
            style={style.LogoutText}
            title="You don't have any points in your pool. Would you like to request points from a sponsor?"
          />
        )}
        {is_sponsor === 1 && (
          <>
            <Text
              center
              style={style.LogoutText}
              title={`My Points Pool: ${pool_points}`}
            />

            <Text
              center
              style={style.LogoutText}
              title={`Public Points Pool: ${public_pool_point}`}
            />

            <ModalBtn title="Request Points" onPress={onask} />
          </>
        )}

        <ModalBtn green title="Add A Sponsor" onPress={onadd} />
      </View>
    </Modal>
  );
};

export default RequestModal;
