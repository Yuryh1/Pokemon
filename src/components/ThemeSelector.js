import React from 'react';

const ThemeSelector = ({ theme, toggleTheme }) => {
  return (
    <button className={`theme-button ${theme}`} onClick={toggleTheme}>
      {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeSelector;
