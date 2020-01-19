import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './src/App';
import store from './src/configureStore';
import LocaleContext from './src/context/localeContext';
import ThemeContext from './src/context/themeContext';

ReactDOM.render(
  <Provider store={store}>
    <ThemeContext>
      <LocaleContext>
        <App />
      </LocaleContext>
    </ThemeContext>
  </Provider>,
  document.getElementById('root'),
);
