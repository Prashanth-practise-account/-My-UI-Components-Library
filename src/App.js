
import React from 'react';
import { ThemeProvider } from './ThemeContext';
// import Button from './Component/Button/Button';
import ThemeToggle from './ThemeToggle';
import TestPage from './TestPage';
import './themes.css';

// const ThemeToggle = () => {
//   const { theme, toggleTheme } = React.useContext(require('./ThemeContext').ThemeContext);

//   return (
//     <div>
//       <Button
//         onClick={toggleTheme}
//         label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
//       />
//     </div>
//   );
// };

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <TestPage />
    </ThemeProvider>
  );
}

export default App;
