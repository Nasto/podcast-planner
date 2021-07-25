import { INavLinkGroup, INavStyles, Nav } from '@fluentui/react';
import { push } from 'connected-react-router';
import { Path } from 'history';
import { connect } from 'react-redux';

import './NavMenu.scss';

const NavMenu = (props: any) => {
  const navLinkGroup: INavLinkGroup[] = [
    {
      name: 'Menu',
      links: [
        {
          name: 'Dashboard',
          url: '/',
        },
        {
          name: 'New Session',
          url: '/AddSession',
        },
      ],
    },
  ];

  const navStyle: Partial<INavStyles> = {
    root: {
      padding: '15px',
      borderRight: '1px solid #C5C1C0',
      height: 'calc(100vh - 30px)',
    },
  };

  return (
    <Nav
      ariaLabel="Main navigation menu"
      onLinkClick={(event, element) => {
        event?.preventDefault();
        props.push(element?.url || '/');
      }}
      groups={navLinkGroup}
      styles={navStyle}
    />
  );
};

export default connect(null, { push })(NavMenu);
