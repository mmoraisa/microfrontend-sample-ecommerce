import { all, fork } from 'redux-saga/effects';
import productsSagas from './sagas/ProductsSagas';

export default function* () {
  yield all([
    fork(productsSagas)
  ])
}
