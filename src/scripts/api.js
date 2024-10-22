const PATH = 'https://nomoreparties.co';
const handleResponse = (response) => {
  if(response.ok) {
    return response.json()
  }
}

//Получение информации о пользователе
export const gettProfileData = () => {
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
  .then(handleResponse);
};

//получение карточек
export const getAllTodo = () => {
  return fetch(`${PATH}/v1/wff-cohort-24/cards` , {
    headers: {
      authorization: '0f0175eb-54aa-4ff1-94e6-d4abdbbdf33b'
    }
  })
  .then(handleResponse);
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
  .then(handleResponse);
};
