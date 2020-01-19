import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import LocaleContext from './src/context/localeContext';
import ThemeContext from './src/context/themeContext';

ReactDOM.render(
  <ThemeContext>
    <LocaleContext>
      <App />
    </LocaleContext>
  </ThemeContext>,
  document.getElementById('root'),
);
