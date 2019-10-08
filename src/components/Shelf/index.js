import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '../../services/shelf/actions';
import { Spinner } from 'reactstrap';
import ShelfHeader from './ShelfHeader';
import ProductList from './ProductList';

import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

function Shelf({ products, fetchProducts }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetchProducts(() => setIsLoading(false));
  }, []);

  const shelfProducts = (
    <>
      <ShelfHeader productsLength={products.length} />
      <ProductList products={products} />
    </>
  );

  return (
    <div className={cx('shelf-container')}>
      {isLoading ? <Spinner className={cx('spinner')} /> : shelfProducts}
    </div>
  );
}

Shelf.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
};

const mapStateToProps = ({ shelf }) => ({
  products: shelf.products
});

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Shelf);
