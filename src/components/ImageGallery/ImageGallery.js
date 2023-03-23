import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { Gallery } from './ImageGallery.styled';

export default function ImageGallery({ images, openModal }) {
  return (
    <Gallery>
      {images.map(el => {
        return <ImageGalleryItem arrr={el} key={el.id} openModal={openModal} />;
      })}
    </Gallery>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  openModal: PropTypes.func.isRequired,
};
