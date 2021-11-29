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
export {
  getRandomTitle,
  getRandomDescription,
  getRandomPoster,
  getRandomFormatDate,
};


