import { createElement } from '../render';

export const createFilmCardElementsTemplate = (task) => {
  const {poster,mainTitle,description,releaseFilm, duration, rating, genre} = task;

  return `<article class="film-card">
        <a class="film-card__link">
          <h3 class="film-card__title">${mainTitle}</h3>
          <p class="film-card__rating">${rating}</p>
          <p class="film-card__info">
            <span class="film-card__year">${releaseFilm}</span>
            <span class="film-card__duration">${duration}</span>
            <span class="film-card__genre">${genre}</span>
          </p>
          <img src="${poster}" alt="" class="film-card__poster">
          <p class="film-card__description">${description}</p>
          <span class="film-card__comments">0 comments</span>
        </a>
        <div class="film-card__controls">
          <button class="film-card__controls-item film-card__controls-item--add-to-watchlist film-card__controls-item--active" type="button">Add to watchlist</button>
          <button class="film-card__controls-item film-card__controls-item--mark-as-watched film-card__controls-item--active" type="button">Mark as watched</button>
          <button class="film-card__controls-item film-card__controls-item--favorite film-card__controls-item--active" type="button">Mark as favorite</button>
        </div>
  </article>`;
};

export default class FilmCardElement {
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
    return createFilmCardElementsTemplate(this.#task);
  }

  removeElement() {
    this.#element = null;
  }
}
