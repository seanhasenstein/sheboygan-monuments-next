'use client';

import styled from 'styled-components';

import Banner from './Banner';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <LayoutStyles>
      <div>
        <Banner />
        <Header />
      </div>
      <main>
        <div className="dark-bg" />
        {children}
      </main>
      <Footer />
    </LayoutStyles>
  );
}

const LayoutStyles = styled.div`
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  main {
    position: relative;
  }

  .dark-bg {
    height: 18rem;
    background-image: url('/images/hero.jpg');
    background-size: 100%;
    background-position: top right;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  [data-reach-skip-link] {
    position: absolute;
    top: -100%;
    left: 3rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    background-color: #1967d2;
    border-radius: 0.25rem;
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px,
      rgba(17, 24, 39, 0.05) 0px 0px 0px 1px,
      rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    z-index: 9999;
  }
  [data-reach-skip-link]:focus {
    top: 2rem;
    outline: 2px solid transparent;
    outline-offset: 2px;
    text-decoration: none;
    box-shadow: #171717 0px 0px 0px 2px, #1967d2 0px 0px 0px 4px,
      rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    z-index: 9999;
  }
`;
