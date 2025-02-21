import React, {useState, useEffect} from 'react';
import {
  Empty,
  AuthBody,
  CountryCityRadio,
  Loader,
  SearchInput,
} from '../../components';
import {style} from './style';
import {getStateByCountry} from '../../redux/actions/AuthAction';
import {FlatList} from 'react-native';

const State = ({navigation, route}) => {
  const {goBack} = navigation;
  const {setVal, val, id, countryID} = route.params;

  const [data, setData] = useState([]); // Store the original data
  const [filteredData, setFilteredData] = useState([]); // Store the filtered data
  const [select, setSelect] = useState({name: val, id: id});
  const [load, setLoad] = useState(false);
  const [inp, setInp] = useState('');

  const onChange = text => {
    setInp(text);
    if (text.trim() === '') {
      setFilteredData(data); // Reset to original data if search is cleared
    } else {
      const filterData = data.filter(
        item => item.name.toLowerCase().includes(text.toLowerCase()), // Case-insensitive filtering
      );
      setFilteredData(filterData);
    }
  };

  const onSubmit = item => {
    setVal({name: item.name, id: item.id});
    setSelect({name: item.name, id: item.id});
    setTimeout(() => {
      goBack();
    }, 500);
  };

  useEffect(() => {
    if (countryID) {
      getStateByCountry(countryID, setLoad, result => {
        setData(result);
        setFilteredData(result); // Initialize filtered data with the fetched result
      });
    }
  }, [countryID]); // Added dependency to prevent unnecessary re-renders

  return (
    <AuthBody
    close
      heading="Welcome!"
      Sub="Select Your State"
      styles={style.regsterImage}
      source={require('../../assets/image/registerBanner.png')}>
      {countryID ? (
        <>
          <SearchInput
            value={inp}
            onChange={onChange}
            show={inp === ''}
            onClear={() => {
              setInp('');
              setFilteredData(data);
            }}
          />
          <FlatList
            data={filteredData}
            scrollEnabled={false}
            nestedScrollEnabled
            keyExtractor={(_, ix) => ix.toString()}
            ListEmptyComponent={<Empty />}
            renderItem={({item}) => (
              <CountryCityRadio
                name={item.name}
                focus={select.name === item.name}
                onPress={() => onSubmit(item)}
              />
            )}
          />
        </>
      ) : (
        <Empty title="Select Country First" />
      )}
      {load && countryID && <Loader visible />}
    </AuthBody>
  );
};

export default State;
