import React from 'react';

const ThemeBtn = ({ hue, isThemeActive, onClick }) => {
    const handleClick = () => {
        onClick(hue);
        document.documentElement.style.setProperty('--hue', hue);
    };

    return (
        <button
            className={isThemeActive ? 'theme-btn active' : 'theme-btn'}
            style={{ '--hue': hue }}
            onClick={handleClick}
        ></button>
    );
};

export default ThemeBtn;
