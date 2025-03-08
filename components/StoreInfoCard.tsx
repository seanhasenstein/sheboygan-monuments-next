'use client';

import Image from 'next/image';

import styled from 'styled-components';

export default function StoreInfoCard() {
  return (
    <StoreInfoCardStyles id="store-info">
      <div className="container">
        <div className="store-img">
          <Image
            src="/images/store.jpg"
            alt="Street view of the Sheboygan Monuments Store"
            height={308}
            width={200}
            quality={100}
            className="store-front"
          />
        </div>
        <div className="store-details">
          <h3>Store Information</h3>
          <ul>
            <li>
              <h4>Store Hours:</h4>
              <p>Mon-Fri 9:00am-4:00pm</p>
            </li>
            <li>
              <h4>Phone Number:</h4>
              <p>
                <a href="tel:+19204527995" target="_blank" rel="noreferrer">
                  (920) 452-7995
                </a>
              </p>
            </li>
            <li>
              <h4>Address:</h4>
              <p>
                <a
                  href="https://goo.gl/maps/VnVgbJCkXP3hXp3o9"
                  target="_blank"
                  rel="noreferrer"
                >
                  927 Pennsylvania Ave.
                  <br />
                  Sheboygan, WI 53081
                </a>
              </p>
            </li>
          </ul>
          <p className="note">Under new ownership as of Feb. 2020</p>
        </div>
      </div>
    </StoreInfoCardStyles>
  );
}

const StoreInfoCardStyles = styled.section`
  padding: 4rem 1.5rem 0;

  .container {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
    display: flex;
  }

  .store-img {
    margin: 0 -0.5rem 0 0;
    min-width: 26rem;
    width: 50%;
    display: flex;
    align-items: center;

    .store-front {
      width: 100%;
      border: 8px solid #fff;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }
  }

  .store-details {
    padding: 2rem 4rem;
    min-width: 30rem;
    width: 50%;
    flex-shrink: 0;
    background-color: #fff;
    border-top: 1px solid #f5f5f5;
    border-radius: 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    z-index: 100;
  }

  h3 {
    margin: 0;
    font-size: 1.875rem;
    color: #171717;
    text-align: center;
    line-height: 1.25;
  }

  li {
    padding: 1rem 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e4e4e7;

    p {
      margin: 0;
    }
  }

  h4 {
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 600;
    color: #262626;
    text-transform: uppercase;
    letter-spacing: 0.025em;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    color: #737373;

    a {
      color: #737373;

      &:hover {
        text-decoration: underline;
      }
    }

    &.note {
      margin: 1.75rem 0 0;
      text-align: center;
    }
  }

  @media (max-width: 900px) {
    .container {
      flex-direction: column;
      align-items: center;
    }

    .store-img {
      margin: 0 0 -1rem;
    }

    .store-details {
      margin: 0 1rem;
      padding: 2rem;
    }
  }

  @media (max-width: 500px) {
    width: 100%;

    .store-img {
      min-width: unset;
      width: calc(100% - 3rem);
    }

    .store-details {
      min-width: unset;
      width: 100%;
    }

    li {
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }

    h4 {
      margin-bottom: 0.5rem;
    }
  }
`;
