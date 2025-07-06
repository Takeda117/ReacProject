// src/pages/Login.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../components/style/login.module.css';
import {GenericButton} from '../components/GenericButton';


const Login = () => {
const [focusField, setFocusField] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

// Credenziali admin fisse

const ADMIN = { email: 'admin@domain.com', password: 'admin123', isAdmin: true };

const handleSubmit = (e) => {
e.preventDefault();
// Login admin
if (email === ADMIN.email && password === ADMIN.password) {
    localStorage.setItem('currentUser', JSON.stringify({ email, isAdmin: true }));
    navigate('/AdminDashboard');
    return;
}
// Login user fake: controlla utenti registrati in localStorage
const users = JSON.parse(localStorage.getItem('users') || '[]');
const found = users.find(u => u.email === email && u.password === password);
if (found) {
    localStorage.setItem('currentUser', JSON.stringify({ email, isAdmin: false }));
    navigate('/');
} else {
    alert('YOU SHALL NOT PASS! Registrati prima.');
}
};

return (
<div className={styles.page}>
    <div className={styles.container}>
    <div className={styles.left}>
        <div className={styles.login}>Login</div>
        <div className={styles.eula}>
        You can try to insert your admin or user credentials
        </div>
    </div>
    <div className={`${styles.right} ${styles[focusField]}`}>  
        
        <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onFocus={() => setFocusField('email')}
            onBlur={() => setFocusField('')}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            required
        />

        <label htmlFor="password">Password</label>
        <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onFocus={() => setFocusField('password')}
            onBlur={() => setFocusField('')}
            required
        />

        <button
            type="submit"
            className={styles.submit}
            onFocus={() => setFocusField('submit')}
            onBlur={() => setFocusField('')}
        >
            I WANNA GO INSIDE!
        </button>
        <Link to="/Register">
            <GenericButton/>
        </Link>
        </form>

    </div>
    </div>
</div>
);
};

export default Login;
