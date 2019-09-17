import { combineReducers } from 'redux';
import application from './ducks/ApplicationDucks';
import products from './ducks/ProductsDucks';

export default combineReducers({
  application,
  products,
});
