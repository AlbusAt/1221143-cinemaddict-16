import {
  getRandomPoster,
  getRandomTitle,
  getRandomDescription,
  getRandomFormatDate,
} from './random';

const generateFilmCard = () => {
  const title = getRandomTitle();

  return {
    poster: getRandomPoster(),
    title,
    description: getRandomDescription(),
    releaseFilm: getRandomFormatDate(),
  };
};

export { generateFilmCard };
