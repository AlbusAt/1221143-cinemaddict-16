import { createSiteMenuTemplate } from './view/site-menu-view';
import { createFilmCardTemplate } from './view/film-card-view';
import { createUserProfileTemplate } from './view/profile-card-view';
import { createFilmCardElementsTemplate } from './view/film-card-elements-view';
import { createButtonShowMoreTemplate } from './view/button-show-view';
//import { createPopupTemplate } from './view/site-popup-view';
import { createSiteStatTemplate } from './view/site-statistick-card-view';
import { renderTemplate, RenderPosition } from './render';
import { getSortTemplate } from './view/site-sort-view';
import { generateListFilm } from './mock/film-list';
//import { generateComments } from './mock/film-list';
import {
  normalizeFilmList,
  normalizeArray,
  filterWatchingFilms,
  filterWatchedFilms,
  filterFavoriteFilms,
} from './normalize-film';


const siteMainElement = document.querySelector('.main');
const siteHeader = document.querySelector('.header');
const siteFooter = document.querySelector('.footer');

const tasks = generateListFilm();
const films = normalizeArray(tasks, normalizeFilmList);
const filmsCount = films.length;
const inWatchListFilms = filterWatchingFilms(films);
const isWatchedFilms = filterWatchedFilms(films);
const isFavoriteFilms = filterFavoriteFilms(films);
const ButtonShowMore = document.querySelector('.films-list__show-more');

renderTemplate(siteHeader, createUserProfileTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSiteMenuTemplate(inWatchListFilms.length, isWatchedFilms.length, isFavoriteFilms.length), RenderPosition.AFTERBEGIN);
if (filmsCount > 0) {
  renderTemplate(siteMainElement, getSortTemplate(), RenderPosition.BEFOREEND);
}
renderTemplate(siteMainElement, createFilmCardTemplate(), RenderPosition.BEFOREEND);

renderTemplate(siteFooter, createSiteStatTemplate(), RenderPosition.AFTEREND);

const filmsSection = siteMainElement.querySelector('.films');
const filmsListContainer = siteMainElement.querySelector('.films-list__container');

for (let i = 0; i < filmsCount; i++) {
  renderTemplate(filmsListContainer, createFilmCardElementsTemplate(tasks[i]), RenderPosition.BEFOREEND);
}

renderTemplate(filmsSection, createButtonShowMoreTemplate(), RenderPosition.BEFOREEND);
//renderTemplate(siteFooter, createPopupTemplate(generateComments(),tasks[0]), RenderPosition.AFTEREND);

ButtonShowMore.addEventListener('click');
