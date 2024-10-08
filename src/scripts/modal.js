function openModal(popup){
  popup.classList.add('popup_is-opened');
};


function closeModal(btn, popup) {
  btn.addEventListener('click', (function(){
    popup.classList.remove('popup_is-opened');
  }))
};

function closePopupEsc(popup){
document.addEventListener('keydown', (evt) => {
  if (evt.code === "Escape") {
    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', closePopupEsc);
  }
});
}

function closePopupOverlay(popup){
  popup.addEventListener('click', (evt) => {
    if (evt.target === popup) {
      popup.classList.remove('popup_is-opened');
    }
  });
}

export { openModal, closeModal, closePopupEsc, closePopupOverlay };