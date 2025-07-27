import React from 'react';
import Button from './Button';
export default {
   title: 'Components/Button',
   component: Button,
};

export const ButtonComponent = () => {
   return (
      <div
         style={{
            minHeight: '100vh',
            padding: '30px',
            fontFamily: 'sans-serif',
         }}
      >
         <h2 style={{ textAlign: 'center', margin: '30px 0' }}>Buttons Variants:</h2>

         <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Button label="Primary" variant="primary" onClick={() => alert("Primary button clicked")} />
            <Button label="Secondary" variant="secondary" onClick={() => alert("Secondary button clicked")} />
            <Button label="Delete" variant="danger" onClick={() => alert("Delete button clicked")} />
            <Button label="Submit" onClick={   () => alert('Submit Button Clicked!')} variant="primary" size="md" />
         </div>
      </div>
   );
};
