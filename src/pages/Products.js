/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import Form from '../components/Form';
import productFields from './productFields';
import { REQUEST, LOAD_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT } from '../constants/actionTypes';

export class Products extends PureComponent {
  static propTypes = {
    loadProducts: PropTypes.func.isRequired,
    addProducts: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  };

  state = {
    initialValues: {
      name: '',
      category: '',
      price: 0,
    },
  };

  constructor(props) {
    super(props);
    props.loadProducts();
  }

  updateForm = initialValues => {
    this.setState({ initialValues });
  };

  render() {
    const { products, addProducts, loading, error } = this.props;
    const { initialValues } = this.state;

    return (
      <div>
        <Form
          fields={productFields}
          onSubmit={(values, actions) => {
            addProducts(values, actions);
            this.setState({
              initialValues: {
                name: '',
                category: '',
                price: 0,
              },
            });
          }}
          initialValues={initialValues}
          enableReinitialize
        />

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {products.map(x => {
          return (
            <div>
              <p>{`Name: ${x.name}`}</p>
              <p>{`Category: ${x.category}`}</p>
              <p>{`Price: ${x.price}`}</p>
              <button type="button" onClick={() => this.updateForm(x)}>
                Update
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

const mstp = state => {
  return {
    products: state.products,
    loading: state.loading[LOAD_PRODUCTS] || state.loading[ADD_PRODUCT],
    error: state.error[LOAD_PRODUCTS] || state.error[ADD_PRODUCT],
  };
};

const mdtp = dispatch => {
  return {
    loadProducts: () => dispatch({ type: `${LOAD_PRODUCTS}_${REQUEST}` }),
    addProducts: (payload, meta) => {
      if (payload.id) {
        dispatch({ type: `${UPDATE_PRODUCT}_${REQUEST}`, payload, meta });
      } else {
        dispatch({ type: `${ADD_PRODUCT}_${REQUEST}`, payload, meta });
      }
    },
  };
};

export default connect(mstp, mdtp)(Products);
