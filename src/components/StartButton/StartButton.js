import React from 'react';
import './startbutton.css';
import start from '../../assets/start.svg';

const startButton = props => {
    return (
        <div onClick={props.clicked} className="Button_container">
            <img alt="start" src={start} />
            <div className="StartButton">
                {props.children}
            </div>
        </div>
    );
}

export default startButton;