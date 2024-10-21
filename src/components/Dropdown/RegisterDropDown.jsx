import {useState} from 'react';
import {SelectList} from 'react-native-dropdown-select-list';
import {Color} from '../../utils/Color';

const RegisterDropDown = ({onSelect}) => {
  return (
    <SelectList
      setSelected={onSelect}
      placeholder="Gender"
      searchPlaceholder="Gender"
      boxStyles={{backgroundColor: '#F8F9FB'}}
      search={false}
      inputStyles={{color: Color.black}}
      dropdownTextStyles={{color: Color.black}}
      data={[
        {key: 'male', value: 'Men'},
        {key: 'female', value: 'Women'},
      ]}
      save="key"
    />
  );
};
export default RegisterDropDown;
