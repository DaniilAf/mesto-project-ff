export { createCard, deleteCard, cardLike };
import { deleteCardServ, addLikeCard, deleteLikeCard } from "../scripts/api";

// @todo: Функция создания карточки
function createCard(elem, deleteCard, imageClick, cardLike, userInfo) {
  // @todo: Темплейт карточки
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteCardButton = cardElement.querySelector('.card__delete-button');

  cardImage.addEventListener('click', function () {
    imageClick(elem);
  });

  const cardLikeButton = cardElement.querySelector('.card__like-button');
  cardLikeButton.addEventListener('click', cardLike);

  cardImage.src = elem.link;
  cardImage.alt = elem.name;
  cardTitle.textContent = elem.name;

//Удаление карточки
if(elem.owner._id != userInfo._id) {
  deleteCardButton.classList.add('card__delete-button-hidden');
} else {
  deleteCardButton.addEventListener('click', () => {
    deleteCardServ(elem._id)
      .then(() => deleteCard(cardElement))});
}

  return cardElement;
}

// @todo: Функция удаления карточки
const deleteCard = (cardElement) => {
  cardElement.remove();
}

// @todo: Функция лайка карточки
function cardLike(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
  }
