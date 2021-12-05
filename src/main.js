import { createSiteMenuTemplate } from './view/site-menu-view';
import FilmCardView from './view/film-card-view';
import { createUserProfileTemplate } from './view/user-profile-view';
import { createFilmCardElementsTemplate } from './view/film-card-elements-view';
import ButtonShowMore from './view/button-show-more-view';
//import { createPopupTemplate } from './view/site-popup-view';
import { createSiteStatTemplate } from './view/site-statistick-card-view';
import { renderTemplate, renderElement, RenderPosition } from './render';
import SortTemplate from './view/site-sort-view';
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
  renderTemplate(siteMainElement, new SortTemplate().template, RenderPosition.BEFOREEND);
}

renderElement(siteMainElement, new FilmCardView().element, RenderPosition.BEFOREEND);

renderTemplate(siteFooter, createSiteStatTemplate());

const filmsSection = siteMainElement.querySelector('.films');
const filmsListContainer = siteMainElement.querySelector('.films-list__container');

for (let i = 0; i < CARD_ELEMENT_SIZE; i++) {
  renderTemplate(filmsListContainer, createFilmCardElementsTemplate(getRandomTask()), RenderPosition.BEFOREEND);
}

renderElement(filmsSection, new ButtonShowMore().element, RenderPosition.BEFOREEND);
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
