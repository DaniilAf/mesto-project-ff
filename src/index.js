import './pages/index.css';
import { createCard, removeCard } from './scripts/card.js';
import { initialCards } from './scripts/cards.js';
import { openModal, closeModal, closePopupEsc, closePopupOverlay } from './scripts/modal.js';

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

const page = document.querySelector('.page');

//кнопки Редактирования профиля
const buttonProfileEdit = page.querySelector('.profile__edit-button');

//Popup Редактирования профиля
const popupTypeEdit = page.querySelector('.popup_type_edit');
const popupCloseTypeEditBtn = popupTypeEdit.querySelector('.popup__close');
const formElementTypeEdit = popupTypeEdit.querySelector('.popup__form');
const nameInput = formElementTypeEdit.querySelector('.popup__input_type_name');
const jobInput = formElementTypeEdit.querySelector('.popup__input_type_description');
const saveBtnEditProfile = formElementTypeEdit.querySelector('.popup__button');

//кнопки добавления карточек
const profileAddButton = page.querySelector('.profile__add-button');

// //Popup добавления карточек
const popupTypeNewCard = page.querySelector('.popup_type_new-card');
const popupCloseTypeNewCardBtn = popupTypeNewCard.querySelector('.popup__close');
// // // const formPopupTypeNewCard = popupTypeNewCard.querySelector('.popup__form');
// // // const nameInputNewCard = formPopupTypeNewCard.querySelector('.popup__input_type_card-name');
// // // const linkInputNewCard = formPopupTypeNewCard.querySelector('.popup__input_type_url');
// // // const saveCardBtn = formPopupTypeNewCard.querySelector('button');

// @todo: Вывести карточки на страницу
initialCards.forEach(function(elem) {
  const card = createCard(elem, removeCard);
  placesList.append(card);
});

// Открытие Popup Редактирования профиля
buttonProfileEdit.addEventListener('click', () => {
  nameInput.value = page.querySelector('.profile__title').textContent;
  jobInput.value = page.querySelector('.profile__description').textContent;
  openModal(popupTypeEdit)});

//функция Редактирования профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  page.querySelector('.profile__title').textContent = nameInput.value;
  page.querySelector('.profile__description').textContent = jobInput.value;
};
formElementTypeEdit.addEventListener('submit', handleFormSubmit);

// Закрытие Popup Редактирования профиля
  closeModal(popupCloseTypeEditBtn, popupTypeEdit);
  closePopupEsc(popupTypeEdit);
  closePopupOverlay(popupTypeEdit);
  closeModal(saveBtnEditProfile, popupTypeEdit);


// Открытие Popup добавления карточки
  profileAddButton.addEventListener('click', () => {
  openModal(popupTypeNewCard)});

// Закрытие Popup добавления карточки
  closeModal(popupCloseTypeNewCardBtn, popupTypeNewCard);
  closePopupEsc(popupTypeNewCard);
  closePopupOverlay(popupTypeNewCard);

//Закрытие Popup картинки
  const popupTypeImage = page.querySelector('.popup_type_image');
  const popupCloseTypeImageBtn = popupTypeImage.querySelector('.popup__close');
  closeModal(popupCloseTypeImageBtn , popupTypeImage);
  closePopupEsc(popupTypeImage);
  closePopupOverlay(popupTypeImage);




// function addCard (evt) {
//   console.log(initialCards);
//   evt.preventDefault();
//   const newCrd = {
//     name: nameInputNewCard.value,
//     link: linkInputNewCard.value
//   };
//   initialCards.unshift(newCrd);;
//   nameInputNewCard.value = '';
//   linkInputNewCard.value = '';
//   popupTypeNewCard.classList.remove('popup_is-opened');
//   console.log(initialCards);
//   return(initialCards);
// }
// formPopupTypeNewCard.addEventListener('submit', addCard);