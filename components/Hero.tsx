'use client';

import Link from 'next/link';
import styled from 'styled-components';

export default function Hero() {
  return (
    <HeroStyles>
      <div className="hero-container">
        <div className="box">
          <h2>
            <span>Welcome to</span>
            Sheboygan Monument &amp; Stone Works
          </h2>
          <p>
            Providing the highest quality memorial services and products to
            southeastern Wisconsin for over 50 years.
          </p>
          <div className="actions">
            <Link href="/contact" className="primary-link">
              Schedule an appointment
            </Link>
            <a href="#store-info" className="secondary-link">
              Store information
            </a>
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}

const HeroStyles = styled.div`
  position: relative;
  padding: 5rem 1.5rem;

  .hero-container {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
    display: flex;
  }

  .box {
    margin: 0 0 -5rem;
    padding: 2.5rem 3rem;
    background-color: #fff;
    border-radius: 0.0625rem;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }

  h2 {
    margin: 0 0 1rem;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.1;

    span {
      margin: 0 0 0.75rem;
      display: block;
      font-family: 'Inter', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #737373;
    }
  }

  p {
    margin: 0 0 1.75rem;
    max-width: 500px;
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.5;
    color: #737373;
  }

  .actions {
    display: flex;
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

  @media (max-width: 600px) {
    padding: 2rem 1.5rem 3rem;

    .box {
      padding: 2rem 1.25rem;
      text-align: center;
    }

    .actions {
      flex-direction: column-reverse;
      gap: 0;
    }

    .primary-link {
      display: block;
      margin: 1rem 0 0;
    }
  }
`;
