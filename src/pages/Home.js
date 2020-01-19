/* eslint-disable react/prop-types */
import React, { PureComponent } from 'react';
import { LocaleConsumer } from '../context/localeContext';
import { ThemeConsumer } from '../context/themeContext';

export default class Home extends PureComponent {
  state = {
    date: '',
  };

  componentDidMount() {
    console.log(this.props);
  }

  heavyFunction = () => {
    // import('date-fns').then(({ format }) => {
    //   this.setState({ date: format(new Date(), 'MM-dd-yy') });
    // });
    const { history } = this.props;
    history.replace('/about');
  };

  render() {
    console.log('render');
    const { date } = this.state;
    return (
      <div>
        {date && <p>{date}</p>}
        <button type="button" onClick={this.heavyFunction}>
          Perform Heavy Function
        </button>
        <LocaleConsumer>
          {value => {
            return (
              <div>
                <p>{value.locale}</p>
                <button
                  type="button"
                  onClick={() => {
                    value.changeLocale(value.locale === 'en' ? 'es' : 'en');
                  }}
                >
                  Change Locale
                </button>
              </div>
            );
          }}
        </LocaleConsumer>
        <ThemeConsumer>
          {value => {
            return (
              <div>
                <p>{value.theme}</p>
                <button
                  type="button"
                  onClick={() => {
                    value.changeTheme(value.theme === 'light' ? 'dark' : 'light');
                  }}
                >
                  Change Theme
                </button>
              </div>
            );
          }}
        </ThemeConsumer>
      </div>
    );
  }
}
