import '../index.css';
import {Card} from "../components/Card.js";
import {FormValidator} from "../components/FormValidator.js";
import {Section} from "../components/Section.js";
import {UserInfo} from "../components/UserInfo.js";
import {PopupWithImage} from "../components/PopupWithImage.js";
import {PopupWithForm} from "../components/PopupWithForm.js";

//импорт стартового массива и переменных
import {
    initialCards, config,template, buttonOpenPopupEdit,popupAddPict,profileName,profileDescr,
    nameInput, aboutInput, formEdit,popupEditUserProfile,
    popupShowPict, buttonOpenPopupAdd, formAdd,photoGridElement,
    profileNameSelector,profileDescrSelector,popupAddPictSelector,
    popupEditUserProfileSelector,popupShowPictSelector
} from "../utils/utils.js";


//функция создания карточки
function createCard(cardData,handleCardClick, templateSelector) {
    const cardItem = new Card(cardData,handleCardClick, templateSelector);
    return cardItem.generateCard();

}

//функция начльного рендеринга для sectionInitialCards
function renderStartCard(item) {
    this.addItem(createCard(item, handleCardClick, template));
}

//создание экземпляра  класса Section  для начального рендеринга карточек
const sectionInitialCards = new Section({items:initialCards,renderer: renderStartCard},config.photoGrid);


//Вызов метода отображения стартового массива
sectionInitialCards.rendererAllElements();

//вызов класса с инфо юзера
const userInfo = new UserInfo(profileNameSelector,profileDescrSelector);

// функция renderer для вызова в классе sectionCardRender
function renderForCard(data, handleCardClick, template) {
    return createCard(data, handleCardClick, template);
}
// создание экземпляра класс Section для рендеринга добавления карточки
const sectionCardRender = new Section({ renderer: renderForCard}, config.photoGrid);



// функция открытия попапа просмотра  при клике на карточку
function handleCardClick() {
    popupShowImage.open(event);
}

// обработчик добавления картинки для слушателя кнопки сабмит попапа добавления картинки
function formSubmitHandlerAddPict(data) {
    // const renderCardItem = new Section({
    //     renderer: () => {
    //         return createCard(valuesFromInput, handleCardClick, template);
    //
    //     }
    // }, config.photoGrid);

    sectionCardRender.addItem(renderForCard(data, handleCardClick, template));
    // popupAddImage.close.bind(popupAddImage)();
    popupAddImage.close.bind(popupAddImage)();
}

//попап добавления картинки - экземпляр класса PopupWithForm
const popupAddImage = new PopupWithForm(formSubmitHandlerAddPict,popupAddPictSelector);
popupAddImage.setEventListeners();

// обработчик попапа редактирования инфо для слушателя кнопки сабмита попапа редактирования инфо
function formSubmitHandlerEditUserProfile(valuesFromInput) {
     userInfo.setUserInfo(valuesFromInput);
    popupEditInfo.close.bind(popupEditInfo)();
}

//попап редактирования инфо - экземпляр класса PopupWithForm
const popupEditInfo = new PopupWithForm(formSubmitHandlerEditUserProfile,popupEditUserProfileSelector);
popupEditInfo.setEventListeners();

//попап просмотра картинки - экземпляр класса PopupWithImage
const popupShowImage = new PopupWithImage(popupShowPictSelector);
popupShowImage.setEventListeners();


//подключение валидации
//для попапа редактирования
const validatorPopupEditInfo = new FormValidator(config, formEdit);
validatorPopupEditInfo.enableValidation();

//для попапа добавления
const validatorPopupAddImage = new FormValidator(config, formAdd);
validatorPopupAddImage.enableValidation();


// установка слушателей на кнопки открытия попапов
buttonOpenPopupEdit.addEventListener('click', ()=>{
const userData = userInfo.getUserInfo();
    nameInput.value = userData.name;
    aboutInput.value = userData.about;
    popupEditInfo.open();
});
buttonOpenPopupAdd.addEventListener('click', ()=>{
    validatorPopupAddImage.clearError();
    popupAddImage.open();

});











