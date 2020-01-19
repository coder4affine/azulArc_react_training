import React, { createContext, PureComponent } from 'react';
import PropTypes from 'prop-types';

export const { Provider: LocaleProvider, Consumer: LocaleConsumer } = createContext();

class localeContext extends PureComponent {
  state = {
    locale: 'en',
    changeLocale: locale => {
      this.setState({ locale });
    },
  };

  render() {
    const { children } = this.props;
    const { locale, changeLocale } = this.state;
    return (
      <LocaleProvider
        value={{
          locale,
          changeLocale,
        }}
      >
        {children}
      </LocaleProvider>
    );
  }
}

localeContext.propTypes = {
  children: PropTypes.element.isRequired,
};

export default localeContext;
