import {Text} from '..';
import React from 'react';
import {styles} from './style';
import {View} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import {GlobalStyle} from '../../utils/GlobalStyle';
import Icon from 'react-native-dynamic-vector-icons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {Color} from '../../utils/Color';

const NoteCard = ({data, onEdit, onDelete}) => {
  return (
    <Card style={styles.NoteCont}>
      <View style={GlobalStyle.between}>
        <Text title={data.note} />
        {/* <Menu>
          <MenuTrigger>
            <Icon
              type="Entypo"
              name="dots-three-vertical"
              size={20}
              color={Color.black}
            />
          </MenuTrigger>
          <MenuOptions style={styles.menuStyle}>
            <MenuOption onSelect={onEdit}>
              <Text title="Edit" style={styles.menuTitle} />
            </MenuOption>
            <MenuOption onSelect={onDelete}>
              <Text title="Delete" style={[styles.menuTitle, {color: 'red'}]} />
            </MenuOption>
          </MenuOptions>
        </Menu> */}
      </View>
    </Card>
  );
};

export default NoteCard;
