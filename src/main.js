import { createSiteMenuTemplate } from './view/site-menu-view';
import { createFilmCardTemplate } from './view/film-card-view';
import { createUserProfileTemplate } from './view/profile-card-view';
import { createFilmCardElementsTemplate } from './view/film-card-elements-view';
import { createButtonShowMoreTemplate } from './view/button-show-view';
import { createPopupTemplate } from './view/site-popup-view';
import { createSiteStatTemplate } from './view/site-statistick-card-view';
import { renderTemplate, RenderPosition } from './render';
import { generateListFilm } from './mock/film-list';
import { generateComments } from './mock/film-list';


const CARD_ELEMENT_SIZE = 5;

const siteMainElement = document.querySelector('.main');
const siteHeader = document.querySelector('.header');
const siteFooter = document.querySelector('.footer');

const tasks = generateListFilm();


renderTemplate(siteHeader, createUserProfileTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteMainElement, createSiteMenuTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(siteMainElement, createFilmCardTemplate(), RenderPosition.BEFOREEND);

renderTemplate(siteFooter, createSiteStatTemplate(), RenderPosition.AFTEREND);

const filmsSection = siteMainElement.querySelector('.films');
const filmsListContainer = siteMainElement.querySelector('.films-list__container');

for (let i = 0; i < CARD_ELEMENT_SIZE; i++) {
  renderTemplate(filmsListContainer, createFilmCardElementsTemplate(tasks[i]), RenderPosition.BEFOREEND);
}

renderTemplate(filmsSection, createButtonShowMoreTemplate(), RenderPosition.BEFOREEND);
renderTemplate(siteFooter, createPopupTemplate(generateComments(),tasks[0]), RenderPosition.AFTEREND);
console.log(generateComments());
