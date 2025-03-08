'use client';

import styled from 'styled-components';

export default function Celebrate() {
  return (
    <CelebrateStyles>
      <div className="container">
        <h3>Celebrating the Beauty of Each Life</h3>
        <p>
          What sets us apart from any other monument providers? The answer is
          easy. We listen. We listen to our customers and relate their personal
          aspects in life to create a cherished memorial to share with
          generations to come. The saying “Great things take time” is our motto
          when it comes to creating any type of memorial.
        </p>
      </div>
    </CelebrateStyles>
  );
}

const CelebrateStyles = styled.section`
  padding: 6rem 1.5rem 0;

  .container {
    margin: 0 auto;
    max-width: 640px;
    width: 100%;
  }

  h3 {
    margin: 0 0 1rem;
    font-size: 2rem;
    text-align: center;
    line-height: 1.35;
  }

  p {
    font-size: 1.0625rem;
    text-align: center;
  }
`;
