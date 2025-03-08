'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import Lightbox from './Lightbox';

import useLightbox from '../hooks/useLightbox';

import { slugify } from '../utils';

import { ImageMetadata } from '@/types';

const galleryLinks = [
  {
    id: 1,
    slug: 'flat-memorials',
    label: 'Flat Memorials',
  },
  {
    id: 2,
    slug: 'bevel-memorials',
    label: 'Bevel Memorials',
  },
  {
    id: 3,
    slug: 'slant-memorials',
    label: 'Slant Memorials',
  },
  {
    id: 4,
    slug: 'upright-memorials',
    label: 'Upright Memorials',
  },
  {
    id: 5,
    slug: 'bronze-plaques',
    label: 'Bronze Plaques',
  },
  {
    id: 6,
    slug: 'pet-memorials',
    label: 'Pet Memorials',
  },
  {
    id: 7,
    slug: 'granite-benches',
    label: 'Granite Benches',
  },
  {
    id: 8,
    slug: 'granite-colors',
    label: 'Granite Colors',
  },
];

type Props = {
  galleryImages: ImageMetadata[];
  galleryName: string;
};

export default function Gallery({ galleryImages, galleryName }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const galleryProps = useLightbox(galleryImages);
  const { handleClick, ...lightboxProps } = galleryProps;

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/gallery/${e.target.value}`);
  };

  return (
    <>
      <GalleryStyles>
        <div className="container">
          <aside>
            <nav>
              {galleryLinks.map(({ id, slug, label }) => (
                <Link
                  key={id}
                  href={`/gallery/${slug}`}
                  className={
                    pathname === `/gallery/${slug}` ? 'current-page' : ''
                  }
                >
                  {label}
                </Link>
              ))}
            </nav>
          </aside>

          <div className="gallery">
            <h2>
              <span>{galleryName} Gallery</span>
            </h2>
            <div className="mobile-nav">
              <select
                onChange={e => handleSelectChange(e)}
                value={slugify(galleryName)}
              >
                {galleryLinks.map(l => (
                  <option key={l.id} value={l.slug}>
                    {l.label}
                  </option>
                ))}
              </select>
            </div>
            {galleryProps.images.length ? (
              <div className="grid">
                {galleryProps.images.map((image, index) => (
                  <button
                    key={image.key}
                    onClick={e => handleClick(e, index)}
                    className="grid-item"
                  >
                    <img
                      src={image.url}
                      alt={`${galleryName} photo ${index + 1} of ${
                        galleryProps.images.length
                      }`}
                    />
                  </button>
                ))}
              </div>
            ) : (
              <div className="no-images-found">
                No images found for this gallery.
              </div>
            )}
          </div>
        </div>
      </GalleryStyles>
      <Lightbox {...lightboxProps} galleryName={galleryName} />
    </>
  );
}

const GalleryStyles = styled.div`
  position: relative;
  padding: 5rem 1.5rem 0;

  .container {
    margin: 0 auto;
    padding: 3rem 3rem 5rem;
    max-width: 64rem;
    width: 100%;
    display: flex;
    gap: 3rem;
    background-color: #fff;
    border-radius: 0.0625rem;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }

  h2 {
    margin: 0 0 2rem;
    position: relative;
    font-size: 1.5rem;
    text-align: center;
    user-select: none;

    span {
      padding: 0 1.5rem;
      position: relative;
      background-color: #fff;
      z-index: 200;
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0.875rem;
      width: 100%;
      height: 1px;
      background-color: #cbd5e1;
      z-index: 10;
    }
  }

  .gallery {
    width: 100%;
  }

  .grid {
    margin: 0 auto;
    max-width: 46rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(8rem, 1fr));
    gap: 0.875rem;
  }

  .grid-item {
    padding: 0;
    position: relative;
    aspect-ratio: 4 / 3;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    border: 5px solid #fff;
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

    &::after {
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      box-shadow: inset 0 -70px 70px rgba(20, 20, 20, 0.25);
      transition: box-shadow 200ms ease-in-out;
    }

    &:hover::after {
      box-shadow: inset 0 -70px 70px rgba(20, 20, 20, 0);
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      user-select: none;
    }
  }

  .empty-message {
    color: #64748b;
  }

  .mobile-nav {
    display: none;
  }

  aside {
    margin: 0.75rem auto 0;
    display: block;
    max-width: 32rem;
    width: 33%;

    nav {
      padding: 0;
      margin: 0 1rem 0 0;
      display: flex;
      flex-direction: column;
      background-color: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 0.125rem;
      box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    }

    a {
      margin-left: -1px;
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.875rem 0 0.875rem 1.5rem;
      font-size: 1rem;
      color: #526178;
      letter-spacing: 0.025em;
      border-radius: 1px;
      border-bottom: 1px solid #eef1ee;
      user-select: none;

      &:last-of-type {
        border: none;
      }

      &:hover,
      &.current-page {
        color: #171717;
      }

      &.current-page {
        color: #000;
        font-weight: 500;

        &:before {
          content: '';
          position: absolute;
          left: 0px;
          height: 100%;
          width: 0.25rem;
          background-color: #2c6c9c;
        }
      }
    }
  }

  @media (max-width: 1024px) {
    aside {
      display: none;
    }

    .mobile-nav {
      margin: 0 0 2rem;
      display: flex;
      justify-content: center;

      select {
        min-width: 15rem;
      }
    }
  }

  @media (max-width: 991px) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    }
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    }
  }

  @media (max-width: 500px) {
    padding: 2rem 1.5rem;

    .container {
      padding: 2rem 1.5rem 3rem;
    }

    h2 {
      span {
        padding: 0;
        background-color: transparent;
      }

      &::after {
        background-color: transparent;
      }
    }

    .grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 0.625rem;
    }

    .grid-item {
      border: 3px solid #fff;
    }

    .mobile-nav select {
      width: 100%;
    }
  }
`;
