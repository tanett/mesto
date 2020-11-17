import {Card} from "./card.js";
import {FormValidator} from "./FormValidator.js";

//импорт стартового массива и переменных
import {initialCards,config, photoGrid,  buttonOpenPopupEdit , popupEditUserProfile, formEdit,
    nameInput, aboutInput,profileName,profileDescr,
    buttonOpenPopupAdd, popupShowPict, popupAddPict, formAdd,titleInput, linkInput,
    closePopupButtons, popups,
    popupFullsizePict, popupTitlePict} from "./utils.js";


// рендеринг первоначального массива фото
 initialCards.forEach(item => {
   const cardItem = new Card(item, '.template');
   const cardHtmlElement = cardItem.generateCard();
   cardHtmlElement.querySelector('.photo-grid__picture').addEventListener('click', popupOpenPict)
   photoGrid.append(cardHtmlElement);
 })

// открытие попапа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.body.addEventListener('keydown', escClosePopup);

}
// функция открытия попапа редактирования инфо
function popupOpenEdit() {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileDescr.textContent;
  openPopup(popupEditUserProfile);
}

// функция открытия попапа просмотра картинки фуллсайз
function popupOpenPict(event) {
  popupFullsizePict.src = event.target.src;
  popupTitlePict.textContent = event.target.alt;
  openPopup(popupShowPict);
}
// функция закрытия попапа
function popupClose(openedPopup) {
  // const openedPopup = document.querySelector('.popup_opened')
  document.body.removeEventListener('keydown', escClosePopup);
    openedPopup.classList.remove('popup_opened');

}
// функция закрытие по ESC
function escClosePopup(event) {
  if (event.key ==='Escape') {
    popupClose(document.querySelector('.popup_opened'));
  }
}
// функция закрытие по коику на оверлей
function onOverlayClick(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  popupClose(event.target);
}
// обработчик попапа редактирования инфо
function formSubmitHandlerEditUserProfile(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescr.textContent = aboutInput.value;
  popupClose(event.target.closest('.popup_opened'));
}

//функция получения новой фотокарточки из попапа добавления фото
function getNewCard(data) {
  const Item = new Card(data, '.template');
  const newItem = Item.generateCard();
  newItem.querySelector('.photo-grid__picture').addEventListener('click', popupOpenPict);
  return newItem;
}


// обработчик добавления картинки
function formSubmitHandlerAddPict(event) {
  event.preventDefault();

  photoGrid.prepend(getNewCard({name: titleInput.value, link : linkInput.value}));
  popupClose(event.target.closest('.popup_opened'));
  titleInput.value = '';
  linkInput.value = '';
}

//подключение валидации
Array.from(document.querySelectorAll('form')).forEach(form =>{
  const validator = new FormValidator(config, form);
  validator.enableValidation();
})


// установка слушателей
buttonOpenPopupEdit.addEventListener('click', popupOpenEdit);
buttonOpenPopupAdd.addEventListener('click', () =>openPopup(popupAddPict));

formEdit.addEventListener('submit', formSubmitHandlerEditUserProfile);
formAdd.addEventListener('submit', formSubmitHandlerAddPict);

popups.forEach((popup) => {
  popup.addEventListener('click', onOverlayClick);
});

closePopupButtons.forEach((buttonClosePopup) => buttonClosePopup.addEventListener('click', () =>popupClose(buttonClosePopup.closest('.popup_opened'))));









