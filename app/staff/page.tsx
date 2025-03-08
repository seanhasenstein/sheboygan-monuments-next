'use client';

import Image from 'next/image';

import styled from 'styled-components';

export default function Staff() {
  return (
    <>
      <StaffStyles>
        <div className="container">
          <h2>Meet Our Staff</h2>
          <div className="grid">
            <div className="profile-photo">
              <Image
                src="/images/helen.jpg"
                alt="Helen Brown smiling and holding a flower"
                width={217}
                height={299}
                quality={100}
                className="photo"
              />
            </div>
            <div className="bio">
              <h3>Helen Brown</h3>
              <p>
                Hi, I am Helen Brown, the office manager at The Sheboygan
                Monument Company. I believe in honoring the beauty of each life
                by assisting families to create a monument that is both personal
                and an eternal form of remembrance that reflects a lasting
                memory of their loved one.
              </p>
              <p>
                I have been employed in the customer service industry for over
                30 years and been in the sales industry for 15 of those years. I
                find joy in helping others in whatever avenue I am currently
                serving in.
              </p>
              <p>
                I live in the village of Saint Nazianz, Wisconsin with my
                husband and two sons. I have a passion for cooking, appreciate
                spending time with family and friends, creating new adventures,
                and enjoy meeting new people.
              </p>
            </div>
          </div>
        </div>
      </StaffStyles>
    </>
  );
}

const StaffStyles = styled.div`
  position: relative;
  padding: 5rem 1.5rem 0;

  .container {
    margin: 0 auto;
    padding: 2.5rem 3.5rem 4rem;
    max-width: 1024px;
    width: 100%;
    background-color: #fff;
    border-radius: 0.0625rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  h2 {
    padding: 0 0 0.75rem;
    border-bottom: 1px solid #e5e5e5;
  }

  .grid {
    margin: 2.25rem 0 0;
    display: flex;
  }

  h2 {
    margin-bottom: 1rem;
  }

  .profile-photo {
    flex-shrink: 0;
    width: 12rem;
    z-index: 100;

    .photo {
      width: 200px;
      height: auto;
      border: 6px solid #fff;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
    }
  }

  .bio {
    padding: 1rem 0 0 3rem;
  }

  h3 {
    margin: 0 0 1.5rem;
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.0125em;
  }

  p:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    padding: 2rem 1.5rem;

    .container {
      padding: 1rem 1.5rem 3rem;
    }

    .grid {
      display: block;
    }

    .profile-photo {
      margin: 0;
      padding: 0 1.5rem 0.5rem 0;
      max-width: 8rem;
      float: left;
      .photo {
        width: 100%;
      }
    }

    .bio {
      padding: 0;
    }
  }

  @media (max-width: 370px) {
    .profile-photo {
      margin: 0 0 1.5rem;
      padding-right: 0;
      float: unset;
      max-width: unset;
      width: 100%;
    }
  }
`;
