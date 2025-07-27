import React, { useState } from 'react';
import MultiSelect from './MultiSelect';

export default {
  title: 'Components/MultiSelect',
  component: MultiSelect,
};

export const Default = () => {
  const [selectMultiple, setSelectMultiple] = useState([]);

  return (
    <MultiSelect
          label="🌍 Select Countries"
          options={[
            { label: 'India', value: 'india' },
            { label: 'USA', value: 'usa' },
            { label: 'France', value: 'france' },
            { label: 'Japan', value: 'japan' },
            { label: 'Canada', value: 'canada' },
          ]}
          selected={selectMultiple}
          onChange={setSelectMultiple}
          placeholder="Select one or more countries"
          helperText="You can select multiple options"
        />

  );
};
