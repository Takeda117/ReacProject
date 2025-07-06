import React from "react";


export const GenericButton = ({ onClick, className = "", buttonText}) => (
<button
    className={className}
    onClick={onClick}
    type="button"
    buttonText = {buttonText} 
>
</button>
);


