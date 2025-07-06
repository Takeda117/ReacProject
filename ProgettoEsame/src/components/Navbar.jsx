// src/components/Navbar.jsx
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './style/navbar.module.css';
import { GenericButton } from './GenericButton';


const Navbar = ({ className }) => {
    const [isAdmin, setIsAdmin] = useState(null);
    const [isLogged, setIsLogged] = useState(null);
    // const loggedAdminCheck = isLogged && isAdmin
    useEffect(() => {
        const userData = localStorage.getItem("currentUser");
        const user = userData ? JSON.parse(userData) : null;
        if (!user){
            setIsLogged(false);
        }else{
            setIsLogged(true);
        }
        if (user && user.isAdmin === true) {
            setIsAdmin(true);
        } else {
            setIsAdmin(false);
        }
    }, []);

    const logout = localStorage.removeItem("currentUser")

    return (
        <nav className={`${styles.navbar} ${className || ''}`}>
            <div className={styles.brand}>D&D 5e</div>
            <ul className={styles.menu}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/generator">Generator</Link></li>
                <li><Link to="/spells">Spells</Link></li>
                <li><Link to="/equipment">Equipment</Link></li>
                {/* {loggedAdminCheck ? <h2>Admin</h2> : <h2>User</h2>} */}
                {isLogged ? <GenericButton onClick={logout} buttonText={"Esci"} /> : <li><Link to="/Login">Login</Link></li>}
            </ul>
        </nav>
    );
};

export default Navbar;