import { getAllTodo, createTodo, createProfile, gettProfileData } from './scripts/api.js';
import './pages/index.css';
import { enableValidation, clearValidation } from './scripts/validation.js';
import {createCard, deleteCard, cardLike} from './scripts/card.js';
import { openModal, closeModal, closePopupOverlay } from './scripts/modal.js';

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
const page = document.querySelector('.page');
const popups = document.querySelectorAll('.popup');

//кнопки Редактирования профиля
const buttonProfileEdit = page.querySelector('.profile__edit-button');

//Popup Редактирования профиля
const profileTitle = page.querySelector('.profile__title');
const profileDescription = page.querySelector('.profile__description');
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

//Получение информации о пользователе
gettProfileData()
.then((response) => {
  profileTitle.textContent = response.name,
  profileDescription.textContent = response.about
});

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
getAllTodo()
.then((response) => {
  response.forEach(elem => {
      const createdCard = createCard(elem, deleteCard, openCardImage, cardLike);
      placesList.append(createdCard);
    })}
    );


//Плавное открытие/закрытие popup
document.querySelectorAll('.popup').forEach(function (popup) {
  popup.classList.add('popup_is-animated');
})

// Открытие Popup Редактирования профиля
buttonProfileEdit.addEventListener('click', () => { 
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openModal(popupTypeEdit);
  clearValidation(formElementTypeEdit, validationConfig);
});

//функция Редактирования профиля
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const ProfileData = {
  name: nameInput.value,
  about: jobInput.value
  }

  createProfile(ProfileData);

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

//Отправка карточки на сервер
  function addNewCard (evt) {
    evt.preventDefault();
  
    const elem = {
      name: nameInputNewCard.value,
      link: linkInputNewCard.value
    }
  
    const createdCard = createCard(elem, deleteCard, openCardImage, cardLike);
    placesList.prepend(createdCard);

    createTodo(elem);
  
    popupTypeNewCardForm.reset();
    closeModal(popupTypeNewCard);
  }
  popupTypeNewCardForm.addEventListener('submit', addNewCard);

  enableValidation(validationConfig);


  //получение обоих запросов
  // Promise.all([getAllTodo(), createTodo(newCardData)])
  // .then((allCards, newCard) => {

  // })

