
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header:FC = () => (
  <div className={styles.header}>
    <Link className={styles.logo} to="/">Logo</Link>
  </div>
);

export default Header;
