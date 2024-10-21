
function openModal(popup){
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupEsc);
};

function closeModal(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupEsc);
};

function closePopupEsc(event) {
  if(event.key === 'Escape') {
    closeModal(document.querySelector('.popup_is-opened'));
  }
}

function closePopupOverlay(popup){
  popup.addEventListener('click', (evt) => {
    if (evt.target === popup) {
      closeModal(popup);
    }
  });
}

export { openModal, closeModal, closePopupOverlay };