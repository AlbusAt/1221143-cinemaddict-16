import { DEFAULT_FILMS_COUNT, DEFAULT_MAX_NUMBER } from './constants';
import { generateFilmCard } from './film-card';
import { generateComment } from './comments';

const generateListFilm = () => Array.from({length: DEFAULT_FILMS_COUNT}, generateFilmCard);
const generateComments = () => Array.from({length: DEFAULT_MAX_NUMBER}, generateComment);

export {
  generateListFilm,
  generateComments,
};
