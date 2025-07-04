// src/components/SelectStep.jsx
import React from "react";
import styles from "../components/style/SelectStep.module.css"

const SelectStep = ({
label,
options,
value,
onChange,
isLoading,
error,
fieldId,
onSubmit,
onPrevious,
buttonNextText = "Avanti",
ButtonPreviousText = "Indietro",
disablePrevious = false,
multiple = false,      
size,                  
}) => (
<form className={styles.form} onSubmit={onSubmit}>
<div className={styles.field}>
    <label htmlFor={fieldId}>{label}</label>
    {isLoading ? (
    <p>API lenta, in caricamento...</p>
    ) : (
    <select
        id={fieldId}
        value={value}
        onChange={onChange}
        multiple={multiple}
        size={size || 1}
    >
        {!multiple && <option value="">-- Scegli --</option>}
        {options.map(option => (
        <option key={option.index} value={option.index}>
            {option.name}
        </option>
        ))}
    </select>
    )}
</div>
{error && <p className={styles.error}>{error}</p>}
<button
    type="button"
    className={styles.button}
    onClick={onPrevious}
    disabled={disablePrevious}
    >
    {ButtonPreviousText}
    </button>
<button type="submit" className={styles.button}>{buttonNextText}</button>


</form>
);


export default SelectStep;
