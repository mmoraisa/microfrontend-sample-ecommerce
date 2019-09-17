import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { fetchProducts } from '../../ducks/ProductsDucks';

const App = ({ callFetchProducts }) => {

  useEffect(() => {
    callFetchProducts()
  }, []);

  return (
    <div>App</div>
  )

}

export default connect(
  () => ({}),
  dispatch => ({
    callFetchProducts() {
      dispatch(fetchProducts([]))
    }
  })
)(App);
