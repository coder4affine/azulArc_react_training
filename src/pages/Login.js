import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextInput from '../components/TextInput';
import Form from '../components/Form';

const fields = [
  {
    name: 'username',
    component: TextInput,
    label: 'Username',
    value: '',
    validate: value => {
      let error = '';
      if (!value) {
        error = 'required...';
      }
      return error;
    },
  },
  {
    name: 'password',
    component: TextInput,
    label: 'Password',
    type: 'password',
    value: '',
    validate: value => {
      let error = '';
      if (!value) {
        error = 'required...';
      }
      return error;
    },
  },
];

class Login extends PureComponent {
  static propTypes = {
    changeLocale: PropTypes.func.isRequired,
    locale: PropTypes.shape({
      locale: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const { changeLocale, locale } = this.props;
    return (
      <div>
        <Form
          fields={fields}
          onSubmit={() => {
            changeLocale({ locale: 'es' });
          }}
        />
        <p>{locale.locale}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    locale: state.locale,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeLocale: payload => dispatch({ type: 'CHANGE_LOCALE', payload }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
