'use client';

import styled from 'styled-components';

const servicesList = [
  'Designing and installing of personalized cemetery memorials.',
  'Existing memorial refurbishments.',
  'On-Site engraving of additional text.',
  'Monument leveling/stabilization.',
  'Foundation repairs and/or replacements.',
  'Garden art and garden stone engravements.',
];

export default function ServicesContent() {
  return (
    <ServicesStyles>
      <div className="container">
        <div className="box">
          <h2>Our Services</h2>
          <div className="grid">
            <div className="intro">
              <p>
                Our mission is to provide the best quality workmanship for each
                and every one of our customers. Below are the services that we
                have to offer.
              </p>
            </div>
            <div className="services">
              {servicesList.map((service, i) => (
                <div key={i} className="service">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {service}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ServicesStyles>
  );
}

const ServicesStyles = styled.div`
  position: relative;
  padding: 5rem 1.5rem;

  .container {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
  }

  h2 {
    padding: 0 0 0.75rem;
    border-bottom: 1px solid #e5e5e5;
  }

  .box {
    padding: 2rem 3rem;
    max-width: 700px;
    width: 100%;
    background-color: #fff;
    border-radius: 0.0625rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  .grid {
    display: flex;
    flex-direction: column;
  }

  .intro {
    max-width: 38rem;
    width: 100%;

    p {
      margin: 0;
    }
  }

  .services {
    margin: 1.5rem 0 0;
  }

  .service {
    padding: 0.875rem 0;
    display: flex;
    align-items: center;

    svg {
      flex-shrink: 0;
      margin: 0 0.875rem 0 0;
      height: 1.25rem;
      width: 1.25rem;
      color: #2c6c9c;
    }
  }

  @media (max-width: 500px) {
    padding: 2rem 1.5rem;

    .box {
      padding: 1rem 1.5rem;
    }

    .service {
      align-items: flex-start;
      line-height: 1.35;

      svg {
        margin-top: 3px;
      }
    }
  }
`;
