'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const slides = [
  {
    id: 0,
    quote:
      "I can't thank Sheboygan Monuments enough for the compassion they showed me helping find my husbands stone. May you RIP forever in our hearts Brian James.",
    source: 'Marie J.',
  },
  {
    id: 1,
    quote:
      'My family and I were very pleased. This was not easy, but Helen showed us love and compassion during this difficult process.',
    source: 'Barbara S.',
  },
  {
    id: 2,
    quote:
      'Helen was outstanding - she kept me posted every step of the way - helping me as I was from out of town.',
    source: 'Rosie S.',
  },
  {
    id: 3,
    quote:
      "I can't thank Sheboygan Monuments enough for the compassion they showed me helping find my husbands stone. May you RIP forever in our hearts Brian James.",
    source: 'Marie J.',
  },
  {
    id: 4,
    quote:
      'My family and I were very pleased. This was not easy, but Helen showed us love and compassion during this difficult process.',
    source: 'Barbara S.',
  },
];

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [clickDisabled, setClickDisabled] = useState(false);
  const [hasTransitionClass, setHasTransitionClass] = useState(true);
  const transitionSpeed = 500;
  const totalSlides = slides.length - 2;

  useEffect(() => {
    if (activeSlide === slides.length - 1) {
      setClickDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setActiveSlide(1);
      }, transitionSpeed);
    }

    if (activeSlide === 1) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    }

    if (activeSlide === 0) {
      setClickDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setActiveSlide(slides.length - 2);
      }, transitionSpeed);
    }

    if (activeSlide === slides.length - 2) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    }
  }, [activeSlide]);

  useEffect(() => {
    if (clickDisabled) {
      setTimeout(() => {
        setClickDisabled(false);
      }, transitionSpeed * 2);
    }
  }, [clickDisabled]);

  const handlePrevClick = () => {
    setActiveSlide(prevQuote => prevQuote - 1);
  };

  const handleNextClick = () => {
    setActiveSlide(activeSlide + 1);
  };

  return (
    <TestimonialStyles
      $activeslide={activeSlide}
      $transitionspeed={transitionSpeed}
    >
      <div className="testimonial-container">
        <svg className="quote-svg" fill="currentColor" viewBox="0 0 32 32">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <div className="grid">
          {slides.map((t, i) => (
            <div
              key={t.id}
              // className={`grid-item ${activeSlide === i ? 'active' : ''}`}
              className={`grid-item${i === activeSlide ? ' active' : ''}${
                hasTransitionClass ? ' transition' : ''
              }`}
            >
              <div className="quote">{t.quote}</div>
              <div className="source">- {t.source}</div>
            </div>
          ))}
        </div>
        <div aria-live="polite" aria-atomic="true" className="count">
          {activeSlide === 0
            ? totalSlides
            : activeSlide === slides.length - 1
            ? '1'
            : activeSlide}{' '}
          / {totalSlides}
        </div>
        <div className="actions">
          <button
            type="button"
            className="previous-button"
            onClick={handlePrevClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Go to previous testimonial</span>
          </button>
          <button
            type="button"
            className="next-button"
            onClick={handleNextClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Go to next testimonial</span>
          </button>
        </div>
      </div>
    </TestimonialStyles>
  );
}

type StyleProps = {
  $activeslide: number;
  $transitionspeed: number;
};

const TestimonialStyles = styled.section<StyleProps>`
  padding: 8rem 1.5rem;
  overflow-x: hidden;

  .grid {
    margin: 0 auto;
    display: flex;
  }

  .grid-item {
    margin: 0 auto;
    position: relative;
    width: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: ${props => `translateX(${props.$activeslide * -100}%)`};
    opacity: 0;

    &.active {
      opacity: 1;
    }

    &.active.transition {
      transition: transform ${props => props.$transitionspeed}ms ease-out,
        opacity ${props => props.$transitionspeed}ms linear 300ms;
    }
  }

  .quote-svg {
    margin: 0 auto 1.25rem;
    height: 2.5rem;
    width: 2.5rem;
    color: #e5e5e5;
  }

  .testimonial-container {
    margin: 0 auto;
    padding: 0 8rem;
    position: relative;
    max-width: 1024px;
    width: 100%;
    text-align: center;
  }

  .quote {
    min-height: 108px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Unna', Georgia, 'Times New Roman', Times, serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: #171717;
    line-height: 1.5;
    text-align: center;
  }

  .source {
    margin: 2rem 0 0;
    color: #737373;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.05em;
  }

  .count {
    margin: 1rem 0 0;
    font-family: 'Unna', Georgia, 'Times New Roman', Times, serif;
    font-size: 1rem;
    text-align: center;
    color: #a3a3a3;
  }

  .previous-button,
  .next-button {
    padding: 0.5rem;
    position: absolute;
    color: #a3a3a3;
    background-color: #fafafa;
    top: calc(50% - 2rem);

    &:hover {
      color: #171717;
    }

    &:disabled {
      color: #e5e5e5;
    }

    svg {
      height: 1.5rem;
      width: 1.5rem;
    }
  }

  .previous-button {
    left: 0;
  }

  .next-button {
    right: 0;
  }

  @media (max-width: 600px) {
    .testimonial-container {
      padding: 0 2rem;
    }

    .count {
      position: absolute;
      bottom: -2.75rem;
      left: 0;
      width: 100%;
    }

    .actions {
      margin: 2rem 0 0;
      display: flex;
      justify-content: center;
      gap: 0.75rem;
    }

    .previous-button,
    .next-button {
      padding: 0.75rem;
      position: relative;
      top: unset;
      left: unset;
      right: unset;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 0.125rem;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    }
  }
`;
