'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  to: string;
  label: string;
  className?: string;
};

export default function NavItem({ to, label, className }: Props) {
  const pathname = usePathname();
  const isActive =
    pathname === to ||
    (label.toLowerCase() === 'gallery' && pathname.startsWith('/gallery'));

  return (
    <NavItemStyles className={className ? className : ''}>
      <Link href={to} role="menuitem" className={isActive ? 'active' : ''}>
        {label}
      </Link>
    </NavItemStyles>
  );
}

const NavItemStyles = styled.li`
  &.mobile-only {
    display: none;
  }

  a {
    display: block;
    padding: 0.875rem 0.5rem;
    color: #555;
    letter-spacing: 0.0125em;
    font-weight: 500;

    &.active,
    &.active:hover {
      color: #000;
      font-weight: 600;
      letter-spacing: 0;
    }

    &:hover {
      color: #000;
    }
  }

  @media (max-width: 900px) {
    &.mobile-only {
      display: block;
    }

    a {
      padding: 1rem 0;
      font-family: 'Unna', Georgia, 'Times New Roman', Times, serif;
      font-size: 1.375rem;
      color: #18181b;
      border-bottom: 1px solid #e5e5e5;
    }

    &:first-of-type {
      border-top: 1px solid #e5e5e5;
    }
  }
`;
