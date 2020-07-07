import React from 'react';
import button from './button.css';

// Button
let Button = props => {   
    return(
        <button 
        className={`${props.variant} 
        ${props.align ? props.align : 'left'} btn `} 
        onClick={props.click ? props.click : null}>{props.children}</button>
    )
}

export default Button;