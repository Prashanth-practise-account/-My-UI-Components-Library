import React from 'react';
import { ThemeProvider } from '../src/ThemeContext';
import '../src/themes.css';
export const decorators = [
  (Story) => (
    <ThemeProvider>
      <div style={{ padding: '20px' }}>
        <div style={{ marginBottom: '20px' }}>
        </div>
        <Story />
      </div>
    </ThemeProvider>
  ),
];
