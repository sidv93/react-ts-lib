import React from 'react';

import './Button.css';
import { ButtonProps } from './Button.types';

const Button = ({ type, text, onClick }: ButtonProps) => {
    return (
        <button type="button" className={`Button Button-${type}`} onClick={onClick}>
            {text}
        </button>
    )
};

export default Button;
