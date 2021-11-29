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
} from './constants';

const getRandomNumber = (min = DEFAULT_MIN_NUMBER, max = DEFAULT_MAX_NUMBER, round = DEFAULT_ROUND_NUMBER) => (Math.random() * (Math.max(min, max) - Math.min(min, max))).toFixed(round);

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
const getRandomGenre = () => arrayRandElement(FILMS_GENRES);
const getRandomEmoji = () => arrayRandElement(EMOJI_COMMENTS);
const getRandomAvtor = () => arrayRandElement(AVTOR_COMMENTS);

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
};


