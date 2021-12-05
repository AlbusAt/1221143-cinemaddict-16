import { getRandomTasks } from '../mock/film-list';
import { createElement } from '../render.js';
import FilmCardElement from './film-card-elements-view';

const extraTopList = () =>
  `<section class="films-list films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    <div class="films-list__container">
      ${new FilmCardElement(getRandomTasks()).template}
      ${new FilmCardElement(getRandomTasks()).template}
    </div>
  </section>`;

export default class ExtraTopListView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return extraTopList();
  }

  removeElement() {
    this.#element = null;
  }
}
