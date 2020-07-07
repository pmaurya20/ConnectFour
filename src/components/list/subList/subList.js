import React from 'react';

let SubList = props => {
    return(
        <li className="grey-list d-flex radio">
        <div className="radio">
        <input id={props.listId} name={props.inputName} value={props.label} type="radio" onChange={props.radioChange}/>
          <label htmlFor={props.listId} className="radio-label">{props.label}</label>
        </div>                
      </li>
    )
}

export default SubList;