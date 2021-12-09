import SiteMenuView from './view/site-menu-view';
import FilmCardView from './view/film-card-view';
import UserProfileTemplate from './view/user-profile-view';
import FilmCardElement from './view/film-card-elements-view';
import ButtonShowMore from './view/button-show-more-view';
import SiteStatTemplate from './view/site-statistick-card-view';
import { render, RenderPosition } from './render';
import SortTemplate from './view/site-sort-view';
import { generateListFilm, getRandomTasks } from './mock/film-list';
import ExtraMostListView from './view/extra-list-view';
import ExtraTopListView from './view/extra-list-view';
import PopupTemplate from './view/site-popup-view';
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
const bodyElement = document.querySelector('body');

const tasks = generateListFilm();
const films = normalizeArray(tasks, normalizeFilmList);
const filmsCount = films.length;
const taskUser = normalizeUser(user);
const inWatchListFilms = filterWatchingFilms(films).length;
const inWatchedFilms = filterWatchedFilms(films).length;
const inFavoriteFilms = filterFavoriteFilms(films).length;

render(siteHeader, new UserProfileTemplate(taskUser).element, RenderPosition.BEFOREEND);
render(siteMainElement, new SiteMenuView().element, RenderPosition.AFTERBEGIN);

if (filmsCount > 0) {
  render(siteMainElement, new SortTemplate().element, RenderPosition.BEFOREEND);
}

render(siteMainElement, new FilmCardView().element, RenderPosition.BEFOREEND);
render(siteFooter, new SiteStatTemplate().element, RenderPosition.BEFOREEND);

const filmsSection = siteMainElement.querySelector('.films');
const filmsListContainer = siteMainElement.querySelector('.films-list__container');


render(filmsSection, new ButtonShowMore().element, RenderPosition.BEFOREEND);

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

const renderPopup = (film) => {
  const popupComponent = new PopupTemplate(film);
  const closePopupBtnElement = popupComponent.element.querySelector('.film-details__close-btn');

  render(bodyElement, popupComponent.element, RenderPosition.BEFOREEND);

  const onClosePopup = () => {
    closePopupBtnElement.removeEventListener('click', onClosePopup);
    bodyElement.classList.remove('hide-overflow');
    popupComponent.element.remove();
    popupComponent.remove();
  };

  const onEscKeyDown = (event) => {
    if (event.key === 'Esc' || event.key === 'Escape') {
      event.preventDefault();
      onClosePopup();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  closePopupBtnElement.addEventListener('click', onClosePopup);
  document.addEventListener('keydown', onEscKeyDown);
};

const renderFilm = (containerElement, film) => {
  const filmComponent = new FilmCardElement(film);
  const filmLinkElement = filmComponent.element.querySelector('.film-card__link');
  render(containerElement, filmComponent.element, RenderPosition.BEFOREEND);

  const onOpenPopup = () => {
    bodyElement.classList.add('hide-overflow');
    renderPopup(film);
  };

  filmLinkElement.addEventListener('click', onOpenPopup);
};

for (let i = 0; i < Math.min(films.length, CARD_ELEMENT_SIZE); i++) {
  renderFilm(filmsListContainer, tasks[i]);
}


render(filmsSection, new ExtraTopListView().element, RenderPosition.BEFOREEND);
render(filmsSection, new ExtraMostListView().element, RenderPosition.BEFOREEND);

buttonShowMore.addEventListener('click', getMoreFilmList);

export {
  CARD_ELEMENT_SIZE,
  inWatchListFilms,
  inWatchedFilms,
  inFavoriteFilms,
};
