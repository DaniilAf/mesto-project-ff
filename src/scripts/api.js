const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-24",
  headers: {
    authorization: "0f0175eb-54aa-4ff1-94e6-d4abdbbdf33b",
    "Content-Type": "application/json",
  },
} 

const handleResponse = (response) => {
  if(response.ok) {
    return response.json()
  }
}

//Получение информации о пользователе
export const getProfileData = () => {
  return fetch(`${config.baseUrl}/users/me ` , {
    headers: config.headers
  })
  .then(handleResponse)
};

// //Отправка информации о пользователе
export const createProfile = (newProfileData) => {
  return fetch(`${config.baseUrl}/users/me` , {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(newProfileData)
  })
  .then(handleResponse)
};

//получение карточек
export const getAllCards = () => {
  return fetch(`${config.baseUrl}/cards` , {
    headers: config.headers,
  })
  .then(handleResponse)
};

  //Отправка карточки
  export const createTodo = (newCardData) => {
  return fetch(`${config.baseUrl}/cards` , {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify(newCardData)
  })
  .then(handleResponse)
};

//Удаление карточки
export const deleteCardServ = (cardId) => {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: config.headers
    })
    .then(handleResponse)
  };

//Лайк карточки
export const addLikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: config.headers
  })
  .then(handleResponse);
}

//Удаление лайка
export const deleteLikeCard = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: config.headers
  })
  .then(handleResponse);
}

//Смена аватара
export const createAvatar = (newAvatar) => {
  return fetch(`${config.baseUrl}/users/me/avatar` , {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify(newAvatar)
  })
  .then(handleResponse)
};