import React, { PureComponent } from 'react';
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

export default class Login extends PureComponent {
  render() {
    return (
      <Form
        fields={fields}
        onSubmit={values => {
          console.log(values);
        }}
      />
    );
  }
}
