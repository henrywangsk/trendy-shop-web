import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Thumb from './../../Thumb';
import { formatPrice } from '../../../services/util';

import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

export default function CartProduct({ product, removeProduct }) {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const {
    price,
    title,
    availableSizes,
    sku,
    style,
    quantity,
    currencyFormat
  } = product;
  const productPrice = useMemo(() => formatPrice(price), [price]);

  return (
    <div
      className={cx('cart-item', { mouseover: isMouseOver })}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseOut={() => setIsMouseOver(false)}
    >
      <div
        className={cx('cart-item__del')}
        onClick={() => removeProduct(product)}
      />
      <Thumb
        src={require(`../../../static/products/${sku}_2.jpg`)}
        alt={title}
        small
      />
      <div className={cx('cart-item__details')}>
        <p className={cx('title')}>{title}</p>
        <p className={cx('desc')}>
          {`${availableSizes[0]} | ${style}`} <br />
          Quantity: {quantity}
        </p>
      </div>
      <div className={cx('cart-item__price')}>
        <p>{`${currencyFormat}  ${productPrice}`}</p>
      </div>
    </div>
  );
}

CartProduct.propTypes = {
  product: PropTypes.object.isRequired,
  removeProduct: PropTypes.func.isRequired
};
