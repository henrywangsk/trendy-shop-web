import React, { useState, useEffect, useMemo } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Badge
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faMoneyCheckAlt
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCart } from '../../services/cart/actions';
import CartProduct from './CartProduct';
import { formatPrice } from '../../services/util';

import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

function ShoppingCart({ updateCart, cartProducts, newProduct, cartTotal }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const { totalPrice, productQuantity, currencyFormat, currencyId } = cartTotal;

  const addProductEffect = product => {
    if (!product) {
      return;
    }

    let productAlreadyInCart = false;
    for (const cp of cartProducts) {
      if (cp.id === product.id) {
        cp.quantity += product.quantity;
        productAlreadyInCart = true;
        break;
      }
    }

    if (!productAlreadyInCart) {
      cartProducts.push(product);
    }

    updateCart(cartProducts);
  };

  const removeProduct = product => {
    if (!product) {
      return;
    }
    const index = cartProducts.findIndex(p => p.id === product.id);
    if (index >= 0) {
      cartProducts.splice(index, 1);
      updateCart(cartProducts);
    }
  };

  useEffect(() => {
    addProductEffect(newProduct);
  }, [newProduct]);

  const toCheckout = () => {
    if (!productQuantity) {
      alert('Add some product in the cart!');
    } else {
      alert(
        `Checkout - Subtotal: ${currencyFormat} ${formatPrice(
          totalPrice,
          currencyId
        )}`
      );
    }
  };

  const products = cartProducts.map(p => {
    return <CartProduct product={p} removeProduct={removeProduct} key={p.id} />;
  });

  const subTotal = useMemo(() => {
    const formattedPrice = formatPrice(totalPrice, currencyId);
    return `${currencyFormat} ${formattedPrice}  (${productQuantity} items)`;
  }, [totalPrice, currencyId, currencyFormat]);

  return (
    <>
      <span className={cx('cart-container')} onClick={toggle}>
        <FontAwesomeIcon icon={faShoppingCart} color="white" size="lg" />
        <Badge color="danger" pill className={cx('counter')}>
          {productQuantity}
        </Badge>
      </span>
      <Modal isOpen={isCartOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Total : {subTotal}</ModalHeader>
        <ModalBody className={cx('modal-body')}>{products}</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={toCheckout}
            disabled={!productQuantity}
          >
            <FontAwesomeIcon icon={faMoneyCheckAlt} /> Checkout
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
ShoppingCart.propTypes = {
  updateCart: PropTypes.func.isRequired,
  cartProducts: PropTypes.array.isRequired,
  newProduct: PropTypes.object,
  cartTotal: PropTypes.object
};

ShoppingCart.defaultProps = {
  newProduct: undefined,
  productToRemove: undefined,
  cartTotal: {}
};

const mapStateToProps = ({ cart }) => ({
  cartProducts: cart.products,
  newProduct: cart.productToAdd,
  cartTotal: cart.total
});

export default connect(
  mapStateToProps,
  { updateCart }
)(ShoppingCart);
