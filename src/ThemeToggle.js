
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Button from './Component/Button/Button';
function ThemeToggle() {
  
  const { theme,toggleTheme } = useContext(ThemeContext);
  return(
    <div style={{ padding: '20px' }}>
    <Button
      onClick={toggleTheme}
      label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
    />
     {/* <button  onClick={toggleTheme}>
      {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button> */}
  </div>
  ) 
}

export default ThemeToggle;
