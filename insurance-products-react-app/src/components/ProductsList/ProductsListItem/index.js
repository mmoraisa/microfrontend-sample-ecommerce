import React from 'react';
import PropTypes from 'prop-types';
import Product from '../../../classes/Product';

const ProductsListItem = ({ product }) => {

  return (
    <div>{product.getName()}</div>
  )

}

ProductsListItem.propTypes = {
  product: PropTypes.instanceOf(Product).isRequired,
}

export default ProductsListItem;
