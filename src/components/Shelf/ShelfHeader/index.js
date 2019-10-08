import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);
export default function ShelfHeader({ productsLength }) {
  return (
    <div className={cx('shelf-container-header')}>
      <span>{productsLength} Product(s) found.</span>
    </div>
  );
}

ShelfHeader.propTypes = {
  productsLength: PropTypes.number.isRequired
};
