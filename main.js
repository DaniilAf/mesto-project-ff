(()=>{"use strict";function e(e,t,n,r){var o=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),p=o.querySelector(".card__image"),c=o.querySelector(".card__title");return o.querySelector(".card__delete-button").addEventListener("click",t),p.addEventListener("click",(function(){n(e)})),o.querySelector(".card__like-button").addEventListener("click",r),p.src=e.link,p.alt=e.name,c.textContent=e.name,o}function t(e){e.target.closest(".places__item").remove()}function n(e){e.target.classList.toggle("card__like-button_is-active")}function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",p)}function o(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",p)}function p(e){"Escape"===e.key&&o(document.querySelector(".popup_is-opened"))}function c(e){e.addEventListener("click",(function(t){t.target===e&&o(e)}))}var u=document.querySelector(".places__list"),i=document.querySelector(".page"),l=document.querySelectorAll(".popup"),a=i.querySelector(".profile__edit-button"),d=i.querySelector(".popup_type_edit"),s=d.querySelector(".popup__form"),_=s.querySelector(".popup__input_type_name"),y=s.querySelector(".popup__input_type_description"),m=i.querySelector(".profile__add-button"),f=i.querySelector(".popup_type_new-card"),v=f.querySelector(".popup__form"),q=f.querySelector(".popup__form"),S=q.querySelector(".popup__input_type_card-name"),k=q.querySelector(".popup__input_type_url"),g=i.querySelector(".popup_type_image"),E=g.querySelector(".popup__image"),L=g.querySelector(".popup__caption");function h(e){E.src=e.link,E.alt=e.name,L.textContent=e.name,r(g)}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(r){var o=e(r,t,h,n);u.append(o)})),document.querySelectorAll(".popup").forEach((function(e){e.classList.add("popup_is-animated")})),a.addEventListener("click",(function(){_.value=i.querySelector(".profile__title").textContent,y.value=i.querySelector(".profile__description").textContent,r(d)})),s.addEventListener("submit",(function(e){e.preventDefault(),i.querySelector(".profile__title").textContent=_.value,i.querySelector(".profile__description").textContent=y.value,o(d)})),l.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(){o(e)}))})),c(d),m.addEventListener("click",(function(){r(f)})),c(f),c(g),v.addEventListener("submit",(function(r){r.preventDefault();var p=e({name:S.value,link:k.value},t,h,n);u.prepend(p),v.reset(),o(f)}))})();