(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-24",headers:{authorization:"0f0175eb-54aa-4ff1-94e6-d4abdbbdf33b","Content-Type":"application/json"}},t=function(e){if(e.ok)return e.json()},n=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));r.classList.remove(n.errorClass),t.setCustomValidity(""),r.textContent=""},r=function(e,t){var n=e.querySelector(t.submitButtonSelector);!function(e,t){return Array.from(e.querySelectorAll(t.inputSelector)).some((function(e){return!e.validity.valid}))}(e,t)?(n.disabled=!1,n.classList.remove(t.inactiveButtonClass)):(n.disabled=!0,n.classList.add(t.inactiveButtonClass))};function o(e,t){e.querySelector(t.submitButtonSelector),Array.from(e.querySelectorAll(t.inputSelector)).forEach((function(r){n(e,r,t)})),r(e,t)}function c(n,r,o,c,a){var u=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),l=u.querySelector(".card__image"),s=u.querySelector(".card__title"),p=u.querySelector(".card__like-button"),d=u.querySelector(".card__delete-button"),f=u.querySelector(".like-counter");return l.addEventListener("click",(function(){o(n)})),l.src=n.link,l.alt=n.name,s.textContent=n.name,f.textContent=n.likes.length,n.owner._id===a._id?d.addEventListener("click",(function(){var o;(o=n._id,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then(t)).then((function(){return r(u)})).catch((function(e){console.log(e)}))})):d.style.display="none",function(e,t){return Array.from(e).some((function(e){return e._id===t}))}(n.likes,a._id)&&p.classList.add("card__like-button_is-active"),p.addEventListener("click",(function(e){i(e,n._id).then((function(t){f.textContent=t.likes.length,c(e)})).catch((function(e){console.log(e)}))})),u}var a=function(e){e.remove()};function u(e){e.target.classList.toggle("card__like-button_is-active")}var i=function(n,r){return n.target.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)}(r):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)}(r)};function l(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",p)}function s(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",p)}function p(e){"Escape"===e.key&&s(document.querySelector(".popup_is-opened"))}function d(e){e.addEventListener("click",(function(t){t.target===e&&s(e)}))}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _=document.querySelector(".places__list"),y=document.querySelector(".page"),m=document.querySelectorAll(".popup"),v=y.querySelector(".profile__image"),h=y.querySelector(".popup_type_avatar"),S=h.querySelector(".popup__form"),b=S.querySelector(".popup__input_type_url_avatar"),q=S.querySelector(".popup__button"),g=y.querySelector(".profile__edit-button"),E=y.querySelector(".profile__title"),k=y.querySelector(".profile__description"),C=y.querySelector(".popup_type_edit"),L=C.querySelector(".popup__form"),A=L.querySelector(".popup__input_type_name"),x=L.querySelector(".popup__input_type_description"),U=L.querySelector(".popup__button"),w=y.querySelector(".profile__add-button"),T=y.querySelector(".popup_type_new-card"),O=T.querySelector(".popup__form"),j=T.querySelector(".popup__form"),B=j.querySelector(".popup__input_type_card-name"),D=j.querySelector(".popup__input_type_url"),I=j.querySelector(".popup__button"),P=y.querySelector(".popup_type_image"),M=P.querySelector(".popup__image"),N=P.querySelector(".popup__caption");function J(e,t){t.textContent=e?"Сохранение...":"Сохранить"}var V={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"button_inactive",inputErrorClass:".form-input-error",errorClass:"form__input-error_active"};function H(e){M.src=e.link,M.alt=e.name,N.textContent=e.name,l(P)}Promise.all([fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/users/me "),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];!function(e,t){e.forEach((function(e){var n=c(e,a,H,u,t);_.append(n)}))}(o,i),E.textContent=i.name,k.textContent=i.about,v.style.backgroundImage="url(".concat(i.avatar,")")})).catch((function(e){console.log(e)})),document.querySelectorAll(".popup").forEach((function(e){e.classList.add("popup_is-animated")})),v.addEventListener("click",(function(){b.value="",l(h),o(S,V)})),S.addEventListener("submit",(function(n){var r;n.preventDefault(),J(!0,q),(r={avatar:b.value},fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify(r)}).then(t)).then((function(e){v.style.backgroundImage="url(".concat(e.avatar,")"),s(h)})).catch((function(e){console.log(e)})).finally((function(){J(!1,q)}))})),d(h),g.addEventListener("click",(function(){A.value=E.textContent,x.value=k.textContent,l(C),o(L,V)})),L.addEventListener("submit",(function(n){var r;n.preventDefault(),J(!0,U),(r={name:A.value,about:x.value},fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify(r)}).then(t)).then((function(e){E.textContent=e.name,k.textContent=e.about,s(C)})).catch((function(e){console.log(e)})).finally((function(){J(!1,U)}))})),m.forEach((function(e){e.querySelector(".popup__close").addEventListener("click",(function(){s(e)}))})),d(C),w.addEventListener("click",(function(){B.value="",D.value="",l(T),o(O,V)})),d(T),d(P),O.addEventListener("submit",(function(n){var r;n.preventDefault(),J(!0,I),(r={name:B.value,link:D.value},fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify(r)}).then(t)).then((function(e){var t=c(e,a,H,u,e.owner);_.prepend(t),O.reset(),s(T)})).catch((function(e){console.log(e)})).finally((function(){J(!1,I)}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var o=Array.from(e.querySelectorAll(t.inputSelector));r(e,t),o.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,r){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?n(e,t,r):function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));r.classList.add(n.errorClass),r.textContent=t.validationMessage}(e,t,r)}(e,o,t),r(e,t)}))}))}(t,e)}))}(V)})();