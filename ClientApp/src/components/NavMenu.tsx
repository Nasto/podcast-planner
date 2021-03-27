import * as React from 'react';
import { useState } from 'react';
import './NavMenu.css';

const NavMenu: React.FunctionComponent = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);

    return (
        <header>
            <div>Podcast Planner</div>
            {isOpen ? <span>Menu</span> : <></>}
        </header>
    );
}

export default NavMenu;