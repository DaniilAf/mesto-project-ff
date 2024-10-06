import './pages/index.css';
import { initialCards } from './scripts/cards.js';

import { openModal, closeModal } from './scripts/modal.js';

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

//открытие popup картички
  cardImage.addEventListener('click', () => {
    popupImage.src = cardImage.src;
    popupImage.alt = cardImage.alt;
    popupCaption.textContent = cardTitle.textContent;
    openModal(popupTypeImage);
    document.addEventListener('keydown', closePopupEsc);
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



// Кнопки открытия POPUP
const page = document.querySelector('.page');
const buttonProfileEdit = page.querySelector('.profile__edit-button');
const profileAddButton = page.querySelector('.profile__add-button');

// POPUP
const popupTypeEdit = page.querySelector('.popup_type_edit');
const popupTypeImage = page.querySelector('.popup_type_image');
const popupTypeNewCard = page.querySelector('.popup_type_new-card');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupCaption = popupTypeImage.querySelector('.popup__caption');

const formElement = popupTypeEdit.querySelector('.popup__form');


//инпуты для редактирования popup редактирования профиля
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
const saveBtnEditProfile = formElement.querySelector('.popup__button');

//ипруты popup добавления карточек
const formPopupTypeNewCard = popupTypeNewCard.querySelector('.popup__form');
const nameInputNewCard = formPopupTypeNewCard.querySelector('.popup__input_type_card-name');
const linkInputNewCard = formPopupTypeNewCard.querySelector('.popup__input_type_url');

//Кнопки закрытия Popup (крестик)
const popupCloseTypeEditBtn = popupTypeEdit.querySelector('.popup__close');
const popupCloseTypeNewCardBtn = popupTypeNewCard.querySelector('.popup__close');
const popupCloseTypeImageBtn = popupTypeImage.querySelector('.popup__close');

// Открытие Popup по клику
buttonProfileEdit.addEventListener('click', () => {
  nameInput.value = page.querySelector('.profile__title').textContent;
  jobInput.value = page.querySelector('.profile__description').textContent;
  openModal(popupTypeEdit)});

profileAddButton.addEventListener('click', () => {
  openModal(popupTypeNewCard)});

closeModal(popupCloseTypeEditBtn, popupTypeEdit);
closeModal(popupCloseTypeNewCardBtn, popupTypeNewCard);
closeModal(popupCloseTypeImageBtn, popupTypeImage);
closeModal(saveBtnEditProfile, popupTypeEdit);


function handleFormSubmit(evt) {
    evt.preventDefault();
    page.querySelector('.profile__title').textContent = nameInput.value;
    page.querySelector('.profile__description').textContent = jobInput.value;
}
formElement.addEventListener('submit', handleFormSubmit);



function addCard(a, b){
  evt.preventDefault();
  let newCard = {name: a, link: b}
  a = nameInputNewCard.value;
  b = linkInputNewCard.value;
  initialCards.unshift(newCard);
}
formElement.addEventListener('submit', addCard);