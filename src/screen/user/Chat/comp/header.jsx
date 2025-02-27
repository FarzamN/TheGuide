import React, {useState} from 'react';
import {style} from './style';
import {View, TouchableOpacity} from 'react-native';
import {Text} from '../../../../components';
import {Color} from '../../../../utils/Color';
import {GlobalStyle} from '../../../../utils/GlobalStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {useNavigation} from '@react-navigation/native';


const Header = props => {
  const {title, onFilter} = props;
  const {goBack} = useNavigation();

  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  return (
    <>
      <View style={[style.headerCont, GlobalStyle.between]}>
        <TouchableOpacity
          onPress={goBack}
          style={[style.iconBox, GlobalStyle.justify]}>
          <Icon
            size={25}
            name="chevron-left"
            color={Color.status}
            type={IconType.Entypo}
          />
        </TouchableOpacity>
        <Text style={style.headerText} title={title} />
        <TouchableOpacity onPress={openMenu}>
          <Icon
            size={30}
            color={Color.white}
            name="filter-circle"
            type={IconType.Ionicons}
          />
        </TouchableOpacity>
      </View>
      {/* <Menu>
      <MenuTrigger text='Select action' />
      <MenuOptions>
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
        <MenuOption onSelect={() => alert(`Delete`)} >
          <Text style={{color: 'red'}}>Delete</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
      </MenuOptions>
    </Menu> */}

    </>
  );
};

export default Header;
