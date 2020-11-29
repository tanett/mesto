import {Card} from "../components/card.js";
import {FormValidator} from "../components/FormValidator.js";
import {Section} from "../components/Section.js";
import {UserInfo} from "../components/UserInfo.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";

//импорт стартового массива и переменных
import {initialCards,config,   buttonOpenPopupEdit ,profileName,profileDescr,
    buttonOpenPopupAdd} from "../utils/utils.js";



// рендеринг первоначального массива фото
const renderInitialsCard = new Section({items :initialCards,
    renderer:(item) => {
        const cardItem = new Card(item, cardClick, '.template');
        const cardHtmlElement = cardItem.generateCard();
        renderInitialsCard.addItem(cardHtmlElement);

    } }, '.photo-grid');

//Вызов метода отображения стартового массива
renderInitialsCard.rendererAllElements();

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

//попап добавления картинки
const PopupAddImage = new PopupWithForm(formSubmitHandlerAddPict,'.popup_add-pict');
PopupAddImage.setEventListeners();

//вызов класса с инфо юзера
const UserInf = new UserInfo('.profile__name','.profile__descr');

// обработчик попапа редактирования инфо
function formSubmitHandlerEditUserProfile(event) {
    event.preventDefault();
    const inputValue = PopupEditInfo._getInputValues.bind(PopupEditInfo)();
    UserInf.setUserInfo(inputValue);
    PopupEditInfo.close();
}
//попап редактирования инфо
const PopupEditInfo = new PopupWithForm(formSubmitHandlerEditUserProfile,'.popup_edit-user-profile');
PopupEditInfo.setEventListeners();

//попап просмотра картинки
const PopupShowPict = new PopupWithImage('.popup_show-pict');
PopupShowPict.setEventListeners();


//подключение валидации
Array.from(document.querySelectorAll('form')).forEach(form =>{
    const validator = new FormValidator(config, form);
    validator.enableValidation();
})



// установка слушателей на кнопки открытия попапов
buttonOpenPopupEdit.addEventListener('click', ()=>{
const userData = UserInf.getUserInfo();
    profileName.textContent = userData.name;
    profileDescr.textContent = userData.about;
    PopupEditInfo.open();
});
buttonOpenPopupAdd.addEventListener('click', ()=>PopupAddImage.open());











