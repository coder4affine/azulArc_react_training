import TextInput from '../components/TextInput';

const fields = [
  {
    name: 'name',
    component: TextInput,
    label: 'Product Name',
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
    name: 'category',
    component: TextInput,
    label: 'Product Category',
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
    name: 'price',
    component: TextInput,
    label: 'Product Price',
    type: 'number',
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

export default fields;
