import React from 'react';

const ThemeBtn = ({hue, isThemeActive}) => {

    const ButtonClass = isThemeActive ? "theme-btn active" : "theme-btn";

    return (
        <button className={ButtonClass} style={{'--hue': hue}} data-hue={hue}>

        </button>
    );
}

export default ThemeBtn;