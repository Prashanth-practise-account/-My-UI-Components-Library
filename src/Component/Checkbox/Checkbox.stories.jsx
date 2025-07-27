import React from 'react';
import Checkbox from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
};

export const Check = () => 
{
  return(
  <div>
  <h2>Checkbox Variants:</h2>
    <Checkbox label="Accept Terms" />
    </div>
  );
}