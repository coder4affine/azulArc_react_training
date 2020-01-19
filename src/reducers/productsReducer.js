import { SUCCESS, LOAD_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT } from '../constants/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${LOAD_PRODUCTS}_${SUCCESS}`:
      return payload;

    case `${ADD_PRODUCT}_${SUCCESS}`:
      return [payload, ...state];

    case `${UPDATE_PRODUCT}_${SUCCESS}`: {
      const index = state.findIndex(x => x.id === payload.id);
      return [...state.slice(0, index), payload, ...state.slice(index + 1)];
    }

    default:
      return state;
  }
};
