import SiteMenuView from './view/site-menu-view';
import FilmCardView from './view/film-card-view';
import UserProfileTemplate from './view/user-profile-view';
import FilmCardElement from './view/film-card-elements-view';
import ButtonShowMore from './view/button-show-more-view';
import SiteStatTemplate from './view/site-statistick-card-view';
import { render, RenderPosition } from './render';
import SortTemplate from './view/site-sort-view';
import { generateListFilm, getRandomTasks } from './mock/film-list';
import ExtraMostListView from './view/extra-most-rate-view';
import ExtraTopListView from './view/extra-top-stat-view';
//import PopupTemplate from './view/site-popup-view';
import { user } from './mock/user';
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
const inWatchListFilms = filterWatchingFilms(films).length;
const isWatchedFilms = filterWatchedFilms(films).length;
const isFavoriteFilms = filterFavoriteFilms(films).length;

render(siteHeader, new UserProfileTemplate(taskUser).element, RenderPosition.BEFOREEND);
render(siteMainElement, new SiteMenuView().element, RenderPosition.AFTERBEGIN);

if (filmsCount > 0) {
  render(siteMainElement, new SortTemplate().element, RenderPosition.BEFOREEND);
}

render(siteMainElement, new FilmCardView().element, RenderPosition.BEFOREEND);
render(siteFooter, new SiteStatTemplate().element, RenderPosition.BEFOREEND);

const filmsSection = siteMainElement.querySelector('.films');
const filmsListContainer = siteMainElement.querySelector('.films-list__container');

for (let i = 0; i < CARD_ELEMENT_SIZE; i++) {
  render(filmsListContainer, new FilmCardElement(getRandomTasks()).element, RenderPosition.BEFOREEND);
}

render(filmsSection, new ButtonShowMore().element, RenderPosition.BEFOREEND);

//renderElement(siteFooter, new PopupTemplate(tasks[0]).element, RenderPosition.AFTEREND);

const buttonShowMore = document.querySelector('.films-list__show-more');

function getMoreFilmList () {
  for (let i = 0; i < CARD_ELEMENT_SIZE; i++) {
    render(filmsListContainer, new FilmCardElement(getRandomTasks()).element, RenderPosition.BEFOREEND);
  }
  sizeFilmCard += CARD_ELEMENT_SIZE;
  if (sizeFilmCard === PRIORITET_CARD_ELEMENT_SIZE) {
    buttonShowMore.disabled = true;
  }
}

render(filmsSection, new ExtraTopListView().element, RenderPosition.BEFOREEND);
render(filmsSection, new ExtraMostListView().element, RenderPosition.BEFOREEND);

buttonShowMore.addEventListener('click', getMoreFilmList);

export {
  CARD_ELEMENT_SIZE,
  inWatchListFilms,
  isWatchedFilms,
  isFavoriteFilms,
};
