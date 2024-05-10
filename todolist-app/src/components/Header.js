import React, { useState } from 'react';
import ThemeBtn from './ThemeBtn';
import './Header.css';


const Header = () => {

    const [currentDate, setCurrentDate] = useState(new Date());
    const [isDropdownMenuActive, setDropdownMenuActive] = useState(false);
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);

    const [buttons, setButtons] = useState([
        { hue: 227, isThemeActive: false },
        { hue: 298, isThemeActive: false },
        { hue: 344, isThemeActive: false },
        { hue: 2, isThemeActive: false },
        { hue: 153, isThemeActive: false },
        { hue: 177, isThemeActive: false },
        { hue: 206, isThemeActive: false }]);
    const [isTogglerActive, setTogglerActive] = useState(false);
    const [isModalActive, setModalActive] = useState(false);

    const formattedDate = currentDate.toLocaleDateString('en-US', {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const toggleTheme = (index) => {
        const updatedButtons = buttons.map((button, i) => {
            if (index === i) {
                return { ...button, isThemeActive: true };
            } else {
                return { ...button, isThemeActive: false };
            }
        });

        setButtons(updatedButtons);
        setActiveButtonIndex(index);
    }


    const toggleMenu = () => {
        setTogglerActive(!isTogglerActive);
        setDropdownMenuActive(!isDropdownMenuActive);
    };

    const toggleModal = () => setModalActive(!isModalActive);

    const toggleCallBacks = () => {
        toggleMenu();
        toggleModal();
    }


    return (
        <header className='header'>
            <div>
                <h1 className='h1 header-title'>
                    My Day
                </h1>
                <p className='header-time'>
                    {formattedDate}
                </p>

                <div className='dropdown-wrapper'>
                    <button className={isTogglerActive ? 'menu-btn active' : 'menu-btn'} aria-label='Toggle menu' onClick={toggleMenu}>
                        <ion-icon name="ellipsis-horizontal" aria-hidden="true"></ion-icon>
                    </button>

                    {/* Dropdown menu */}

                    <div className={isDropdownMenuActive ? 'dropdown-container active' : 'dropdown-container'} >
                        <ul className='dropdown-list'>
                            <li className='dropdown-item'>
                                <p className='item-title'>
                                    Theme
                                </p>

                                <div className='theme-btn-group'>
                                    {
                                        buttons.map((button, index) =>
                                            <ThemeBtn key={button.hue} hue={button.hue} isThemeActive={button.isThemeActive} onClick={() => toggleTheme(index)} />)
                                    }
                                </div>
                            </li>
                            <li>
                                <button className={isTogglerActive || isModalActive ? 'dropdown-link active' : 'dropdown-link'} onClick={toggleCallBacks}>
                                    <ion-icon name="information-circle-outline"></ion-icon>
                                    <span className='span'>App info</span>
                                </button>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
        </header>
    );
}

export default Header;