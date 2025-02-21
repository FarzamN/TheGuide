import {style} from './style';
import {FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getCityByState} from '../../redux/actions/AuthAction';
import {
  Empty,
  AuthBody,
  CountryCityRadio,
  Loader,
  SearchInput,
} from '../../components';

const City = ({navigation, route}) => {
  const {goBack} = navigation;
  const {setVal, val, id, StateID} = route.params;

  const [data, setData] = useState([]); // Original data
  const [filteredData, setFilteredData] = useState([]); // Filtered data
  const [select, setSelect] = useState({name: val, id: id});
  const [load, setLoad] = useState(false); // Loader state
  const [inp, setInp] = useState(''); // Search input

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
    if (StateID) {
      setLoad(true); // Start loader before fetching data
      getCityByState(StateID, setLoad, result => {
        setData(result);
        setFilteredData(result); // Initialize filtered data with fetched result
        setLoad(false); // Stop loader once data is fetched
      });
    }
  }, [StateID]); // Dependency on StateID

  return (
    <AuthBody
    close
      heading="Welcome!"
      Sub="Select Your City"
      styles={style.regsterImage}
      source={require('../../assets/image/registerBanner.png')}>
      {StateID ? (
        <>
          <SearchInput
            value={inp}
            onChange={onChange}
            show={inp === ''}
            onClear={() => {
              setInp('');
              setFilteredData(data); // Reset the filter when cleared
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
        <Empty title="Select State First" />
      )}
      {load && StateID && <Loader visible />}
    </AuthBody>
  );
};

export default City;
