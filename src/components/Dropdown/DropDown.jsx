import React from 'react';
import {style} from './style';
import {Color} from '../../utils/Color';
import {SelectList} from 'react-native-dropdown-select-list';

const DropDown = (props) => {
  const {placeholder,onSelect, df, white,data,boxStyles} = props
  const backgroundColor = white ? Color.white : Color.Non;
  return (
    <SelectList
      save="key"
      data={data}
      search={false}
      defaultOption={df}
      placeholder={placeholder}
      setSelected={onSelect}
      searchPlaceholder={placeholder}
      boxStyles={[style.boxStyles,boxStyles]}
      inputStyles={style.inputStyles}
      dropdownStyles={{backgroundColor}}
      dropdownTextStyles={style.dropdownTextStyles}
    />
  );
};
export default DropDown;
