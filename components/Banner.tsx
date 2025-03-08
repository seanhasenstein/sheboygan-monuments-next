'use client';

import styled from 'styled-components';

export default function Banner() {
  return <BannerStyles>Under new ownership as of Feb. 2020</BannerStyles>;
}

const BannerStyles = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  background-color: #171717;
  text-align: center;
  font-size: 1rem;
  color: #e5e5e5;
  letter-spacing: 0.025em;
`;
