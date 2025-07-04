// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style/navbar.module.css';

const Navbar = ({ className }) => (
<nav className={`${styles.navbar} ${className || ''}`}>
    <div className={styles.brand}>D&D 5e</div>
    <ul className={styles.menu}>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/generator">Generator</Link></li>
    <li><Link to="/spells">Spells</Link></li>
    <li><Link to="/equipment">Equipment</Link></li>
    </ul>
</nav>
);

export default Navbar;