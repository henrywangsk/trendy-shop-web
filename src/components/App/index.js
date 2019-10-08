import React from 'react';

import NavBar from '../NavBar';
import Shelf from '../Shelf';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const App = () => (
  <React.Fragment>
    <NavBar />
    <main className={cx('main')}>
      <Shelf />
    </main>
  </React.Fragment>
);

export default App;
