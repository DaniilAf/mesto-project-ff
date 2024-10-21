import './pages/index.css';
import { enableValidation, clearValidation } from './scripts/validation.js';
import { initialCards } from './scripts/cards.js';
import {createCard, deleteCard, cardLike} from './scripts/card.js';
import { openModal, closeModal, closePopupOverlay } from './scripts/modal.js';

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
const page = document.querySelector('.page');
const popups = document.querySelectorAll('.popup');

//кнопки Редактирования профиля
const buttonProfileEdit = page.querySelector('.profile__edit-button');

//Popup Редактирования профиля
const popupTypeEdit = page.querySelector('.popup_type_edit');
const formElementTypeEdit = popupTypeEdit.querySelector('.popup__form');
const nameInput = formElementTypeEdit.querySelector('.popup__input_type_name');
const jobInput = formElementTypeEdit.querySelector('.popup__input_type_description');

//кнопки добавления карточек
const profileAddButton = page.querySelector('.profile__add-button');

//Popup добавления карточек
const popupTypeNewCard = page.querySelector('.popup_type_new-card');
const popupTypeNewCardForm = popupTypeNewCard.querySelector('.popup__form');

//Popup формы добавления карточек
const formPopupTypeNewCard = popupTypeNewCard.querySelector('.popup__form');
const nameInputNewCard = formPopupTypeNewCard.querySelector('.popup__input_type_card-name');
const linkInputNewCard = formPopupTypeNewCard.querySelector('.popup__input_type_url');

//Popup открытия картинки
const popupTypeImage = page.querySelector('.popup_type_image');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupImageCaption = popupTypeImage.querySelector('.popup__caption');

// Валидации
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'button_inactive', 
  inputErrorClass: '.form-input-error',
  errorClass: 'form__input-error_active', 
};

// @todo: Вывести карточки на страницу
initialCards.forEach(elem => {
  const createdCard = createCard(elem, deleteCard, openCardImage, cardLike);
  placesList.append(createdCard);
});

//Плавное открытие/закрытие popup
document.querySelectorAll('.popup').forEach(function (popup) {
  popup.classList.add('popup_is-animated');
})

// Открытие Popup Редактирования профиля
buttonProfileEdit.addEventListener('click', () => { 
  nameInput.value = page.querySelector('.profile__title').textContent;
  jobInput.value = page.querySelector('.profile__description').textContent;
  openModal(popupTypeEdit);
  clearValidation(formElementTypeEdit, validationConfig);
});

//функция Редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  page.querySelector('.profile__title').textContent = nameInput.value;
  page.querySelector('.profile__description').textContent = jobInput.value;
  closeModal(popupTypeEdit);
};
formElementTypeEdit.addEventListener('submit', handleProfileFormSubmit);

// Закрытие Popup Редактирования профиля
popups.forEach((popup) => {
  const closeButton = popup.querySelector(".popup__close")
  closeButton.addEventListener("click", () => {
    closeModal(popup);
  });
});
  closePopupOverlay(popupTypeEdit);

// Открытие Popup добавления карточки
  profileAddButton.addEventListener('click', () => {
    nameInputNewCard.value = '';
    linkInputNewCard.value = '';
    openModal(popupTypeNewCard);
    clearValidation(popupTypeNewCardForm, validationConfig);
});

// Закрытие Popup добавления карточки
  closePopupOverlay(popupTypeNewCard);

//Открытие Popup картинки
function openCardImage(elem) {
  popupImage.src = elem.link;
  popupImage.alt = elem.name;
  popupImageCaption.textContent = elem.name;
  openModal(popupTypeImage);
}

//Закрытие Popup картинки
  closePopupOverlay(popupTypeImage);

  function addNewCard (evt) {
    evt.preventDefault();
  
    const elem = {
      name: nameInputNewCard.value,
      link: linkInputNewCard.value
    }
  
    const createdCard = createCard(elem, deleteCard, openCardImage, cardLike);
    placesList.prepend(createdCard);
  
    popupTypeNewCardForm.reset();
    closeModal(popupTypeNewCard);
  }
  popupTypeNewCardForm.addEventListener('submit', addNewCard);

  enableValidation(validationConfig);