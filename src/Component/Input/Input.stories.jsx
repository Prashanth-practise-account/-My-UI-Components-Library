import React, { useState, useContext } from 'react';
import Input from './Input';
import { ThemeContext } from '../../ThemeContext'; // adjust path based on your project structure

export default {
  title: 'Components/Input',
  component: Input,
};

export const Text = () => {
  const [textValue, setTextValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
  
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Input Variants</h2>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px' }}>
        <Input
          label="Enter a Name"
          type="text"
          value={textValue}
          onChange={(e) => setTextValue(e.target.value)}
          placeholder="Enter your Name"
          width="350px"
          height="30px"
        />

        <Input
          label="Enter a Text/Bio"
          type="textarea"
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          placeholder="Tell us something about yourself"
          width="350px"
          height="100px"
        />

        <Input
          label="Enter Age"
          type="number"
          value={numberValue}
          onChange={(e) => setNumberValue(e.target.value)}
          placeholder="Enter your age"
          width="350px"
          height="30px"
        />
      </div>
    </div>
  );
};
