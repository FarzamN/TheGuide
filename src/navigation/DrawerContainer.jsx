import React from 'react';
import {
  DrawerContentScrollView,
  useDrawerStatus,
} from '@react-navigation/drawer';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {Color} from '../utils/Color';
import {Body, FullImage} from '../components';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {width} from '../utils/Constants';

const DrawerContainer = props => {
  const isDrawerOpen = useDrawerStatus() === 'open';

  const drawerItems = [
    {label: 'Bible School', color: '#4BA0FC'},
    {label: 'Message', color: '#7643F8'},
    {label: 'Read Bible', color: '#2DC68D'},
    {label: 'Tournament', color: '#D9AE24'},
    {label: 'The Guide.us', color: '#F68170'},
    {label: 'Prayer', color: '#EE5454'},
  ];

  return (
    <Body restyle={{backgroundColor: '#2C76F1'}}>
      <StatusBar
        backgroundColor={isDrawerOpen ? '#2C76F1' : '#0808C2'}
        barStyle={'light-content'}
      />
      <FullImage
        resizeMode="contain"
        style={styles.logo}
        source={require('../assets/image/logo.png')}
      />

      <DrawerContentScrollView {...props}>
        <View style={styles.menuItems}>
          {drawerItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.menuItem, {backgroundColor: item.color}]}
              onPress={() => props.navigation.navigate(item.label)}>
              <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </DrawerContentScrollView>

      <View style={styles.bottomIcons}>
        <Icon
          name="sharealt"
          type={IconType.AntDesign}
          color={Color.white}
          size={30}
        />
        <Icon
          onPress={() => props.navigation.navigate('profile')}
          name="settings-outline"
          type={IconType.Ionicons}
          color={Color.white}
          size={30}
        />
      </View>
    </Body>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: width - 50,
    height: 200,
    alignSelf: 'center',
    marginVertical: 20,
  },
  menuItems: {
    flexDirection: 'row',
    flexWrap: 'wrap', // Allows items to wrap to the next line
    justifyContent: 'space-between', // Adjusts space between rows
    paddingHorizontal: 20,
  },
  menuItem: {
    width: '48%', // Each item will take 48% of the available width, with space for margins
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    marginBottom: 15,
    height: 90,
  },
  menuText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
    marginBottom: 30,
  },
});

export default DrawerContainer;
