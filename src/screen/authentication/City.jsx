import {style} from './style';
import {FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getCityByState} from '../../redux/actions/AuthAction';
import {Empty, AuthBody, CountryCityRadio, Loader} from '../../components';

const City = ({navigation, route}) => {
  const {goBack} = navigation;
  const {setVal, val, id, StateID} = route.params;

  const [data, setData] = useState([]);
  const [select, setSelect] = useState({name: val, id: id});
  const [load, setLoad] = useState(false);

  const onSubmit = item => {
    setVal({name: item.name, id: item.id});
    setSelect({name: item.name, id: item.id});
    setTimeout(() => {
      goBack();
    }, 500);
  };

  useEffect(() => {
    if (StateID) {
      getCityByState(StateID, setLoad, setData);
    }
  });
  return (
    <AuthBody
      heading="Welcome!"
      Sub="Select Your City"
      styles={style.regsterImage}
      source={require('../../assets/image/registerBanner.png')}>
      {StateID ? (
        <FlatList
          data={data}
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
      ) : (
        <Empty title="Select State First" />
      )}
      {/* {StateID ? <Loader visible={load} /> : null} */}
    </AuthBody>
  );
};

export default City;
