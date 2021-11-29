import {
  getRandomPoster,
  getRandomTitle,
  getRandomDescription,
  getRandomFormatDate,
  getRandomDuration,
  getRandomRating,
  getRandomGenre,
  getRandomDirecotr,
  getRandomWriters,
  getRandomActors,
  getRandomCountres,
  getRandomAgeRating,
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
    director: getRandomDirecotr(),
    writer: getRandomWriters(),
    actor: getRandomActors(),
    country: getRandomCountres(),
    age: getRandomAgeRating(),
  };
};

export { generateFilmCard };
