import React from 'react'
import style from './style'
import { View } from 'react-native'
import Modal from 'react-native-modal'
import { useDispatch } from 'react-redux'
import {CustomButton, FullImage, Text} from '..'
import { USER_DETAILS } from '../../redux/reducer/Holder'

const GuestModal = ({visible,onClose}) => {
    const dispatch = useDispatch()
    
    const handleLogout = () => dispatch({type: USER_DETAILS, payload: null});
  return (
    <Modal
      isVisible={visible}
      animationIn={'bounceInDown'}
      animationOut={'bounceOut'}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      style={[style.MainModal, style.Modal_Container]}>
      <View style={style.ModalContainer}>
       
        <FullImage source={{uri: "https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/warning-icon.png"}} style={style.LottieView}/>
        <Text title={"Please login or sign up first"} center style={style.LogoutText} />
        <CustomButton title={"Go to Login"} style={style.goToLogin} onPress={handleLogout}/>
      </View>
    </Modal>
  )
}

export default GuestModal