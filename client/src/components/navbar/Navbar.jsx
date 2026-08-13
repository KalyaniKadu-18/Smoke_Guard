import React from 'react';
import styles from './Navbar.module.css';
import { FaMagnifyingGlass } from "react-icons/fa6";

function Navbar() {
  return (
    <div className={styles.MainDiv}>
      <div className={styles.parentDiv}>detect</div>
      <div><FaMagnifyingGlass />search</div>
      <div>login/signup</div>
    </div>
  )
}

export default Navbar;