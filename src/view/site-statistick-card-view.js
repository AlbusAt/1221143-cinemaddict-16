import { getRandomFilmCount } from '../mock/random';
import { createElement } from '../render';

const createSiteStatTemplate = () =>
  `<section class="footer__statistics"><p>${getRandomFilmCount()} movies inside</p></section>`;

export default class SiteStatTemplate {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createSiteStatTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
