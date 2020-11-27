import {Card} from "../components/card.js";
import {FormValidator} from "../components/FormValidator.js";
import {Section} from "../components/Section.js";

import {PopupWithImage} from "../components/PopupWithImage.js";

//импорт стартового массива и переменных
import {initialCards,config,   buttonOpenPopupEdit ,profileName,profileDescr,
    buttonOpenPopupAdd} from "../utils/utils.js";

import {PopupWithForm} from "../components/PopupWithForm.js";
//

// функция открытия попапа просмотра  при клике на карточку
function cardClick() {
    PopupShowPict.open(event);
}

// обработчик добавления картинки
function formSubmitHandlerAddPict(event) {
    event.preventDefault();
    const renderCardItem = new Section({
        renderer: () => {
            const cardItem = new Card(PopupAddImage._getInputValues(), cardClick, '.template');
            return cardItem.generateCard();
        }
    }, '.photo-grid');
    renderCardItem.addItem(renderCardItem._renderer());
    PopupAddImage.close.bind(PopupAddImage)();
}


// обработчик попапа редактирования инфо
function formSubmitHandlerEditUserProfile(event) {
    event.preventDefault();
    const inputValue = PopupEditInfo._getInputValues();
  profileName.textContent = inputValue.name;
  profileDescr.textContent = inputValue.about;
    PopupEditInfo.close();
}

//попап просмотра картинки
const PopupShowPict = new PopupWithImage('.popup_show-pict');
PopupShowPict.setEventListeners();

//попап редактирования инфо
const PopupEditInfo = new PopupWithForm(formSubmitHandlerEditUserProfile,'.popup_edit-user-profile');
PopupEditInfo.setEventListeners();

//попап добавления картинки
const PopupAddImage = new PopupWithForm(formSubmitHandlerAddPict,'.popup_add-pict');
PopupAddImage.setEventListeners();

//подключение валидации
Array.from(document.querySelectorAll('form')).forEach(form =>{
    const validator = new FormValidator(config, form);
    validator.enableValidation();
})

// рендеринг первоначального массива фото
const renderInitialsCard = new Section({items :initialCards,
renderer:(item) => {
  const cardItem = new Card(item, cardClick, '.template');
  const cardHtmlElement = cardItem.generateCard();
  renderInitialsCard.addItem(cardHtmlElement);

} }, '.photo-grid');

//Вызов метода отображения стартового массива
renderInitialsCard.rendererAllElements();

// установка слушателей
buttonOpenPopupEdit.addEventListener('click', ()=>PopupEditInfo.open());
buttonOpenPopupAdd.addEventListener('click', ()=>PopupAddImage.open());











