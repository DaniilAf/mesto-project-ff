import './pages/index.css';
import { initialCards } from './scripts/cards.js';

import { openModal, closeModal, closePopupEsc, closePopupOverlay } from './scripts/modal.js';

// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

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

const formElementTypeEdit = popupTypeEdit.querySelector('.popup__form');


//инпуты для редактирования popup редактирования профиля
const nameInput = formElementTypeEdit.querySelector('.popup__input_type_name');
const jobInput = formElementTypeEdit.querySelector('.popup__input_type_description');
const saveBtnEditProfile = formElementTypeEdit.querySelector('.popup__button');

//ипруты popup добавления карточек
const formPopupTypeNewCard = popupTypeNewCard.querySelector('.popup__form');
const nameInputNewCard = formPopupTypeNewCard.querySelector('.popup__input_type_card-name');
const linkInputNewCard = formPopupTypeNewCard.querySelector('.popup__input_type_url');
const saveCardBtn = formPopupTypeNewCard.querySelector('button');

//Кнопки закрытия Popup (крестик)
const popupCloseTypeEditBtn = popupTypeEdit.querySelector('.popup__close');
const popupCloseTypeNewCardBtn = popupTypeNewCard.querySelector('.popup__close');
const popupCloseTypeImageBtn = popupTypeImage.querySelector('.popup__close')

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

// Открытие Popup по клику
buttonProfileEdit.addEventListener('click', () => {
  nameInput.value = page.querySelector('.profile__title').textContent;
  jobInput.value = page.querySelector('.profile__description').textContent;
  openModal(popupTypeEdit)});

profileAddButton.addEventListener('click', () => {
  openModal(popupTypeNewCard)});

  //функция сохранения инпутов
function handleFormSubmit(evt) {
  evt.preventDefault();
  page.querySelector('.profile__title').textContent = nameInput.value;
  page.querySelector('.profile__description').textContent = jobInput.value;
}
formElementTypeEdit.addEventListener('submit', handleFormSubmit);

closePopupEsc(popupTypeEdit);
closePopupEsc(popupTypeNewCard);
closePopupEsc(popupTypeImage);

closePopupOverlay(popupTypeEdit);
closePopupOverlay(popupTypeNewCard);
closePopupOverlay(popupTypeImage);

closeModal(popupCloseTypeEditBtn, popupTypeEdit);
closeModal(saveBtnEditProfile, popupTypeEdit);
closeModal(popupCloseTypeNewCardBtn, popupTypeNewCard);
closeModal(popupCloseTypeImageBtn, popupTypeImage);

function addCard (evt) {
  console.log(initialCards);
  evt.preventDefault();
  const newCrd = {
    name: nameInputNewCard.value,
    link: linkInputNewCard.value
  };
  initialCards.unshift(newCrd);;
  nameInputNewCard.value = '';
  linkInputNewCard.value = '';
  popupTypeNewCard.classList.remove('popup_is-opened');
  console.log(initialCards);
  return(initialCards);
}
formPopupTypeNewCard.addEventListener('submit', addCard);

saveCardBtn.addEventListener('click', (addCard));