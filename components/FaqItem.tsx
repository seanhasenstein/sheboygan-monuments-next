'use client';

import styled from 'styled-components';

type Props = {
  item: {
    question: string;
    answer: string;
    isLink: boolean;
  };
  activeItem: number | undefined;
  setActiveItem: React.Dispatch<React.SetStateAction<number | undefined>>;
  currentItem: number;
};

export default function FaqItem({
  item,
  activeItem,
  setActiveItem,
  currentItem,
}: Props) {
  const handleClick = () => {
    setActiveItem(currentItem);
    if (currentItem === activeItem) {
      setActiveItem(undefined);
    }
  };

  return (
    <FaqItemStyles className={`${activeItem === currentItem ? 'active' : ''}`}>
      <dt>
        <button
          aria-expanded={activeItem === currentItem}
          aria-controls={`accordion-panel-${currentItem}`}
          id={`accordion-item-${currentItem}`}
          onClick={handleClick}
        >
          <span className="question">{item.question}</span>
          <span className="icon">
            <svg
              className={`${activeItem === currentItem ? 'active' : ''}`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </dt>
      <dd
        className={`${activeItem === currentItem ? '' : 'sr-only'}`}
        id={`accordion-panel-${currentItem}`}
        aria-labelledby={`accordion-item-${currentItem}`}
        role="region"
        hidden={activeItem !== currentItem}
      >
        <p>
          {item.isLink ? (
            <a href={item.answer} className="external-link">
              Read this article
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            item.answer
          )}
        </p>
      </dd>
    </FaqItemStyles>
  );
}

const FaqItemStyles = styled.div`
  margin: 1.625rem 0;
  padding: 1.625rem 0 0;
  border-top: 1px solid #e5e5e5;

  &:first-of-type {
    margin: 0;
    padding: 0;
    border-top: none;
  }

  &:last-of-type {
    padding-bottom: 1.625rem;
    border-bottom: 1px solid #e5e5e5;

    &.active {
      padding-bottom: 0;
    }
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    color: #a3a3a3;

    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }

    &:focus-visible {
      .question {
        color: #1967d2;
        text-decoration: underline;
      }

      .icon {
        color: #1967d2;
      }
    }
  }

  p {
    color: #737373;
  }

  .external-link {
    display: inline-flex;
    color: #4f46e5;
    text-decoration: underline;

    svg {
      margin: 0.5rem 0 0 0.25rem;
      height: 0.875rem;
      width: 0.875rem;
    }
  }

  .question {
    font-size: 1rem;
    font-weight: 500;
    color: #262626;
  }

  .icon {
    margin: 0 0 0 1.5rem;
    height: 1.5rem;
    width: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    border: 1px solid transparent;

    svg {
      height: 1.25rem;
      width: 1.25rem;

      &.active {
        transform: rotate(-180deg);
      }
    }
  }

  dd {
    margin: 1.25rem 0 0;
    padding-right: 3rem;
  }
`;
