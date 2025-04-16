import React, {useState, useRef} from 'react';
import {Text} from '..';
import {
  View,
  Pressable,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  UIManager,
  findNodeHandle,
  Modal,
} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import {Color} from '../../utils/Color';
import {styles} from './style';
import {GlobalStyle} from '../../utils/GlobalStyle';

const NoteCard = ({data, onEdit, onDelete}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({top: 0, left: 0});
  const iconRef = useRef();

  const toggleMenu = () => {
    if (iconRef.current) {
      UIManager.measure(
        findNodeHandle(iconRef.current),
        (x, y, width, height, pageX, pageY) => {
          setMenuPosition({top: pageY + height + 4, left: pageX - 80});
          setMenuVisible(true);
        },
      );
    }
  };

  const closeMenu = () => setMenuVisible(false);

  return (
    <>
      <Pressable onLongPress={() => alert('zaleel')} style={styles.NoteCont}>
        <View style={GlobalStyle.between}>
          <Text style={{width: '90%'}} title={data.note} />
          <TouchableOpacity ref={iconRef} onPress={toggleMenu}>
            <Icon
              size={20}
              type="Entypo"
              color={Color.black}
              name="dots-three-vertical"
            />
          </TouchableOpacity>
        </View>
      </Pressable>

      <Modal
        visible={menuVisible}
        transparent
        animationType="fade"
        onRequestClose={closeMenu}>
        <Pressable style={StyleSheet.absoluteFill} onPress={closeMenu}>
          <View style={[styles.menu, menuPosition]}>
            <TouchableOpacity
              onPress={() => {
                closeMenu();
                onEdit();
              }}>
              <Text title="Edit" style={styles.menuTitle} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                closeMenu();
                onDelete();
              }}>
              <Text title="Delete" style={[styles.menuTitle, {color: 'red'}]} />
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </>
  );
};

export default NoteCard;
