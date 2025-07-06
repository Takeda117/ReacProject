// Redux deve gestire l'autenticazione fake sia login user ed admin. Per il register faccio una registrazione fake e la salvo nella storage.
//form: creazione personaggio, ricerca incantesimi, ricerca equip., login, register, 





import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// Import relativo e case corretto per la Home
import Home from './pages/Home';
import CharacterDetail from './pages/characterDetail';
// import CharacterGenerator from './pages/characterGenerator';
// import Spells from './pages/spells';
// import Equipment from './pages/equipment';
// import MyCharacters from './pages/myCharacters';
import Login from './pages/Login';
import Register from './pages/Register';
// import AdminDashboard from './pages/adminDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route principale */}
        <Route path="/" element={<Home />} />
        <Route path="/generator" element={<CharacterDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        {/* Altre rotte
        
        <Route path="/spells" element={<Spells />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/my-characters" element={<MyCharacters />} />
    
        <Route path="/admin" element={<AdminDashboard />} /> */}

        {/* Catch‑all: redirect alla home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
