import { createSiteMenuTemplate } from './view/site-menu-view';
import { createFilmCardTemplate } from './view/film-card-view';
import { createUserProfileTemplate } from './view/user-profile-view';
import { createFilmCardElementsTemplate } from './view/film-card-elements-view';
import { createButtonShowMoreTemplate } from './view/button-show-view';
//import { createPopupTemplate } from './view/site-popup-view';
import { createSiteStatTemplate } from './view/site-statistick-card-view';
import { renderTemplate, RenderPosition } from './render';
import { getSortTemplate } from './view/site-sort-view';
import { generateListFilm } from './mock/film-list';
import { extraFilmList, getRandomTask } from './view/extra-film-view';
import { user } from './mock/user';
//import { generateComments } from './mock/film-list';
import {
  normalizeFilmList,
  normalizeArray,
  normalizeUser,
  filterWatchingFilms,
  filterWatchedFilms,
  filterFavoriteFilms,
} from './normalize';


const CARD_ELEMENT_SIZE = 5;
const PRIORITET_CARD_ELEMENT_SIZE = 15;
let sizeFilmCard = CARD_ELEMENT_SIZE;

const siteMainElement = document.querySelector('.main');
const siteHeader = document.querySelector('.header');
const siteFooter = document.querySelector('.footer');

const tasks = generateListFilm();
const films = normalizeArray(tasks, normalizeFilmList);
const filmsCount = films.length;
const taskUser = normalizeUser(user);
const inWatchListFilms = filterWatchingFilms(films);
const isWatchedFilms = filterWatchedFilms(films);
const isFavoriteFilms = filterFavoriteFilms(films);

renderTemplate(siteHeader, createUserProfileTemplate(taskUser));
renderTemplate(siteMainElement, createSiteMenuTemplate(inWatchListFilms.length, isWatchedFilms.length, isFavoriteFilms.length), RenderPosition.AFTERBEGIN);
if (filmsCount > 0) {
  renderTemplate(siteMainElement, getSortTemplate(), RenderPosition.BEFOREEND);
}
renderTemplate(siteMainElement, createFilmCardTemplate());

renderTemplate(siteFooter, createSiteStatTemplate());

const filmsSection = siteMainElement.querySelector('.films');
const filmsListContainer = siteMainElement.querySelector('.films-list__container');

for (let i = 0; i < CARD_ELEMENT_SIZE; i++) {
  renderTemplate(filmsListContainer, createFilmCardElementsTemplate(tasks[i]), RenderPosition.BEFOREEND);
}

renderTemplate(filmsSection, createButtonShowMoreTemplate(), RenderPosition.BEFOREEND);
//renderTemplate(siteFooter, createPopupTemplate(generateComments(),tasks[0]), RenderPosition.AFTEREND);

const buttonShowMore = document.querySelector('.films-list__show-more');

function getMoreFilmList () {
  for (let i = 0; i < CARD_ELEMENT_SIZE; i++) {
    renderTemplate(filmsListContainer, createFilmCardElementsTemplate(getRandomTask()), RenderPosition.BEFOREEND);
  }
  sizeFilmCard += CARD_ELEMENT_SIZE;
  if (sizeFilmCard === PRIORITET_CARD_ELEMENT_SIZE) {
    buttonShowMore.disabled = true;
  }
}

renderTemplate(filmsSection, extraFilmList(), RenderPosition.BEFOREEND);

buttonShowMore.addEventListener('click', getMoreFilmList);

export {CARD_ELEMENT_SIZE};
