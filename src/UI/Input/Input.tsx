import React from "react";
import './Input.css';

interface IInput {
    type: string,
    placeholder: string,
    onChange: (inputElement: any) => void,
    onKeyUp: (inputKey: any) => void
}
const Input: React.FunctionComponent<IInput> = ({type, placeholder, onChange, onKeyUp}) => {
    return (
        <input type={type} placeholder={placeholder} onChange={(event) => onChange(event)} onKeyUp={(event) => onKeyUp(event)}/>
    )
}

export default Input;