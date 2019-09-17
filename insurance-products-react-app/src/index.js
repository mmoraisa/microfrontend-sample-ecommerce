import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { CHANGE_SKUS, READY, changeSKUs } from './ducks/ApplicationDucks';

if (window.parent) {
  window.parent.postMessage({ type: READY }, '*');
}

window.addEventListener('message', function (event) {

  switch(event.data.type) {
    case CHANGE_SKUS:
      store.dispatch(changeSKUs(event.data.SKUs));
      break;
    default:
      break;
  }

})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
