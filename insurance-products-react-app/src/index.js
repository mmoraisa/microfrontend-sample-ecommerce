import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './store';

function renderApp(SKUs) {
  ReactDOM.render(
    <Provider store={store}>
      <App SKUs={SKUs} />
    </Provider>,
    document.getElementById('root')
  );
}

renderApp(['NF130LL/A','M16541']);

serviceWorker.unregister();
