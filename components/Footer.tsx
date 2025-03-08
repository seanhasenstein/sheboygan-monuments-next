'use client';

import Link from 'next/link';
import styled from 'styled-components';

const links = [
  {
    id: 1,
    name: 'Home',
    slug: '/',
  },
  {
    id: 2,
    name: 'Services',
    slug: '/services',
  },
  {
    id: 3,
    name: 'Gallery',
    slug: '/gallery/flat-memorials',
  },
  {
    id: 4,
    name: 'Faq',
    slug: '/faq',
  },
  {
    id: 5,
    name: 'Staff',
    slug: '/staff',
  },
  {
    id: 6,
    name: 'Contact',
    slug: '/contact',
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <FooterStyles>
      <div className="container">
        <nav>
          <ul>
            {links.map(link => (
              <li key={link.id}>
                <Link href={link.slug}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="copyright">&copy; {year} Sheboygan Monuments.</div>
      </div>
    </FooterStyles>
  );
}

const FooterStyles = styled.footer`
  margin-top: auto;
  padding: 0 1.5rem;
  width: 100%;
  background-color: #171717;

  .container {
    margin: 0 auto;
    padding: 1.75rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
    width: 100%;
  }

  nav {
    ul {
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
    }

    li {
      margin: 0.5rem 0.875rem;

      &:first-of-type {
        margin-left: 0;

        a {
          padding-left: 0;
        }
      }
    }

    a {
      padding: 0.5rem 0.75rem;
      display: block;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 500;
      color: #d4d4d4;
      letter-spacing: 0.025em;

      &:hover {
        color: #fff;
      }

      &:focus {
        outline: 2px solid transparent;
        outline-offset: 2px;
      }

      &:focus-visible {
        color: #1967d2;
        text-decoration: underline;
      }
    }
  }

  .copyright {
    text-align: left;
    color: #d4d4d4;
    font-family: 'Unna';
    font-size: 1.0625rem;
    letter-spacing: 0.0125em;
    line-height: 1.35;
  }

  @media (max-width: 1024px) {
    .container {
      padding-left: 2rem;
      padding-right: 2rem;
      flex-direction: column;
      justify-content: center;
    }

    nav {
      margin-bottom: 2rem;

      li:first-of-type a {
        margin-left: 1rem;
        padding-left: 0.75rem;
      }
    }
  }

  @media (max-width: 768px) {
    .copyright {
      text-align: center;
    }
  }

  @media (max-width: 650px) {
    padding-top: 2rem;
    padding-bottom: 1rem;

    nav {
      ul {
        flex-direction: column;
      }

      a,
      li:first-of-type a {
        font-size: 1.125rem;
      }
    }
  }
`;
