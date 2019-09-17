import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { fetchProducts } from '../../ducks/ProductsDucks';
import ProductsList from '../../components/ProductsList';
import Product from '../../classes/Product';

const App = ({ callFetchProducts, products, SKUs }) => {

  useEffect(() => {
    callFetchProducts(SKUs)
  }, [callFetchProducts, SKUs]);

  return (
    <ProductsList
      loading={products.loading.fetch}
      products={products.data} />
  )

}

App.propTypes = {
  callFetchProducts: PropTypes.func.isRequired,
  products: PropTypes.shape({
    loading: PropTypes.shape({
      fetch: PropTypes.bool.isRequired,
    }).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.instanceOf(Product).isRequired
    ).isRequired,
  }).isRequired,
  SKUs: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
}

export default connect(
  ({ application, products }) => ({
    products,
    SKUs: application.SKUs,
  }),
  dispatch => ({
    callFetchProducts(SKUs) {
      dispatch(fetchProducts(SKUs))
    }
  })
)(App);
