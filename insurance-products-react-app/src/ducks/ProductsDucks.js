import Product from "../classes/Product";

/* Action Types */
export const CALL_FETCH_PRODUCTS = 'CALL_FETCH_PRODUCTS';
export const FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';

/* Action Creators */
export function fetchProducts(SKUs) {
  return { type: CALL_FETCH_PRODUCTS, SKUs }
}

export function fetchProductsFailed(error) {
  return { type: FETCH_PRODUCTS_FAILED, error }
}

export function fetchProductsSuccess(products) {
  return { type: FETCH_PRODUCTS_SUCCESS, products }
}

/* Initial State */
const INITIAL_STATE = {
  data: [],
  errors: {
    fetch: null
  },
  loading: {
    fetch: false
  }
}

/* Reducer */
export default function(state = INITIAL_STATE, action) {

  const { error, products, type } = action;

  switch(type) {
    case CALL_FETCH_PRODUCTS:
      return {
        ...state,
        errors: {
          ...state.errors,
          fetch: null,
        },
        loading: {
          ...state.loading,
          fetch: true,
        },
      }
    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        errors: {
          ...state.errors,
          fetch: error,
        },
        loading: {
          ...state.loading,
          fetch: false,
        },
      }
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        data:
          products.map(product =>
            new Product(product.id, product.name)),
        errors: {
          ...state.errors,
          fetch: null,
        },
        loading: {
          ...state.loading,
          fetch: false,
        },
      }
    default:
      return state
  }

}
