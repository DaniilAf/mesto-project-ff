// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: Функция создания карточки
function createCard(element, delCard ){
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');

  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardTitle.textContent = element.name;

  cardElement.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_is-active')
  });

  cardImage.addEventListener('click', function () {
    const popupImage = document.querySelector('.popup__image');
    const popupCaption = document.querySelector('.popup__caption');
    popupImage.src = cardImage.src;
    popupImage.alt = cardImage.alt;
    popupCaption.textContent = cardTitle.textContent
    document.querySelector('.popup_type_image').classList.add('popup_is-opened');
  });

  const deleteCardButton = cardElement.querySelector ('.card__delete-button');
  deleteCardButton.addEventListener('click', () => {
    delCard(cardElement);
  });

  return cardElement; 
  };

// @todo: Функция удаления карточки
function removeCard(card) {
  card.remove();
};


export { createCard, removeCard };