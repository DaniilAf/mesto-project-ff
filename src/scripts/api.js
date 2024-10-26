const PATH = 'https://nomoreparties.co';
const handleResponse = (response) => {
  if(response.ok) {
    return response.json()
  }
}

//Получение информации о пользователе
export const getProfileData = () => {
  return fetch(`${PATH}/v1/wff-cohort-24/users/me ` , {
    headers: {
      authorization: '0f0175eb-54aa-4ff1-94e6-d4abdbbdf33b'
    }
  })
  .then(handleResponse)
};

// //Отправка информации о пользователе
export const createProfile = (newProfileData) => {
  return fetch(`${PATH}/v1/wff-cohort-24/users/me` , {
    method: 'PATCH',
    headers: {
      authorization: '0f0175eb-54aa-4ff1-94e6-d4abdbbdf33b',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newProfileData)
  })
  .then(handleResponse)
};

//получение карточек
export const getAllCards = () => {
  return fetch(`${PATH}/v1/wff-cohort-24/cards` , {
    headers: {
      authorization: '0f0175eb-54aa-4ff1-94e6-d4abdbbdf33b',
      'Content-Type': 'application/json'
    }
  })
  .then(handleResponse)
};

  //Отправка карточки
  export const createTodo = (newCardData) => {
  return fetch(`${PATH}/v1/wff-cohort-24/cards` , {
    method: 'POST',
    headers: {
      authorization: '0f0175eb-54aa-4ff1-94e6-d4abdbbdf33b',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newCardData)
  })
  .then(handleResponse)
};

//Удаление карточки
export const deleteCardServ = (cardId) => {
  return fetch(`${PATH}/v1/wff-cohort-24/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: '0f0175eb-54aa-4ff1-94e6-d4abdbbdf33b',
        'Content-Type': 'application/json'
      }
    })
    .then(handleResponse)
  };

//Лайк карточки
export const addLikeCard = (cardId) => {
  return fetch(`${PATH}/v1/wff-cohort-24/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: {
        authorization: '0f0175eb-54aa-4ff1-94e6-d4abdbbdf33b',
        'Content-Type': 'application/json'
      },
  })
  .then(handleResponse);
}

//Удаление лайка
export const deleteLikeCard = (cardId) => {
  return fetch(`$${PATH}/v1/wff-cohort-24/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: '0f0175eb-54aa-4ff1-94e6-d4abdbbdf33b',
        'Content-Type': 'application/json'
      },
  })
  .then(handleResponse);
}

//Смена аватара
export const createAvatar = (newAvatar) => {
  return fetch(`${PATH}/v1/wff-cohort-24/users/me/avatar` , {
    method: 'PATCH',
    headers: {
      authorization: '0f0175eb-54aa-4ff1-94e6-d4abdbbdf33b',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newAvatar)
  })
  .then(handleResponse)
};