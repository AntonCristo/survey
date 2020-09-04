import React from 'react';
import './startbutton.css';

const startButton = props => {
    return (
        <button onClick={props.clicked} className="StartButton">
            {props.children}
        </button>
    );
}

export default startButton;