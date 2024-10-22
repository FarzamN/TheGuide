import {FlatList} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Empty, AuthBody, CountryCityRadio} from '../../components';
import {style} from './style';

const Country = ({navigation, route}) => {
  const {goBack} = navigation;
  const {setVal, val, id} = route.params;
  const get_country = useSelector(state => state.get_country);
  const [select, setSelect] = useState({name: val, id: id});

  const onSubmit = item => {
    setVal({name: item.name, id: item.id});
    setSelect({name: item.name, id: item.id});
    setTimeout(() => {
      goBack();
    }, 500);
  };
  return (
    <AuthBody
      Sub="Select Your Country"
      heading="Welcome!"
      styles={style.regsterImage}
      source={require('../../assets/image/registerBanner.png')}>
      <FlatList
        data={get_country}
        scrollEnabled={false}
        nestedScrollEnabled
        keyExtractor={(_, ix) => ix.toString()}
        ListEmptyComponent={<Empty />}
        renderItem={({item, index}) => (
          <CountryCityRadio
            name={item.name}
            focus={select.name === item.name}
            onPress={() => onSubmit(item)}
          />
        )}
      />
    </AuthBody>
  );
};

export default Country;
