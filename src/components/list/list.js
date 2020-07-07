import React from 'react';

// FullModal List
let TwoPlayerList = props => {
    return (
        <li className={`${props.status} d-flex align-items-center`}>
            {/* Avatar Image */}
            <div className="avatarImage">
                {props.fileHidden ? null : <input type="file" onChange={props.imageChange}/>}
                <img src={props.imagePreview} alt="User" />
            </div>
            {/* Player Details */}
            <div className="PlayerDetails">
                <p>{props.subText}</p>
                <form onClick={props.click ? props.click : null}>
                    <input type="text" name={props.inputName} value={props.inputValue} onChange={props.change} />
                </form>
            </div>
        </li>
    )
}

export default TwoPlayerList;