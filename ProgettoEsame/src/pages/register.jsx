// src/pages/Register.jsx
import React, { useState } from 'react';
import styles from '../components/style/register.module.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
const [focusField, setFocusField] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const navigate = useNavigate();

const handleSubmit = (e) => {
e.preventDefault();
// salva i dati nel localStorage
const user = { email, password };
const users = JSON.parse(localStorage.getItem('users') || '[]');
users.push(user);
localStorage.setItem('users', JSON.stringify(users));
alert('Registrazione avvenuta con successo!');
navigate("/login");
setEmail('');
setPassword('');
};

return (
<div className={styles.page}>
    <div className={styles.container}>
    <div className={styles.left}>
        <div className={styles.header}>Register</div>
        <div className={styles.info}>
        Insert Email and password to create a new account.
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
            Create Account
        </button>
        </form>
    </div>
    </div>
</div>
);
};

export default Register;