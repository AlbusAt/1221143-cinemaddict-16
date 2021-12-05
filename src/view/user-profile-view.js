import { createElement } from '../render';

const createUserProfileTemplate = ({avatar, rating}) => `
  <section class="header__profile profile">
    <p class="profile__rating">${rating}</p>
    <img class="profile__avatar" src="${avatar}" alt="Avatar" width="35" height="35">
  </section>
`;

export default class UserProfileTemplate {
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
    return createUserProfileTemplate(this.#task);
  }

  removeElement() {
    this.#element = null;
  }
}
