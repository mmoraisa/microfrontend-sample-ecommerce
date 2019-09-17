import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'antd';
import Product from '../../classes/Product';
import ProductsListItem from './ProductsListItem';

const ProductsList = ({ loading, products }) => {

  return (
    <List
      dataSource={products}
      loading={loading}
      renderItem={
        product => <ProductsListItem product={product} />
      }
      />
  )

}

ProductsList.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.instanceOf(Product).isRequired
  ).isRequired,
}

export default ProductsList;
