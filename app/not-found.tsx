'use client';

import Link from 'next/link';
import styled from 'styled-components';

export default function FourOhFour() {
  return (
    <>
      <FourOhFourStyles>
        <div className="container">
          <h2>Page not found</h2>
          <p>Sorry, the page you’re looking for does not exist.</p>
          <div className="actions">
            <Link href="/contact" className="primary-link">
              Send us a message
            </Link>
            <Link href="/" className="secondary-link">
              Go back home
            </Link>
          </div>
        </div>
      </FourOhFourStyles>
    </>
  );
}

const FourOhFourStyles = styled.div`
  position: relative;
  padding: 3rem 1.5rem 4rem;
  min-height: calc(100vh - 245px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  .container {
    margin: -8rem 0 0;
    padding: 2.5rem 3rem;
    max-width: 36rem;
    width: 100%;
    background-color: #fff;
    border-radius: 0.0625rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  h2 {
    margin: 0 0 0.75rem;
    font-size: 1.75rem;
  }

  p {
    margin: 0 auto 1.5rem;
    max-width: 15rem;
    width: 100%;
    line-height: 1.5;
  }

  .actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .primary-link,
  .secondary-link {
    padding: 0.75rem 1.25rem;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 0.9375rem;
    font-weight: 500;
    border-radius: 0.25rem;
    text-align: center;

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      box-shadow: #f8fafc 0px 0px 0px 2px, #1967d2 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  .primary-link {
    color: #f3f8fc;
    background-color: #2c6c9c;
    border: 1px solid #23577d;
    box-shadow: inset 0 1px 1px #4a94cc;

    &:hover {
      background-color: #3077ab;
      border-color: #28618d;
    }
  }

  .secondary-link {
    color: #1f2937;
    background-color: transparent;
    border: 1px solid #d1d5db;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

    svg {
      margin: 0 0 0 0.375rem;
      height: 0.8125rem;
      width: 0.8125rem;
      color: #9ca3af;
    }

    &:hover {
      border-color: #bbc1ca;
      color: #111827;
      box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 2px 2px 0px;
    }
  }

  @media (max-width: 640px) {
    padding: 2rem 1.5rem;
    min-height: unset;

    .container {
      margin-top: 0;
    }

    .actions {
      width: 100%;
      flex-direction: column;
    }
  }
`;
