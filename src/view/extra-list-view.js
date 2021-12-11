import { createElement } from '../render.js';

export default class ExtraListView {
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

