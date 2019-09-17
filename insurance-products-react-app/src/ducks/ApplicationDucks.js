/* Action Type */
export const CHANGE_SKUS = 'CHANGE_SKUS';
export const READY = 'READY';

/* Action Creator */
export function changeSKUs(SKUs) {
  return { type: CHANGE_SKUS, SKUs }
}

/* Initial State */
const INITIAL_STATE = {
  SKUs: [],
};

/* Reducer */
export default function(state = INITIAL_STATE, action) {

  const { type, SKUs } = action;

  switch(type) {
    case CHANGE_SKUS:
      return {
        ...state,
        SKUs
      }
    default:
      return state
  }

}
