import React from 'react';
import {style} from './style';
import Modal from 'react-native-modal';
import {iOS} from '../../../../utils/Constants';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import Icon, { IconType } from 'react-native-dynamic-vector-icons';
import { GlobalStyle } from '../../../../utils/GlobalStyle';

const FilterModal = ({visible, onClose, onSortSelect, selectedSort}) => {
  const {top} = useSafeAreaInsets();
  const options = [
    { label: 'Recent', value: 'recent' },
    { label: 'A to Z', value: 'a-z' },
    { label: 'Z to A', value: 'z-a' },
  ];
  console.log(selectedSort)
  return (
    <Modal
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      animationOut={'fadeOut'}
      animationIn={'fadeIn'}
      isVisible={visible}
      style={[
        style.modalStyle,
        {
          paddingTop: iOS ? top + 10 : StatusBar.currentHeight + 10,
        },
      ]}>
      <View style={style.menuContainer}>
      {options.map(option => (
          <TouchableOpacity 
            key={option.value} 
            style={[style.menuItem,GlobalStyle.row]}
            onPress={() => onSortSelect(option.value)}>
            <Text style={style.menuText}>{option.label}</Text>
            {selectedSort === option.value && (
            <Icon type={IconType.MaterialIcons} name="check" size={20} color="green" style={style.checkIcon} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </Modal>
  );
};

export default FilterModal;
