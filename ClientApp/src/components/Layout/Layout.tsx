import * as React from 'react';
import NavMenu from './NavMenu';

import './Layout.scss';

const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <div className="app-wrapper">
        <NavMenu />
        <div className="app-content">
          <header>
            <div className="title">Podcast Planner</div>
          </header>
          <div className="current-view">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
