'use client';

import { useState } from 'react';
import styled from 'styled-components';

import FaqItem from '@/components/FaqItem';

const faqList = [
  {
    question:
      'Can we purchase a memorial while we are living? Does it go into the cemetery?',
    answer:
      'Yes, and yes. Some prefer to pre-plan their memorial to ensure that all of their thoughts and wishes are conveyed, and feel that it not only takes the burden off of their survivors, wondering what they would have wanted, but the consultation itself is often easier too. Upon completion of craftsmanship, the memorial will then be personally transferred to the cemetery and installed. When needed, final dates will be added at the time of the survivor’s wish, if not otherwise noted on purchase of when dates shall be added.',
    isLink: false,
  },
  {
    question: 'When should I purchase a memorial after a death has occurred?',
    answer:
      'The answer to this question is simple – when you are ready. We have had people come in a few days after a loved one had passed, and some we don’t see for 2-3 years, which is absolutely understandable, and we’re here whenever you are ready.',
    isLink: false,
  },
  {
    question:
      'Does my cemetery have specific restrictions regarding the memorial?',
    answer:
      'About half of the cemeteries that we work with do have some type of restrictions regarding either the size, shape, color, or thickness of memorials that are allowed. We often hear that customers were unaware that their cemetery had restrictions, so it is always best to discuss this with the cemetery manager prior to purchasing property. Rest assured, that no matter the restrictions – we will always make an everlasting memory for you and your loved ones to enjoy for many generations to come.',
    isLink: false,
  },
  {
    question: 'How are monuments made?',
    answer:
      'http://www.monumentbuilders.org/consumers_how_monuments_are_made.php',
    isLink: true,
  },
];

export default function Faq() {
  const [activeItem, setActiveItem] = useState<number | undefined>(undefined);

  return (
    <>
      <FaqStyles>
        <div className="faq-container">
          <h2>Frequently asked questions</h2>
          <div>
            <dl>
              {faqList.map((item, i) => (
                <FaqItem
                  key={i}
                  item={item}
                  activeItem={activeItem}
                  setActiveItem={setActiveItem}
                  currentItem={i}
                />
              ))}
            </dl>
          </div>
        </div>
      </FaqStyles>
    </>
  );
}

const FaqStyles = styled.section`
  position: relative;
  padding: 4rem 1.5rem;

  .container {
    margin: 0 auto;
    max-width: 1024px;
    width: 100%;
  }

  .faq-container {
    margin: 0 auto;
    padding: 2.5rem 3.5rem;
    max-width: 848px;
    width: 100%;
    background-color: #fff;
    border-radius: 0.0625rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  h2 {
    margin: 0 0 1.5rem;
    padding: 0 0 3rem;
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
  }

  @media (max-width: 500px) {
    padding: 2rem 1.5rem;

    .faq-container {
      padding: 1.5rem;
    }
  }
`;
