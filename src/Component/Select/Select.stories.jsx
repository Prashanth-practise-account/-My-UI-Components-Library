import React, { useState } from 'react';
import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select,
};

export const Basic = () => {
 const [selectSingle, setSelectSingle] = useState([]);

  return (
    <Select
    label="🌍 Choose a Country"
    options={[
      { label: 'India', value: 'india' },
      { label: 'USA', value: 'usa' },
      { label: 'France', value: 'france' },
      { label: 'Japan', value: 'japan' },
      { label: 'Canada', value: 'canada' }
    ]}
    value={selectSingle}
    onChange={setSelectSingle}
    placeholder="-- Select a Country --"
    helperText="Choose your country of residence"
  />

  );
};
