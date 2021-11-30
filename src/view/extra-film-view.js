import { createFilmCardElementsTemplate } from './film-card-elements-view';
import { generateListFilm } from '../mock/film-list';
import { arrayRandElement } from '../mock/random';

function getRandomTask () {
  return arrayRandElement(generateListFilm());
}

const extraFilmList = () => `
  <section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container">
      ${createFilmCardElementsTemplate(getRandomTask())}
      ${createFilmCardElementsTemplate(getRandomTask())}
      </div>
    </section>

    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container">
      ${createFilmCardElementsTemplate(getRandomTask())}
      ${createFilmCardElementsTemplate(getRandomTask())}
      </div>
    </section>`;

export {
  getRandomTask,
  extraFilmList
};
