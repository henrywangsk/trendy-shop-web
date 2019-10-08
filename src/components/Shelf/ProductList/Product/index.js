import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

function Product({ product, addProduct }) {
  product.quantity = 1;

  const formattedPrice = useMemo(() => {
    const formated = formatPrice(product.price, product.currencyId);
    const splitIdx = formated.length - 3;
    return [formated.substr(0, splitIdx), formated.substr(splitIdx, 3)];
  }, [product.price, product.currencyId]);

  let productInstallment;
  if (!!product.installments) {
    const installmentPrice = product.price / product.installments;

    productInstallment = (
      <div className="installment">
        <span>or {product.installments} x</span>
        <b>
          {product.currencyFormat}
          {formatPrice(installmentPrice, product.currencyId)}
        </b>
      </div>
    );
  }

  return (
    <div
      className={cx('shelf-item')}
      onClick={() => addProduct(product)}
      data-sku={product.sku}
    >
      {product.isFreeShipping && (
        <div className="shelf-stopper">Free shipping</div>
      )}
      <Thumb
        src={require(`../../../../static/products/${product.sku}_1.jpg`)}
        alt={product.title}
      />
      <p className={cx('shelf-item__title')}>{product.title}</p>
      <div className={cx('shelf-item__price')}>
        <div className={cx('val')}>
          <small>{product.currencyFormat}</small>
          <b>{formattedPrice[0]}</b>
          <span>{formattedPrice[1]}</span>
        </div>
        {productInstallment}
      </div>
      <div className={cx('shelf-item__buy-btn')}>Add to cart</div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);
