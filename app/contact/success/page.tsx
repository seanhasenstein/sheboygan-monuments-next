'use client';

import Link from 'next/link';
import styled from 'styled-components';

export default function Success() {
  return (
    <>
      <SuccessStyles>
        <div className="container">
          <div className="inner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <h3>Message sent!</h3>
            <p>
              Thank you for contacting Sheboygan Monument &amp; Stone Works. We
              will be with you as soon as we can.
            </p>
            <Link href="/" className="link-button">
              Back to homepage
            </Link>
          </div>
          <div aria-hidden="true" className="background">
            <svg
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 1463 360"
            >
              <path
                className="path1"
                fill="currentColor"
                d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
              ></path>
              <path
                className="path2"
                fill="currentColor"
                d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
              ></path>
            </svg>
          </div>
        </div>
      </SuccessStyles>
    </>
  );
}

const SuccessStyles = styled.div`
  position: relative;
  padding: 5rem 1.5rem;

  .container {
    margin: 0 auto;
    padding: 3.5rem 1.5rem;
    position: relative;
    max-width: 1024px;
    width: 100%;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }

  .inner {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
  }

  .background {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;

    svg {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .path1 {
        opacity: 0.04;
        color: #94a3b8;
      }

      .path2 {
        opacity: 0.04;
        color: #475569;
      }
    }
  }

  svg {
    margin: 0 0 0.5rem;
    height: 2.75rem;
    width: 2.75rem;
    color: #10b981;
  }

  h3 {
    margin: 0 0 1rem;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    line-height: 1.25;
  }

  p {
    margin: 0 auto 1.25rem;
    max-width: 30rem;
    font-size: 1.125rem;
    text-align: center;

    &.signature {
      font-weight: 600;
    }
  }

  .link-button {
    padding: 0.75rem 1.25rem;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 0.9375rem;
    font-weight: 500;
    border-radius: 0.25rem;
    text-align: center;
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

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      box-shadow: #f8fafc 0px 0px 0px 2px, #1967d2 0px 0px 0px 4px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  @media (max-width: 500px) {
    padding: 2rem 1.5rem;

    .link-button {
      width: 100%;
    }
  }
`;
