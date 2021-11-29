import {
  getRandomPoster,
  getRandomTitle,
  getRandomDescription,
  getRandomFormatDate,
  getRandomDuration,
  getRandomRating,
  getRandomGenre,
} from './random';

const generateFilmCard = () => {
  const title = getRandomTitle();

  return {
    poster: getRandomPoster(),
    title,
    mainTitle: title,
    description: getRandomDescription(),
    releaseFilm: getRandomFormatDate(),
    duration: getRandomDuration(),
    rating: getRandomRating(),
    genre: getRandomGenre(),
  };
};

export { generateFilmCard };
