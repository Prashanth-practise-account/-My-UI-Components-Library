// stories/Layout.stories.js
import React from 'react';
import ThemeToggle from '../ThemeToggle';
import Button from '../Component/Button/Button';
import Card from '../Component/Card/Card';

export default {
  title: 'Example/LayoutWithTheme',
};

export const Default = () => (
  <>
    <ThemeToggle />
    <Card>
      <Button label="Click me" />
    </Card>
  </>
);
