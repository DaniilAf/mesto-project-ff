import { 
  getAllCards, 
  createTodo, 
  createProfile, 
  getProfileData, 
  createAvatar } from './scripts/api.js';
import './pages/index.css';
import { enableValidation, clearValidation } from './scripts/validation.js';
import {createCard, deleteCard, cardLike} from './scripts/card.js';
import { openModal, closeModal, closePopupOverlay } from './scripts/modal.js';

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');
const page = document.querySelector('.page');
const popups = document.querySelectorAll('.popup');

//Редактирование Аватара
const profileAvatarImage = page.querySelector('.profile__image');
const popupTypeAvatar = page.querySelector('.popup_type_avatar');
const popupAvatarForm = popupTypeAvatar.querySelector('.popup__form');
const popupInputAvatar = popupAvatarForm.querySelector('.popup__input_type_url_avatar');
const saveBtnAvatar = popupAvatarForm.querySelector('.popup__button');

//кнопки Редактирования профиля
const buttonProfileEdit = page.querySelector('.profile__edit-button');

//Popup Редактирования профиля
const profileTitle = page.querySelector('.profile__title');
const profileDescription = page.querySelector('.profile__description');
const popupTypeEdit = page.querySelector('.popup_type_edit');
const formElementTypeEdit = popupTypeEdit.querySelector('.popup__form');
const nameInput = formElementTypeEdit.querySelector('.popup__input_type_name');
const jobInput = formElementTypeEdit.querySelector('.popup__input_type_description');
const saveBtnTypeEdit = formElementTypeEdit.querySelector('.popup__button');

//кнопки добавления карточек
const profileAddButton = page.querySelector('.profile__add-button');

//Popup добавления карточек
const popupTypeNewCard = page.querySelector('.popup_type_new-card');
const popupTypeNewCardForm = popupTypeNewCard.querySelector('.popup__form');

//Popup формы добавления карточек
const formPopupTypeNewCard = popupTypeNewCard.querySelector('.popup__form');
const nameInputNewCard = formPopupTypeNewCard.querySelector('.popup__input_type_card-name');
const linkInputNewCard = formPopupTypeNewCard.querySelector('.popup__input_type_url');
const saveBtnNewCard = formPopupTypeNewCard.querySelector('.popup__button')

//Popup открытия картинки
const popupTypeImage = page.querySelector('.popup_type_image');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popupImageCaption = popupTypeImage.querySelector('.popup__caption');

function waitingForSaving(saving, button) {
  button.textContent = saving ? 'Сохранение...' : 'Сохранить';
}

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
function renderCard(elem, userInfo) {
  elem.forEach(elem => {
      const createdCard = createCard(elem, deleteCard, openCardImage, cardLike, userInfo);
      placesList.append(createdCard);
    });
  }

//Данные о пользователе и карточках
Promise.all([getAllCards(), getProfileData()])
.then(([elem, userInfo]) => {
renderCard(elem, userInfo);
profileTitle.textContent = userInfo.name,
profileDescription.textContent = userInfo.about,
profileAvatarImage.style.backgroundImage = `url(${userInfo.avatar})`;
})
.catch((err) => {
  console.log(err);
});

//Плавное открытие/закрытие popup
document.querySelectorAll('.popup').forEach(function (popup) {
  popup.classList.add('popup_is-animated');
})

//Открытие Popup Аватара
profileAvatarImage.addEventListener('click', () => { 
  popupInputAvatar.value = '';
  openModal(popupTypeAvatar);
  clearValidation(popupAvatarForm, validationConfig);
});

//функция Редактирования Аватара
function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  
  waitingForSaving(true, saveBtnAvatar)

  const avatarData = {
  avatar: popupInputAvatar.value
  }

  createAvatar(avatarData)
  .then((res) => {
    profileAvatarImage.style.backgroundImage = `url(${res.avatar})`;
    closeModal(popupTypeAvatar);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    waitingForSaving(false, saveBtnAvatar)
  });
};
popupAvatarForm.addEventListener('submit', handleAvatarFormSubmit);

// Закрытие Popup Редактирования Аватара
closePopupOverlay(popupTypeAvatar);

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

  waitingForSaving(true, saveBtnTypeEdit)

  const profileData = {
  name: nameInput.value,
  about: jobInput.value
  }

  createProfile(profileData)
  .then((res) => {
    profileTitle.textContent = res.name,
    profileDescription.textContent = res.about;
    closeModal(popupTypeEdit);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    waitingForSaving(false, saveBtnTypeEdit);
});
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

    waitingForSaving(true, saveBtnNewCard);
  
    const elem = {
      name: nameInputNewCard.value,
      link: linkInputNewCard.value,
    }
    
    createTodo(elem)
    .then(elem => {
    const createdCard = createCard(elem, deleteCard, openCardImage, cardLike, elem.owner);
    placesList.prepend(createdCard);
    popupTypeNewCardForm.reset();
    closeModal(popupTypeNewCard);
  })

    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      waitingForSaving(false, saveBtnNewCard)
    });
  }
  popupTypeNewCardForm.addEventListener('submit', addNewCard);

  enableValidation(validationConfig);

