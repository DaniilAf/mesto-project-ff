import './pages/index.css';
import { initialCards } from './scripts/cards.js';
import {createCard, deleteCard, cardLike} from './scripts/card.js';
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

//Popup добавления карточек
const popupTypeNewCard = page.querySelector('.popup_type_new-card');
const popupTypeNewCardForm = popupTypeNewCard.querySelector('.popup__form');
const popupCloseTypeNewCardBtn = popupTypeNewCard.querySelector('.popup__close');
const popupTypeNewCardSaveBtn = popupTypeNewCardForm.querySelector('.popup__button');

//Popup формы добавления карточек
const formPopupTypeNewCard = popupTypeNewCard.querySelector('.popup__form');
const nameInputNewCard = formPopupTypeNewCard.querySelector('.popup__input_type_card-name');
const linkInputNewCard = formPopupTypeNewCard.querySelector('.popup__input_type_url');
const saveCardBtn = formPopupTypeNewCard.querySelector('button');

//Popup открытия картинки
const popupTypeImage = page.querySelector('.popup_type_image');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupImageCaption = popupTypeImage.querySelector('.popup__caption');

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
  closeModal(popupTypeNewCardSaveBtn, popupTypeNewCard);
  closePopupEsc(popupTypeNewCard);
  closePopupOverlay(popupTypeNewCard);

//Открытие Popup картинки
function openCardImage(elem, popupTypeImage) {
  popupImage.src = elem.link;
  popupImage.alt = elem.name;
  popupImageCaption.textContent = elem.name;
  openModal(popupTypeImage);
}

//Закрытие Popup картинки
  const popupCloseTypeImageBtn = popupTypeImage.querySelector('.popup__close');
  closeModal(popupCloseTypeImageBtn , popupTypeImage);
  closePopupEsc(popupTypeImage);
  closePopupOverlay(popupTypeImage);


  function addNewCard (evt) {
    evt.preventDefault();
  
    const elem = {
      name: nameInputNewCard.value,
      link: linkInputNewCard.value
    }
  
    const createdCard = createCard(elem, deleteCard, openCardImage, cardLike);
    placesList.prepend(createdCard);
  
    closeModal(saveCardBtn, popupTypeNewCard);
    popupTypeNewCardForm.reset();
  }
  popupTypeNewCardForm.addEventListener('submit', addNewCard);

