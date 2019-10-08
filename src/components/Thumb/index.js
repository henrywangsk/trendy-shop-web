import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

export default function Thumb({ src, alt, title, small }) {
  return (
    <div className={cx('normal', { small: small })}>
      <img src={src} alt={alt} title={title} />
    </div>
  );
}

Thumb.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string.isRequired,
  small: PropTypes.bool
};

Thumb.defaultProps = {
  small: false
};
