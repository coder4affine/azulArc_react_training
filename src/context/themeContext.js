import React, { createContext, PureComponent } from 'react';
import PropTypes from 'prop-types';

export const { Provider: ThemeProvider, Consumer: ThemeConsumer } = createContext();

class themeContext extends PureComponent {
  state = {
    theme: 'light',
    changeTheme: theme => {
      this.setState({ theme });
    },
  };

  render() {
    const { children } = this.props;
    const { theme, changeTheme } = this.state;
    return (
      <ThemeProvider
        value={{
          theme,
          changeTheme,
        }}
      >
        {children}
      </ThemeProvider>
    );
  }
}

themeContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export default themeContext;
