import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';
dayjs.extend(dayjsRandom);

import {
  FILM_TITLE,
  FILMS_DESCRIPTIONS,
  FILMS_POSTERS,
  DEFAULT_MAX_NUMBER,
  DEFAULT_MIN_NUMBER,
  DEFAULT_ROUND_NUMBER,
  MAX_YEAR_DATE,
  DEFAULT_DATE_FORMAT,
  MAX_DURATION_HOUR,
  MAX_DURATION_MINUTES,
  MAX_RATING_NUMBER,
  DEFAULT_ROUND_RATING,
  FILMS_GENRES,
  EMOJI_COMMENTS,
  AVTOR_COMMENTS,
  FILM_DIRECTORS,
  FILMS_WRITERS,
  DEFAFAUL_SEVERAL_SIZE,
  FILMS_ACTORS,
  FILMS_COUNTRIES,
  MAX_AGE_RESTRICTION,
  MAX_FILM_COUNT,
  DEFAULT_FILMS_COUNT,
} from './constants';

const getRandomNumber = (min = DEFAULT_MIN_NUMBER, max = DEFAULT_MAX_NUMBER, round = DEFAULT_ROUND_NUMBER) => (Math.random() * (Math.max(min, max) - Math.min(min, max))).toFixed(round);
// Функцию ниже я взял на сайте http://code.mu/ru/javascript/book/prime/functions/practice/array-randoms/, для получения нескольких рандомных элементов массива.
function randoms(arr, length) {
  return first(shuffle(arr), length);
}

function first(arr, length) {
  return arr.slice(0, length);
}

function shuffle(arr) {
  const result = [];

  while (arr.length > 0) {
    const random = getRandomInt(0, arr.length - 1);
    const elem = arr.splice(random, 1)[0];
    result.push(elem);
  }

  return result;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arrayRandElement(arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

const getRandomTitle = () => arrayRandElement(FILM_TITLE);
const getRandomDescription = () => arrayRandElement(FILMS_DESCRIPTIONS);
const getRandomPoster = () => arrayRandElement(FILMS_POSTERS);
const getRandomDate = () => dayjs.between(dayjs().add(-getRandomNumber(DEFAULT_MIN_NUMBER, MAX_YEAR_DATE), 'year'), dayjs().add(-getRandomNumber(DEFAULT_MIN_NUMBER, MAX_YEAR_DATE), 'year'));
const getRandomFormatDate = () => getRandomDate().format(DEFAULT_DATE_FORMAT);
const getRandomDuration = () => `${getRandomNumber(DEFAULT_MAX_NUMBER, MAX_DURATION_HOUR)}h ${getRandomNumber(DEFAULT_MIN_NUMBER, MAX_DURATION_MINUTES)}m`;
const getRandomRating = () => getRandomNumber(DEFAULT_MIN_NUMBER, MAX_RATING_NUMBER, DEFAULT_ROUND_RATING);
const getRandomGenre = () => randoms(FILMS_GENRES, DEFAFAUL_SEVERAL_SIZE);
const getRandomEmoji = () => arrayRandElement(EMOJI_COMMENTS);
const getRandomAvtor = () => arrayRandElement(AVTOR_COMMENTS);
const getRandomDirecotr = () => arrayRandElement(FILM_DIRECTORS);
const getRandomWriters = () => randoms(FILMS_WRITERS, DEFAFAUL_SEVERAL_SIZE);
const getRandomActors = () => randoms(FILMS_ACTORS, DEFAFAUL_SEVERAL_SIZE);
const getRandomCountres = () => arrayRandElement(FILMS_COUNTRIES, DEFAFAUL_SEVERAL_SIZE);
const getRandomAgeRating = () => getRandomNumber(DEFAULT_MIN_NUMBER, MAX_AGE_RESTRICTION);
const getRandomBoolean = () => getRandomNumber(DEFAULT_MIN_NUMBER, DEFAULT_MAX_NUMBER);
const getRandomFilmCount = () => getRandomNumber(DEFAULT_FILMS_COUNT, MAX_FILM_COUNT);

export {
  getRandomTitle,
  getRandomDescription,
  getRandomPoster,
  getRandomFormatDate,
  getRandomDuration,
  getRandomRating,
  getRandomGenre,
  getRandomEmoji,
  getRandomAvtor,
  getRandomDate,
  getRandomDirecotr,
  getRandomWriters,
  getRandomActors,
  getRandomCountres,
  getRandomAgeRating,
  getRandomBoolean,
  arrayRandElement,
  getRandomFilmCount,
};


