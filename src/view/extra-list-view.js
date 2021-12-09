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

const extraTopList = () =>
  `<section class="films-list films-list--extra">
    <h2 class="films-list__title">Top rated</h2>
    <div class="films-list__container">
      ${new FilmCardElement(getRandomTasks()).template}
      ${new FilmCardElement(getRandomTasks()).template}
    </div>
  </section>`;

class ExtraListView {
  #element = null;
  _task = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return this._task;
  }

  removeElement() {
    this.#element = null;
  }
}

export default class ExtraMostListView extends ExtraListView {
  _task = extraMostListView();
}

export class ExtraTopListView extends ExtraListView {
  _task = extraTopList()
}
