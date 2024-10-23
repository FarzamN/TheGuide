import {FlatList} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Empty, AuthBody, CountryCityRadio, SearchInput} from '../../components';
import {style} from './style';

const Country = ({navigation, route}) => {
  const {goBack} = navigation;
  const {setVal, val, id} = route.params;

  const get_country = useSelector(state => state.get_country); // Original country list
  const [select, setSelect] = useState({name: val, id: id}); // Selected country
  const [inp, setInp] = useState(''); // Search input state
  const [data, setData] = useState(get_country); // Filtered data state

  // Handles search input changes
  const onChange = text => {
    setInp(text);
    if (text.trim() === '') {
      setData(get_country); // Reset to original list if input is cleared
    } else {
      const filterData = get_country.filter(
        item => item.name.toLowerCase().includes(text.toLowerCase()), // Case-insensitive filtering
      );
      setData(filterData);
    }
  };

  // Handles selecting a country
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
      <SearchInput
        value={inp}
        onChange={onChange}
        show={inp === ''}
        onClear={() => {
          setInp(''); // Clear search input
          setData(get_country); // Reset data to original country list
        }}
      />

      <FlatList
        data={data} // Use the filtered data for rendering
        scrollEnabled={false}
        nestedScrollEnabled
        keyExtractor={(_, ix) => ix.toString()}
        ListEmptyComponent={<Empty />}
        renderItem={({item}) => (
          <CountryCityRadio
            name={item.name}
            focus={select.name === item.name}
            onPress={() => onSubmit(item)} // Handle selection
          />
        )}
      />
    </AuthBody>
  );
};

export default Country;
