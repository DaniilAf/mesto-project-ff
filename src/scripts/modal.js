function openModal(popup){
  popup.classList.add('popup_is-animated');
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupEsc);
};

function closeModal(btn, popup) {
  btn.addEventListener('click', (function(){
    popup.classList.remove('popup_is-opened');
  }))
};

function closePopupEsc(evt) {
    if (evt.key === 'Enter'){
    popup.classList.remove('popup_is-opened')};
  };

  // function closePopupEsc(popup) {
  //   popup.classList.remove('popup_is-opened');
  //   document.removeEventListener('keydown' closeEsc);
  // }

export { openModal, closeModal };