import { getRandomFilmCount } from '../mock/random';
export const createSiteStatTemplate = () => (
  `<section class="footer__logo logo logo--smaller"></section>
    <section class="footer__statistics">
      <p>${getRandomFilmCount()} movies inside</p>
    </section>`
);
