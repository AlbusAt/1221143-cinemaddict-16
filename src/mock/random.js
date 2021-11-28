import {
  FILM_TITLE,
  FILMS_DESCRIPTIONS,
  FILMS_POSTERS,
} from './constants';

function arrayRandElement(arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

const getRandomTitle = () => arrayRandElement(FILM_TITLE);
const getRandomDescription = () => arrayRandElement(FILMS_DESCRIPTIONS);
const getRandomPoster = () => arrayRandElement(FILMS_POSTERS);

export {
  getRandomTitle,
  getRandomDescription,
  getRandomPoster,
};
