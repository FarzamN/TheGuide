import React from 'react';
import {style} from './style';
import {SelectList} from 'react-native-dropdown-select-list';

const GenderDropDown = ({onSelect}) => {
  return (
    <SelectList
      save="key"
      search={false}
      placeholder="Gender"
      setSelected={onSelect}
      searchPlaceholder="Gender"
      boxStyles={style.boxStyles}
      inputStyles={style.inputStyles}
      dropdownTextStyles={style.dropdownTextStyles}
      data={[
        {key: 'male', value: 'Men'},
        {key: 'female', value: 'Women'},
      ]}
    />
  );
};
export default GenderDropDown;
