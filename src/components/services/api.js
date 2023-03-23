import axios from 'axios';
import PropTypes from 'prop-types';

export default function fetchImages(inputValue, page) {
  const BASE_URL = 'https://pixabay.com/api/';

  const searchParams = new URLSearchParams({
    key: `33272220-12aa76911a3763f30e85ef70a`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  });

  return axios.get(`${BASE_URL}?${searchParams}&q=${inputValue}`);
}

fetchImages.propTypes = {
  inputValue: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
