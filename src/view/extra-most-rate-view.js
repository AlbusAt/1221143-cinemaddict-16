import { getRandomTasks } from '../mock/film-list';
import { createElement } from '../render.js';
import FilmCardElement from './film-card-elements-view';


const extraMostListView = () =>
  `<section class="films-list films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container">
      ${new FilmCardElement(getRandomTasks()).template}
      ${new FilmCardElement(getRandomTasks()).template}
      </div>
    </section>`;

export default class ExtraMostListView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return extraMostListView();
  }

  removeElement() {
    this.#element = null;
  }
}
