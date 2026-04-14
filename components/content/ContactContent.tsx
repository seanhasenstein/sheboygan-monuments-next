'use client';

import { useActionState, useState, useTransition } from 'react';
import styled from 'styled-components';

import PhoneInput from '@/components/PhoneInput';

import { sendContactMessage } from '@/lib/actions';

export default function ContactContent() {
  const [state, formAction] = useActionState(sendContactMessage, null);
  const [isPending, startTransition] = useTransition();
  const [phoneNumber, setPhoneNumber] = useState(state?.phone || '');
  const [formLoadTime] = useState(() => Date.now());

  const handleSubmit = (formData: FormData) => {
    formData.set('phone', phoneNumber);
    formData.set('formLoadTime', String(formLoadTime));

    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <ContactStyles>
      <div className="container">
        <div className="grid">
          <div className="section-1">
            <h2>Contact Us</h2>
            <p>
              How can we help you? Please let us know if you have any questions
              or if you would like to schedule an appointment.
            </p>
          </div>
          <div className="section-2">
            <h3>
              <span>Contact Form</span>
            </h3>
            <form action={handleSubmit}>
              <div className="form-item">
                <label htmlFor="customerName">Your name</label>
                <input
                  defaultValue={state?.customerName}
                  id="customerName"
                  name="customerName"
                  required
                />
              </div>
              <div className="grid-col-2">
                <div className="form-item">
                  <label htmlFor="email">Email address</label>
                  <input
                    defaultValue={state?.email}
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <PhoneInput
                  name="phone"
                  value={state?.phone}
                  onChange={setPhoneNumber}
                  required
                  className="form-item"
                />
              </div>
              <div className="form-item sr-only">
                <label htmlFor="companyName">Company name</label>
                <input
                  defaultValue={state?.companyName}
                  id="companyName"
                  name="companyName"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              <div className="form-item">
                <label htmlFor="message">How can we help you?</label>
                <textarea
                  defaultValue={state?.message}
                  id="message"
                  name="message"
                  required
                />
              </div>
              <button
                type="submit"
                className="form-button"
                disabled={isPending}
              >
                {isPending ? <span className="spinner" /> : 'Send your message'}
              </button>
              {!!state?.error ? (
                <div className="server-error">{state.error}</div>
              ) : null}
            </form>
          </div>
          <div className="section-3">
            <div className="details-box">
              <div className="store-info">
                <h3>
                  <span>Store Information</span>
                </h3>
                <ul>
                  <li>
                    927 Pennsylvania Ave. <br />
                    Sheboygan, WI 53081
                  </li>
                  <li>
                    Phone:{' '}
                    <a href="tel:19204527995" target="_blank" rel="noreferrer">
                      (920) 452-7995
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://goo.gl/maps/VnVgbJCkXP3hXp3o9"
                      target="_blank"
                      rel="noreferrer"
                      className="directions"
                    >
                      Directions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="store-hours">
                <h3>
                  <span>Store Hours</span>
                </h3>
                <ul>
                  <li>
                    <span>Monday</span>9:00am-4:00pm
                  </li>
                  <li>
                    <span>Tuesday</span>9:00am-4:00pm
                  </li>
                  <li>
                    <span>Wednesday</span>9:00am-4:00pm
                  </li>
                  <li>
                    <span>Thursday</span>9:00am-4:00pm
                  </li>
                  <li>
                    <span>Friday</span>9:00am-4:00pm
                  </li>
                  <li>
                    <span>Saturday</span>Closed
                  </li>
                  <li>
                    <span>Sunday</span>Closed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactStyles>
  );
}

const ContactStyles = styled.div`
  position: relative;
  padding: 5rem 1.5rem 0;

  .container {
    margin: 0 auto;
    padding: 2.5rem 3.5rem 3.5rem;
    max-width: 1024px;
    width: 100%;
    background-color: #fff;
    border-radius: 0.0625rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  p {
    margin: 0;
  }

  .grid {
    position: relative;
    margin: 0 auto;
    display: grid;
    grid-template-areas:
      'section-1 section-3'
      'section-2 section-3';
    gap: 0 4rem;
    align-items: center;
    justify-content: space-between;
  }

  .section-1,
  .section-2 {
    max-width: 30rem;
  }

  .section-1 {
    margin: 0 0 2rem;
    grid-area: section-1;
  }

  .section-2 {
    grid-area: section-2;

    h3 {
      display: none;
    }
  }

  .section-3 {
    grid-area: section-3;
  }

  form {
    width: 100%;
  }

  .grid-col-2 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
    gap: 0 1rem;
  }

  .form-item {
    margin: 1rem 0 0;
  }

  label {
    margin: 0 0 0.375rem;
    display: block;
    color: #737373;
    font-family: 'Inter', sans-serif;
    font-size: 0.8125rem;
    font-weight: 500;
    line-height: 1.25rem;

    &:first-of-type {
      margin-top: 0;
    }
  }

  input,
  textarea {
    padding: 0.625rem 0.75rem;
    display: block;
    width: 100%;
    appearance: none;
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    color: #171717;
    line-height: 1.5;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border-radius: 0.25rem;

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
      border-color: #1967d2;
      box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px, #1967d2 0px 0px 0px 1px,
        rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    }
  }

  textarea {
    resize: vertical;
    min-height: 12rem;
  }

  .form-button {
    margin: 1rem 0 0;
    padding: 0 1.25rem;
    position: relative;
    height: 42px;
    width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #f3f8fc;
    background-color: #2c6c9c;
    border: 1px solid #23577d;
    box-shadow: inset 0 1px 1px #4a94cc;
    font-size: 0.9375rem;
    font-weight: 500;
    text-align: center;
    border-radius: 0.3125rem;
    cursor: pointer;
    transition: background-color 200ms ease-in-out;

    &:hover {
      background-color: #3077ab;
      border-color: #28618d;
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

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .spinner:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border-top: 2px solid #fff;
    border-right: 2px solid transparent;
    animation: spinner 0.6s linear infinite;
  }

  .server-error {
    margin: 1rem 0 0;
    font-size: 0.875rem;
    font-weight: 500;
    color: #b91c1c;
    line-height: 150%;
  }

  .details-box {
    h3 {
      margin: 0 0 1rem;
      font-family: 'Inter', sans-serif;
      font-size: 0.9375rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    ul {
      margin: 0;
    }

    li {
      margin: 0 0 0.5rem;
    }

    li,
    a {
      color: #262626;
    }

    a {
      &:hover {
        text-decoration: underline;
      }

      &.directions {
        color: #1967d2;
        text-decoration: underline;
      }
    }
  }

  .store-hours {
    margin: 3rem 0 0;

    li {
      display: flex;
      justify-content: space-between;

      span {
        width: 8rem;
      }
    }
  }

  @media (max-width: 767px) {
    .grid {
      position: relative;
      margin: 0 auto;
      display: grid;
      grid-template-areas:
        'section-1'
        'section-3'
        'section-2';
      gap: 0 4rem;
      align-items: center;
      justify-content: space-between;
    }

    .section-1,
    .section-2 {
      max-width: unset;
    }

    .section-2 h3,
    .section-3 h3 {
      position: relative;

      span {
        padding: 0 1.25rem 0 0;
        position: relative;
        background-color: #fff;
        z-index: 200;
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 0.5625rem;
        width: 100%;
        height: 1px;
        background-color: #d1d5db;
        z-index: 10;
      }
    }

    .section-1,
    .section-3 {
      margin-bottom: 3rem;
    }

    .section-2 {
      h3 {
        margin: 0 0 2rem;
        display: block;
        font-family: 'Inter', sans-serif;
        font-size: 0.9375rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
    }

    .store-hours {
      margin-top: 3.5rem;
    }
  }

  @media (max-width: 500px) {
    .container {
      padding: 1rem 1.5rem 4rem;
    }

    input,
    textarea {
      font-size: 1rem;
    }

    .store-hours li span {
      width: 5rem;
    }
  }
`;
