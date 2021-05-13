import * as React from 'react';
import NavMenu from './NavMenu';

import "./Layout.scss"

const Layout: React.FunctionComponent = ({children}) => {
    return (
        <>
            <NavMenu />
            <div className="app-wrapper">
                <div className="app-content">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Layout;