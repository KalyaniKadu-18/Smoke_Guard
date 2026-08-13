import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.MainDiv}>
      <div className={styles.parentDiv}>detect</div>
      <div>search</div>
      <div>login/signup</div>
    </div>
  )
}

export default Navbar;