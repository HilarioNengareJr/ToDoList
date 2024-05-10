import React from 'react';

const ThemeBtn = ({hue, isThemeActive, onClick}) => {

    const handleClick = () => {
        onClick();
    }

    return (
        
        <button className={isThemeActive ? "theme-btn active" : "theme-btn"} style={{'--hue': hue}} onClick={handleClick} data-hue={hue}>

        </button>
    );
}

export default ThemeBtn;