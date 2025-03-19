'use client';

import styled from 'styled-components';

import NavItem from './NavItem';

type Props = {
  isOpen: boolean;
  closeMenu: () => void;
};

export default function Navigation({ isOpen, closeMenu }: Props) {
  return (
    <NavigationStyles
      aria-label="Sheboygan Monument and Stone Works"
      className={isOpen ? 'open' : ''}
      id="nav-menu"
    >
      <ul aria-label="Main" role="menubar">
        <NavItem to="/" label="Home" closeMenu={closeMenu} />
        <NavItem to="/services" label="Services" closeMenu={closeMenu} />
        <NavItem
          to="/gallery/flat-memorials"
          label="Gallery"
          closeMenu={closeMenu}
        />
        <NavItem
          to="/faq"
          label="Faq"
          className="mobile-only"
          closeMenu={closeMenu}
        />
        <NavItem to="/staff" label="Staff" closeMenu={closeMenu} />
        <NavItem to="/about" label="About" closeMenu={closeMenu} />
        <NavItem to="/contact" label="Contact" closeMenu={closeMenu} />
      </ul>
    </NavigationStyles>
  );
}

const NavigationStyles = styled.nav`
  max-width: 38rem;
  width: 100%;

  ul {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 900px) {
    display: none;
    max-width: unset;

    &.open {
      display: block;
    }

    ul {
      flex-direction: column;
    }
  }
`;
