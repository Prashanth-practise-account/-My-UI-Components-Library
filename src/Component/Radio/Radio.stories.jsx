import React, { useState } from 'react';
import Radio from './Radio';

export default {
  title: 'Components/Radio',
  component: Radio,
};

export const Default = () => {
 const [selected, setSelected] = useState(null);

  return (
    <>
     <h2 style={{ textAlign: 'center', margin: '30px 0' }}>Radio Variants:</h2>
     <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
     <Radio
          name="gender"
          value="male"
          selectedValue={selected}
          setSelectedValue={setSelected}
          label="👦 Male"
        />
        &nbsp;&nbsp;
        <Radio
          name="gender"
          value="female"
          selectedValue={selected}
          setSelectedValue={setSelected}
          label="👧 Female"
        />
      </div>
    </>
  );
};