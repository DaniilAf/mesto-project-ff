import addIcon from './images/add-icon.svg';
import close from './images/close.svg';
import deleteIcon from './images/delete-icon.svg';
import editIcon from './images/edit-icon.svg';
import likeActive from './images/like-active.svg';
import likeInactive from './images/like-inactive.svg';


const allIconCards = [
  { name: 'add icon', link: addIcon },
  { name: 'close', link: close },
  { name: 'delete icon', link: deleteIcon },
  { name: 'edit icon', link: editIcon },
  { name: 'like active', link: likeActive },
  { name: 'like inactive', link: likeInactive },
]; 

import './pages/index.css';
import { initialCards } from './scripts/cards.js';

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(element, delCard){
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  cardElement.querySelector('.card__image').src = element.link
  cardElement.querySelector('.card__image').alt = element.name
  cardElement.querySelector('.card__title').textContent = element.name

  const deleteCardButton = cardElement.querySelector ('.card__delete-button');
  deleteCardButton.addEventListener('click', () => {
    delCard(cardElement);
  });

  return cardElement; 
  };

// @todo: Функция удаления карточки
function removeCard(card) {
  card.remove();
};

// @todo: Вывести карточки на страницу
initialCards.forEach(function(elem) {
  const card = createCard(elem, removeCard);
  placesList.append(card);
});


// @todo: Открытие и закрытие popup
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
// const cardMage = cardTemplate.querySelector('.card__image');

profileEditButton.addEventListener('click', function(){
  popup.classList.add('popup_is-opened');
});

profileAddButton.addEventListener('click', function(){
  popup.classList.add('popup_is-opened');
});

// cardMage.addEventListener('click', function(){
//   popup.classList.add('popup_is-opened');
// });

popupCloseButton.addEventListener('click', function(){
  popup.classList.remove('popup_is-opened');
}); 