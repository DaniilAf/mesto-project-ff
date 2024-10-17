//показывает элемент ошибки
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__error_visible');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input_type_error');
};

//скрывает элемент ошибки
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__error_visible');
  errorElement.classList.remove('popup__input_type_error');
  errorElement.textContent = '';
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      isValid(formElement, inputElement);
    });
  });
};

function enableValidation () {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
  });

    setEventListeners(formElement);
}); 
}

export { enableValidation }


//функция активации валидации
// function enableValidation(){
  // formSelector: '.popup__form',
  // inputSelector: '.popup__input',
  // submitButtonSelector: '.popup__button',
  // inactiveButtonClass: 'popup__button_disabled',
  // inputErrorClass: 'popup__input_type_error',
  // errorClass: 'popup__error_visible'
// }; 

//функция очистки ошибок валидации
function clearValidation() {

}

//Создайте функцию clearValidation, которая очищает ошибки
//валидации формы и делает кнопку неактивной. Эта функция
//должна принимать как параметры DOM-элемент формы,
//для которой очищаются ошибки валидации и объект 
//с настройками валидации. Используйте функцию 
//clearValidation при заполнении формы профиля во время 
//её открытия и при очистке формы добавления карточки.

// очистка ошибок валидации вызовом clearValidation
//clearValidation(profileForm, validationConfig);


