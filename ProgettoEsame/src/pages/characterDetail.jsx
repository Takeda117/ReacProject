// import { Link } from 'react-router-dom';
// import styles from '../component/style/characterDetail.module.css'
// import Sidebar from '../component/Sidebar';
// import {useState } from 'react';


// const CharacterDetail = () => {
// const [selectRace, setSelectRace] = useState('');

// return (
//     <div className={styles.appLayout}>
//         <Sidebar/>
//     <main className={styles.main}>
//     <h1 className={styles.title}>Character Creator</h1>
//     <form className={styles.form} onSubmit={CharacterDetail}>
//     <div className={styles.field}>
//         <label htmlFor='race'>-- Seleziona Razza --</label>
//         <select id='race' value={selectRace} onChange={event => setSelectRace(event.target.value)}>
//             <option value=''>-- Seleziona Classe --</option>
//             <option value=''>-- Seleziona Talenti --</option>
//             <option value=''>-- Seleziona Background --</option>
//             {classes.map(c => (
//                   <option key={c.index} value={c.index}>{c.name}</option> //rivedere
//                 ))}
//         </select>  
    
//             <button type="submit" className={styles.button}>Genera</button>
//     </div>
//     </form>
//     </main>
//     </div>

//     );



// };


// export default CharacterDetail;

import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import SelectStep from "../components/SelectStep";
import styles from "../components/style/characterDetail.module.css";
import {
fetchRaces,
fetchClasses,
fetchEquipment,
fetchTalents
} from "../api/api";
import { saveProgress, loadProgress } from "../redux/localStorage";
import NewCharacterButton from "../components/NewCharacterButton";

const CharacterDetail = () => {
// Carica dal localStorage, oppure usa stato iniziale
const savedProgress = loadProgress() || {};

const [step, setStep] = useState(savedProgress.step || 1);

// Razza
const [races, setRaces] = useState([]);
const [selectedRace, setSelectedRace] = useState(savedProgress.selectedRace || "");
const [isLoadingRaces, setIsLoadingRaces] = useState(false);

// Classe
const [classes, setClasses] = useState([]);
const [selectedClass, setSelectedClass] = useState(savedProgress.selectedClass || "");
const [isLoadingClasses, setIsLoadingClasses] = useState(false);

// Talenti
const [talents, setTalents] = useState([]); 
const [selectedTalents, setSelectedTalents] = useState(savedProgress.selectedTalents || []);
const [isLoadingTalents, setIsLoadingTalents] = useState(false);

// Equipaggiamento
const [equipment, setEquipment] = useState([]);
const [selectedEquipment, setSelectedEquipment] = useState(savedProgress.selectedEquipment || []);
const [isLoadingEquipment, setIsLoadingEquipment] = useState(false);

// Errori generici
const [error, setError] = useState("");

// Caricamento dati ad ogni step 
useEffect(() => {
// Step 1: Razze
if (step === 1 && races.length === 0) {
const fetchData = async () => {
    setIsLoadingRaces(true);
    setError("");
    try {
    const data = await fetchRaces();
    setRaces(data.results || []);  // ===== DA VERIFICARE data.results =====
    } catch (err) {
    setError(err.message || "Errore caricamento razze");
    } finally {
    setIsLoadingRaces(false);
    }
};
fetchData();
}

// Step 2: Classi
if (step === 2 && classes.length === 0) {
const fetchData = async () => {
    setIsLoadingClasses(true);
    setError("");
    try {
    const data = await fetchClasses();
    setClasses(data.results || []);
    } catch (err) {
    setError(err.message || "Errore caricamento classi");
    } finally {
    setIsLoadingClasses(false);
    }
};
fetchData();
}

// Step 3: Talenti
if (step === 3 && talents.length === 0) {
const fetchData = async () => {
    setIsLoadingTalents(true);
    setError("");
    try {
    const data = await fetchTalents();
    setTalents(data.results || []);
    } catch (err) {
    setError(err.message || "Errore caricamento talenti");
    } finally {
    setIsLoadingTalents(false);
    }
};
fetchData();
}

// Step 4: Equipaggiamento
if (step === 4 && equipment.length === 0) {
const fetchData = async () => {
    setIsLoadingEquipment(true);
    setError("");
    try {
    const data = await fetchEquipment();
    setEquipment(data.results || []);
    } catch (err) {
    setError(err.message || "Errore caricamento equipaggiamento");
    } finally {
    setIsLoadingEquipment(false);
    }
};
fetchData();
}
}, [
step,
races.length,
classes.length,
talents.length,
equipment.length,
selectedClass
]);


// Salva su localStorage ogni volta che uno stato rilevante cambia
useEffect(() => {
saveProgress({
    step,
    selectedRace,
    selectedClass,
    selectedTalents,
    selectedEquipment,
});
}, [step, selectedRace, selectedClass, selectedTalents, selectedEquipment]);

//resetta il local storage per evitare bug nel passaggio allo step 1
const resetCharacter = () => {
    setStep(1);
    setSelectedRace("");
    setSelectedClass("");
    setSelectedTalents([]);
    setSelectedEquipment([]);
    setError("");
    localStorage.removeItem("characterProgress");
};

// Handler step 1: razza
const handleNextRace = event => {
event.preventDefault();
if (!selectedRace) {
    setError("Seleziona una razza.");
    return;
}
setError("");
setStep(2);
};

// Handler step 2: classe
const handleNextClass = event => {
event.preventDefault();
if (!selectedClass) {
    setError("Seleziona una classe.");
    return;
}
setError("");
setStep(3);
};

// Handler step 3: talenti (per esempio multipla selezione)
const handleNextTalents = event => {
event.preventDefault();
if (selectedTalents.length === 0) {
    setError("Seleziona almeno un talento.");
    return;
}
setError("");
setStep(4);
};

// Handler step 4: equipaggiamento
const handleNextEquipment = event => {
event.preventDefault();
if (selectedEquipment.length === 0) {
    setError("Seleziona almeno un oggetto di equipaggiamento.");
    return;
}
setError("");
setStep(5);
};

// Handler di selezione multipla per talenti/equip
const handleSelectMultiple = setter => event => {
const selected = Array.from(event.target.selectedOptions, option => option.value);
setter(selected);
};

// 
const goToPreviousStep = () => setStep((prev) => Math.max(1, prev - 1));


// Render degli step
const renderStep = () => {
switch (step) {
    case 1:
    return (
        <SelectStep
        label="Seleziona Razza:"
        options={races}
        value={selectedRace}
        onChange={event => setSelectedRace(event.target.value)}
        isLoading={isLoadingRaces}
        error={error}
        fieldId="race"
        onSubmit={handleNextRace}
        buttonNextText="Avanti"
        buttonPreviousText="Indietro"
        onPrevious={goToPreviousStep}
        disablePrevious={step === 1}
        />
    );
    case 2:
    return (
        <SelectStep
        label="Seleziona Classe:"
        options={classes}
        value={selectedClass}
        onChange={event => setSelectedClass(event.target.value)}
        isLoading={isLoadingClasses}
        error={error}
        fieldId="class"
        onSubmit={handleNextClass}
        buttonNextText="Avanti"
        buttonPreviousText="Indietro"
        onPrevious={goToPreviousStep}

        />
    );
    case 3:
    return (
        <>
        <SelectStep
        label="Seleziona Talenti:"
        options={talents}
        value={selectedTalents}
        onChange={handleSelectMultiple(setSelectedTalents)}
        isLoading={isLoadingTalents}
        error={error}
        fieldId="talents"
        onSubmit={handleNextTalents}
        buttonNextText="Avanti"
        buttonPreviousText="Indietro"
        onPrevious={goToPreviousStep}
        multiple={true}
        size={Math.min(5, talents.length)}
        
/>
</>


    );
    case 4:
    return (
        <>
        <SelectStep
        label="Seleziona Equipaggiamento:"
        options={equipment}
        value={selectedEquipment}
        onChange={handleSelectMultiple(setSelectedEquipment)}
        isLoading={isLoadingEquipment}
        error={error}
        fieldId="equipment"
        onSubmit={handleNextEquipment}
        buttonNextText="Avanti"
        buttonPreviousText="Indietro"
        onPrevious={goToPreviousStep}
        multiple={true}
        size={Math.min(5, equipment.length)}
        
/>
</>

    );
    case 5:
    return (
        <div>
        <h2>Personaggio generato!</h2>
        <ul>
            <li><b>Razza:</b> {selectedRace}</li>
            <li><b>Classe:</b> {selectedClass}</li>
            <li><b>Talenti:</b> {selectedTalents.join(", ")}</li>
            <li><b>Equipaggiamento:</b> {selectedEquipment.join(", ")}</li>
        </ul>
        {/* Qui metterai la scheda visiva */}
        <NewCharacterButton
        onClick={resetCharacter} buttonText={"Crea nuovo personaggio"}/>
        </div>
    );
    default:
    return null;
}
};

return (
<div className={styles.appLayout}>
    <Sidebar />
    <main className={styles.main}>
    <h1 className={styles.title}>Character Creator</h1>
    {renderStep()}
    </main>
</div>
);
};

export default CharacterDetail;


