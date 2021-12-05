import { DEFAULT_FILMS_COUNT, DEFAULT_MAX_NUMBER } from './constants';
import { generateFilmCard } from './film-card';
import { generateComment } from './comments';
import { arrayRandElement } from './random';

const generateListFilm = () => Array.from({length: DEFAULT_FILMS_COUNT}, generateFilmCard);
const generateComments = () => Array.from({length: DEFAULT_MAX_NUMBER}, generateComment);

function getRandomTasks () {
  return arrayRandElement(generateListFilm());
}
export {
  generateListFilm,
  generateComments,
  getRandomTasks,
};
