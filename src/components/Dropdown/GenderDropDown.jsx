import React from 'react';
import {style} from './style';
import {Color} from '../../utils/Color';
import {SelectList} from 'react-native-dropdown-select-list';

const GenderDropDown = ({onSelect, df, white}) => {
  const backgroundColor = white ? Color.white : Color.Non;
  return (
    <SelectList
      save="key"
      search={false}
      defaultOption={df}
      placeholder="Gender"
      setSelected={onSelect}
      searchPlaceholder="Gender"
      boxStyles={style.boxStyles}
      inputStyles={style.inputStyles}
      dropdownStyles={{backgroundColor}}
      dropdownTextStyles={style.dropdownTextStyles}
      data={[
        {key: 'male', value: 'male'},
        {key: 'female', value: 'female'},
      ]}
    />
  );
};
export default GenderDropDown;
