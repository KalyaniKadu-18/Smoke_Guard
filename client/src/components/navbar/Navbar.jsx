import React from 'react';
import styles from './Navbar.module.css';
import { FaMagnifyingGlass } from "react-icons/fa6";

function Navbar() {
  return (
    <div className={styles.MainDiv}>

      <div className={styles.parentDiv}>
        detect
      </div>

      <div className={styles.searchDiv}>
        <FaMagnifyingGlass />
        <input placeholder='Search...'/>
        
      </div>

      <div className={styles.loginDiv}>
        <button>Login</button>
        <button>Signup</button>
      </div>

    </div>
  )
}

export default Navbar;