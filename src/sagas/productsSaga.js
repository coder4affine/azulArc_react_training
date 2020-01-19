import { takeLatest, call, put, all, fork, delay } from 'redux-saga/effects';
import {
  LOAD_PRODUCTS,
  REQUEST,
  SUCCESS,
  FAIL,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
} from '../constants/actionTypes';

const url = 'http://localhost:3004/products';

function* loadProducts() {
  try {
    const res = yield call(fetch, url);
    const products = yield res.json();
    yield put({ type: `${LOAD_PRODUCTS}_${SUCCESS}`, payload: products });
  } catch (error) {
    yield put({ type: `${LOAD_PRODUCTS}_${FAIL}`, payload: error });
  }
}

function* addProduct({ payload, meta }) {
  const { resetForm, setStatus, setSubmitting } = meta;

  yield call(setSubmitting, true);
  try {
    yield delay(3000);
    const res = yield call(fetch, url, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    });
    const product = yield res.json();
    yield put({ type: `${ADD_PRODUCT}_${SUCCESS}`, payload: product });
    yield call(resetForm);
  } catch (error) {
    yield put({ type: `${ADD_PRODUCT}_${FAIL}`, payload: error });
    yield call(setStatus, { serverError: error.message });
  } finally {
    yield call(setSubmitting, false);
  }
}

function* updateProduct({ payload, meta }) {
  const { resetForm, setStatus, setSubmitting } = meta;

  yield call(setSubmitting, true);
  try {
    yield delay(3000);
    const res = yield call(fetch, `${url}/${payload.id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    });
    const product = yield res.json();
    yield put({ type: `${UPDATE_PRODUCT}_${SUCCESS}`, payload: product });
    yield call(resetForm, {
      name: '',
      category: '',
      price: 0,
    });
  } catch (error) {
    yield put({ type: `${UPDATE_PRODUCT}_${FAIL}`, payload: error });
    yield call(setStatus, { serverError: error.message });
  } finally {
    yield call(setSubmitting, false);
  }
}

function* loadProductRequest() {
  yield takeLatest(`${LOAD_PRODUCTS}_${REQUEST}`, loadProducts);
}

function* addProductRequest() {
  yield takeLatest(`${ADD_PRODUCT}_${REQUEST}`, addProduct);
}

function* updateProductRequest() {
  yield takeLatest(`${UPDATE_PRODUCT}_${REQUEST}`, updateProduct);
}

export default function* rootProducts() {
  yield all([fork(loadProductRequest), fork(addProductRequest), fork(updateProductRequest)]);
}
