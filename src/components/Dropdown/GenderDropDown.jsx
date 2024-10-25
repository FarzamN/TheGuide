import React from 'react';
import {style} from './style';
import {SelectList} from 'react-native-dropdown-select-list';
import {Color} from '../../utils/Color';

const GenderDropDown = ({onSelect, df, white}) => {
  return (
    <SelectList
      save="key"
      defaultOption={df}
      search={false}
      placeholder="Gender"
      setSelected={onSelect}
      searchPlaceholder="Gender"
      boxStyles={style.boxStyles}
      inputStyles={style.inputStyles}
      dropdownStyles={{backgroundColor: white ? Color.white : Color.Non}}
      dropdownTextStyles={style.dropdownTextStyles}
      data={[
        {key: 'male', value: 'Men'},
        {key: 'female', value: 'Women'},
      ]}
    />
  );
};
export default GenderDropDown;
