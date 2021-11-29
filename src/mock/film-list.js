import { DEFAULT_FILMS_COUNT } from './constants';
import { generateFilmCard } from './film-card';

const generateListFilm = () => Array.from({length: DEFAULT_FILMS_COUNT}, generateFilmCard);

export {generateListFilm};
