import { createElement } from '../render';
import { getRandomFormatDate } from '../mock/random';
import { generateComment } from '../mock/comments';

export const getCommentsContent = () => {
  const {text, emoji, avtor, date} = generateComment();

  return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="./images/emoji/${emoji}.png" width="55" height="55" alt="emoji-${emoji}">
    </span>
    <div>
      <p class="film-details__comment-text">${text}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${avtor}</span>
        <span class="film-details__comment-day">${getRandomFormatDate(date, 'YYYY/MM/DD HH:mm')}</span>
        <button class="film-details__comment-delete" data-id="">Delete</button>
      </p>
    </div>
  </li>`;
};

export default class UserCommentsContent {
  #element = null;
  #task = null;

  constructor(task) {
    this.#task = task;
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return getCommentsContent(this.#task);
  }

  removeElement() {
    this.#element = null;
  }
}
