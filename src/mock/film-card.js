import {
  getRandomPoster,
  getRandomTitle,
  getRandomDescription,
} from './random';

const generateFilmCard = () => {
  const title = getRandomTitle();

  return {
    poster: getRandomPoster(),
    title,
    description: getRandomDescription(),
  };
};

export { generateFilmCard };
