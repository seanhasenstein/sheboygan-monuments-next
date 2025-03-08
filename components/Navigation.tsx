import styled from 'styled-components';

import NavItem from './NavItem';

type Props = {
  isOpen: boolean;
};

export default function Navigation({ isOpen }: Props) {
  return (
    <NavigationStyles
      aria-label="Sheboygan Monument and Stone Works"
      className={isOpen ? 'open' : ''}
      id="nav-menu"
    >
      <ul aria-label="Main" role="menubar">
        <NavItem to="/" label="Home" />
        <NavItem to="/services" label="Services" />
        <NavItem to="/gallery/flat-memorials" label="Gallery" />
        <NavItem to="/faq" label="Faq" className="mobile-only" />
        <NavItem to="/staff" label="Staff" />
        <NavItem to="/about" label="About" />
        <NavItem to="/contact" label="Contact" />
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
