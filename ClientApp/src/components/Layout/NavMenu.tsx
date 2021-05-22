import * as React from 'react';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

import './NavMenu.scss';

const NavMenu: React.FunctionComponent = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="menu">
                <div className="button-wrapper">
                    <button onClick={toggle} className="menu-button"><FaBars /></button>
                </div>
                <div className={`menu-items ${isOpen ? 'open' : 'closed'}`}>
                    {isOpen ? <span>Menu</span> : <span>M</span>}
                    {isOpen ? <span>Long menu item</span> : <span>L</span>}
                </div>
            </div>
        </>
    );
}

export default NavMenu;
