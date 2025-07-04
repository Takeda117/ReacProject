// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style/Sidebar.module.css'

const Sidebar = ({ className }) => (
  <aside className={`${styles.sidebar} ${className || ''}`}>
    <h2 className={styles.title}>Menu</h2>
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/" end activeClassName={styles.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/generator" activeClassName={styles.active}>
            Character Generator
          </NavLink>
        </li>
        <li>
          <NavLink to="/spells" activeClassName={styles.active}>
            Spells
          </NavLink>
        </li>
        <li>
          <NavLink to="/equipment" activeClassName={styles.active}>
            Equipment
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-characters" activeClassName={styles.active}>
            My Characters
          </NavLink>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;