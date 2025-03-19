'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Navigation from './Navigation';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const prevPathRef = useRef(pathname);

  useEffect(() => {
    // Only run when pathname changes, not on initial render
    if (prevPathRef.current !== pathname) {
      setIsOpen(false);

      // Smooth scroll to top of page
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // Update the previous pathname reference
      prevPathRef.current = pathname;
    }
  }, [pathname]);

  return (
    <HeaderStyles>
      <div className={`header-container ${isOpen ? 'open' : ''}`}>
        <div className="top-row">
          <div className="logo">
            <Link href="/">
              <h1>
                Sheboygan
                <br />
                Monuments
              </h1>
            </Link>
          </div>
          <button
            type="button"
            className="mobile-nav-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen ? 'true' : 'false'}
            aria-controls="nav-menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
            <span className="sr-only">Navigation Menu</span>
          </button>
        </div>
        <Navigation isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
      </div>
    </HeaderStyles>
  );
}

const HeaderStyles = styled.header`
  position: relative;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

  h1 {
    margin: 0;
    padding: 0.3125rem;
    font-size: 1.75rem;
    line-height: 0.85;
    color: #171717;
  }

  .header-container {
    margin: 0 auto;
    padding: 0.125rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1072px;
    width: 100%;
  }

  .mobile-nav-button {
    display: none;
  }

  @media (max-width: 900px) {
    .header-container {
      padding-bottom: 1.125rem;
      flex-direction: column;
      justify-content: flex-start;

      &.open {
        height: 100vh;
      }
    }

    .top-row {
      padding: 1.25rem 0 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .mobile-nav-button {
      padding: 0.5rem;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      color: #a3a3a3;
      transition: color 0.2s ease;

      svg {
        height: 1.5rem;
        width: 1.5rem;
      }

      &:hover {
        color: #333;
      }
    }
  }
`;
