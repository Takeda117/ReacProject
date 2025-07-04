import React from "react";
import styles from './style/SelectStep.module.css';

const NewCharacterButton = ({ onClick, className = "", buttonText}) => (
<button
    className={`${styles.newCharacterBtn} ${className}`}
    onClick={onClick}
    type="button"
    buttonText = "Crea nuovo personaggio" //default
>
    {buttonText}
</button>
);

export default NewCharacterButton;
