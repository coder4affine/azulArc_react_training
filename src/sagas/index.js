import { all, fork } from 'redux-saga/effects';
import products from './productsSaga';

export default function* root() {
  yield all([fork(products)]);
}
