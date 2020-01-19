import { combineReducers } from 'redux';
import locale from './localeReducer';
import products from './productsReducer';
import error from './errorReducer';
import loading from './loadingReducer';

export default combineReducers({
  locale,
  products,
  error,
  loading,
});
