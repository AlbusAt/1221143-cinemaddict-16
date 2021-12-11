import { getRandomTasks } from '../mock/film-list';
import FilmCardElement from './film-card-elements-view';
import ExtraListView from './extra-list-view';


const extraMostListView = () =>
  `<section class="films-list films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container">
      ${new FilmCardElement(getRandomTasks()).template}
      ${new FilmCardElement(getRandomTasks()).template}
      </div>
    </section>`;

export default class ExtraMostListView extends ExtraListView {
      _task = extraMostListView();
}
