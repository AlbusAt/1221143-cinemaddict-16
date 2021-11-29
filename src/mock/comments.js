import {
  getRandomDescription,
  getRandomDate,
  getRandomEmoji,
  getRandomAvtor,
} from './random';

const generateComment = () => ({
  text: getRandomDescription(),
  date: getRandomDate(),
  emoji: getRandomEmoji(),
  avtor: getRandomAvtor(),
});

export { generateComment };
