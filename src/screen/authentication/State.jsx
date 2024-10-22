import React, {useState, useEffect} from 'react';
import {Empty, AuthBody, CountryCityRadio, Loader} from '../../components';
import {style} from './style';
import {getStateByCountry} from '../../redux/actions/AuthAction';
import {FlatList} from 'react-native';

const State = ({navigation, route}) => {
  const {goBack} = navigation;
  const {setVal, val, id, countryID} = route.params;

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
    if (countryID) {
      getStateByCountry(countryID, setLoad, setData);
    }
  });
  return (
    <AuthBody
      heading="Welcome!"
      Sub="Select Your State"
      styles={style.regsterImage}
      source={require('../../assets/image/registerBanner.png')}>
      {countryID ? (
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
        <Empty title="Select Country First" />
      )}
      {/* {countryID ? <Loader visible={load} /> : null} */}
    </AuthBody>
  );
};

export default State;
