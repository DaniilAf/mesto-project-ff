import './pages/index.css';
import { initialCards } from './scripts/cards.js';

import { openPopup } from './scripts/modal.js';

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(element, delCard){
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');

  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardTitle.textContent = element.name;

  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_is-active')
  });

  const deleteCardButton = cardElement.querySelector ('.card__delete-button');
  deleteCardButton.addEventListener('click', () => {
    delCard(cardElement);
  });

  cardImage.addEventListener('click', () => {
    openPopup(popupTypeImage)
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



// Кнопки вызова POPUP
const page = document.querySelector('.page');
const buttonProfileEdit = page.querySelector('.profile__edit-button');
const profileAddButton = page.querySelector('.profile__add-button');

// POPUP
const popupTypeImage = page.querySelector('.popup_type_image');
const popupTypeEdit = page.querySelector('.popup_type_edit');
const popupTypeNewCard = page.querySelector('.popup_type_new-card');

// Открытие Popup по клику
buttonProfileEdit.addEventListener('click', () => {
  openPopup(popupTypeEdit)});

profileAddButton.addEventListener('click', () => {
  openPopup(popupTypeNewCard)});

// buttonProfileEdit.addEventListener('click', function() {
//   nameInput.value = page.querySelector('.profile__title').textContent;
//   jobInput.value = page.querySelector('.profile__description').textContent;
//   openPopup(popupTypeEdit);
// });