export { createCard, deleteCard, cardLike };
import { deleteCardServ, addLikeCard, deleteLikeCard } from "../scripts/api";

// @todo: Функция создания карточки
function createCard(elem, deleteCard, imageClick, cardLike, userInfo) {
  // @todo: Темплейт карточки
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  const deleteCardButton = cardElement.querySelector('.card__delete-button');
  const likesCounter = cardElement.querySelector('.like-counter');

  cardImage.addEventListener('click', function () {
    imageClick(elem);
  });

  cardImage.src = elem.link;
  cardImage.alt = elem.name;
  cardTitle.textContent = elem.name;
  likesCounter.textContent = elem.likes.length;

//Удаление карточки
if(elem.owner._id === userInfo._id) {
  deleteCardButton.addEventListener('click', () => {
    deleteCardServ(elem._id)
      .then(() => deleteCard(cardElement))
      .catch((err) => {
        console.log(err); 
      }); 
    });
} else {
  deleteCardButton.style.display = "none";
}

//Лайк карточки
if(givenLikes(elem.likes, userInfo._id)) {
  cardLikeButton.classList.add('card__like-button_is-active');
};

cardLikeButton.addEventListener('click', (evt) => {
  updatingNumberLikes(evt, elem._id).then((result) => {
      likesCounter.textContent = result.likes.length;
      cardLike(evt);
  }).catch((err) => {
    console.log(err)
  });     
});

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

// //Количество лайков
function givenLikes(cardlikes, userInfo) {
  const likesList = Array.from(cardlikes);
  return likesList.some((like) => {
      return like._id === userInfo;
    })
}

  const updatingNumberLikes = (evt, cardId) => {
    return evt.target.classList.contains('card__like-button_is-active') ? deleteLikeCard(cardId) : addLikeCard(cardId);
}