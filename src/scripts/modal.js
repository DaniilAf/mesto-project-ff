function openModal(popup){
  popup.classList.add('popup_is-animated');
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupEsc);
};

function closeModal(btn, popup) {
  btn.addEventListener('click', (function(){
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupEsc);
  }))
};

  function closePopupEsc(evt){
    if (evt.key === 'Escape'){
      popupTypeEdit.classList.remove('popup_is-opened');
      document.removeEventListener('keydown', closePopupEsc);
    };
    }

export { openModal, closeModal };