import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { CALL_FETCH_PRODUCTS, fetchProductsSuccess, fetchProductsFailed } from '../ducks/ProductsDucks';
import ProductsAPI from '../integrations/ProductsAPI';

function* fetchProducts({ SKUs }) {
  try {
    const products = yield call(ProductsAPI.fetchProducts, SKUs);
    yield put(fetchProductsSuccess(products));
  }
  catch(error) {
    yield put(fetchProductsFailed(error));
  }
}

function* fetchProductsSagas() {
  yield takeLatest(CALL_FETCH_PRODUCTS, fetchProducts);
}

export default function* () {
  yield all([
    fork(fetchProductsSagas)
  ])
}
