const normalizeFilmList = ({
  poster,
  title,
  mainTitle,
  description,
  releaseFilm,
  duration,
  rating,
  genre,
  director,
  writer,
  actor,
  country,
  age,
  isInWatchlist,
  isWatched,
  isFavorite,
}) => ({
  poster,
  title,
  mainTitle,
  description,
  releaseFilm,
  duration,
  rating,
  genre,
  director,
  writer,
  actor,
  country,
  age,
  isInWatchlist,
  isWatched,
  isFavorite,
});

const normalizeUser = ({avatar, rating}) => ({
  avatar,
  rating,
});

const normalizeArray = (list, element) => list.map((value) => element(value));
const filterWatchingFilms = (films) => films.filter((film) => film.isInWatchlist);
const filterWatchedFilms = (films) => films.filter((film) => film.isWatched);
const filterFavoriteFilms = (films) => films.filter((film) => film.isFavorite);

export {
  normalizeFilmList,
  normalizeArray,
  normalizeUser,
  filterFavoriteFilms,
  filterWatchedFilms,
  filterWatchingFilms,
};
