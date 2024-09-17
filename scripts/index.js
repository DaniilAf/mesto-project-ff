// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function addCard(element, delCard){
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  cardElement.querySelector('.card__image').src = element.link
  cardElement.querySelector('.card__image').alt = element.name
  cardElement.querySelector('.card__title').textContent = element.name

  const deleteCardButton = cardElement.querySelector ('.card__delete-button');
  deleteCardButton.addEventListener('click', () => {
    delCard(cardElement);
  });

  return cardElement; 
  };

// // @todo: Функция удаления карточки
function removeCard(card) {
  card.remove();
};

// // @todo: Вывести карточки на страницу
initialCards.forEach(function(elem) {
  const card = addCard(elem, removeCard);
  placesList.append(card);
});