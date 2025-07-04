import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import styles from "../components/style/home.module.css";

const Home = () => (
<div className={styles.appLayout}>
    <Sidebar className={styles.Sidebar}/>
    <div className={styles.mainContent}>
    <Navbar className={styles.Navbar}/>
        <main className={styles.main}>
        <h1 className={styles.title}>D&D 5e Character Generator</h1>
        <p className={styles.description}>
        Benvenuto! Esplora le funzionalità dell'app per creare e gestire i tuoi personaggi di Dungeons & Dragons 5ª edizione.
        </p>
        <div className={styles.grid}>
            <Link to="/generator" className={styles.card}>
            <h2 className={styles.cardTitle}>Character Generator</h2>
            <p className={styles.cardText}>Genera un nuovo personaggio personalizzato.</p>
            </Link>
        <Link to="/spells" className={styles.card}>
            <h2 className={styles.cardTitle}>Spells</h2>
            <p className={styles.cardText}>Cerca e scopri incantesimi per nome.</p>
        </Link>
        <Link to="/equipment" className={styles.card}>
            <h2 className={styles.cardTitle}>Equipment</h2>
            <p className={styles.cardText}>Filtra equipaggiamento per categoria.</p>
        </Link>
        <Link to="/my-characters" className={styles.card}>
            <h2 className={styles.cardTitle}>My Characters</h2>
            <p className={styles.cardText}>Visualizza i personaggi salvati.</p>
        </Link>
        <Link to="/login" className={styles.card}>
            <h2 className={styles.cardTitle}>Login</h2>
            <p className={styles.cardText}>Accedi per salvare e gestire i tuoi dati.</p>
        </Link>
        <Link to="/admin" className={styles.card}>
            <h2 className={styles.cardTitle}>Admin Dashboard</h2>
            <p className={styles.cardText}>Gestisci homebrew e contenuti extra.</p>
        </Link>
        </div>
    </main>
    </div>
</div>
);

export default Home;