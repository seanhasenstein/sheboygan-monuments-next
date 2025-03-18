'use client';

import Image from 'next/image';
import styled from 'styled-components';

export default function AboutContent() {
  return (
    <AboutStyles>
      <div className="container">
        <h2>About Us</h2>
        <div className="grid">
          <div className="grid-item">
            <p>
              Sheboygan Monument &amp; Stone Works has been in business for more
              than 50 years and was founded back in the early 1950’s.
            </p>
            <p>
              The company location at 1011 Indiana Avenue was a familiar
              landmark during its many years of operation in city of Sheboygan.
              There the company remained until Oct. 2006, when it was purchased
              and relocated to 927 Pennsylvania Avenue.
            </p>
            <p>
              Since purchasing the business Sheboygan Monument &amp; Stone Works
              has put their heart and mind into the business.
            </p>
            <p>
              Our focus is providing a high quality service for all our
              customers and we stress the importance of accuracy in processing
              customer orders.
            </p>
            <p>
              We are proud active members of our community, and have initiated
              several programs to support local donations, non-profit support
              groups, and to many other worthy causes in the Sheboygan County
              area.
            </p>
          </div>
          <div className="grid-item">
            <Image
              src="/images/store.jpg"
              alt="Street view of the Sheboygan Monuments Store"
              width={308}
              height={200}
              quality={100}
              className="store-img"
            />
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

const AboutStyles = styled.div`
  position: relative;
  padding: 5rem 1.5rem 0;

  h2 {
    padding: 0 0 0.75rem;
    border-bottom: 1px solid #e5e5e5;
  }

  .container {
    margin: 0 auto;
    padding: 3rem 4rem 3rem;
    max-width: 1024px;
    width: 100%;
    background-color: #fff;
    border-radius: 0.0625rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  .grid {
    display: flex;
    gap: 4rem;
  }

  .grid-item {
    width: 50%;
  }

  .store-img {
    width: 100%;
    height: auto;
    border: 8px solid #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  }

  @media (max-width: 900px) {
    .grid {
      flex-direction: column;
      gap: 1rem;
    }

    .grid-item {
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    padding: 2rem 1.5rem;

    .container {
      padding: 1.5rem 2.5rem;
    }
  }
`;
