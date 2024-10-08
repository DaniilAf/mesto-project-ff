// @todo: Функция создания карточки
function createCard(elem, deleteCard, imageClick, cardLike) {
  // @todo: Темплейт карточки
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteCardButton = cardElement.querySelector('.card__delete-button');
  deleteCardButton.addEventListener('click', deleteCard);

  const popupTypeImage = document.querySelector('.popup_type_image');
  cardImage.addEventListener('click', function () {
    imageClick(elem, popupTypeImage);
  });

  const cardLikeButton = cardElement.querySelector('.card__like-button');
  cardLikeButton.addEventListener('click', cardLike);

  cardImage.src = elem.link;
  cardImage.alt = elem.name;
  cardTitle.textContent = elem.name;

  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
  const cardDelete = evt.target.closest('.places__item');
  cardDelete.remove();
  }

// @todo: Функция лайка карточки
function cardLike(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
  }

  export { createCard, deleteCard, cardLike };